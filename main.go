package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/protoc-gen-go/descriptor"
	"github.com/jhump/protoreflect/desc"
)

func getTSFullEnumName(enum *desc.EnumDescriptor) string {
	return strings.Replace(enum.GetFullyQualifiedName(), ".", "_", -1)
}

func writeEnum(f *os.File, enum *desc.EnumDescriptor) {
	f.WriteString(fmt.Sprintf("declare enum %s {\n", getTSFullEnumName(enum)))
	values, endFlag := enum.GetValues(), ","
	if values != nil && len(values) > 0 {
		for i, value := range values {
			if i == (len(values) - 1) {
				endFlag = ""
			}
			f.WriteString(fmt.Sprintf("	%s = %d %s\n", value.GetName(), value.GetNumber(), endFlag))
		}
	}
	f.WriteString(fmt.Sprintf("}\n\n"))
}

func getTSFullMessageName(message *desc.MessageDescriptor) string {
	return strings.Replace(message.GetFullyQualifiedName(), ".", "_", -1)
}

func getTSFieldType(field *desc.FieldDescriptor) string {
	tsType, arrayFlag := "", ""
	if field.IsRepeated() {
		arrayFlag = "[]"
	}
	switch field.GetType() {
	case descriptor.FieldDescriptorProto_TYPE_INT32,
		descriptor.FieldDescriptorProto_TYPE_SINT32,
		descriptor.FieldDescriptorProto_TYPE_FIXED32,
		descriptor.FieldDescriptorProto_TYPE_SFIXED32,
		descriptor.FieldDescriptorProto_TYPE_UINT32,
		descriptor.FieldDescriptorProto_TYPE_INT64,
		descriptor.FieldDescriptorProto_TYPE_SINT64,
		descriptor.FieldDescriptorProto_TYPE_FIXED64,
		descriptor.FieldDescriptorProto_TYPE_SFIXED64,
		descriptor.FieldDescriptorProto_TYPE_UINT64,
		descriptor.FieldDescriptorProto_TYPE_FLOAT,
		descriptor.FieldDescriptorProto_TYPE_DOUBLE:
		tsType = "number"
	case descriptor.FieldDescriptorProto_TYPE_BOOL:
		tsType = "boolean"
	case descriptor.FieldDescriptorProto_TYPE_BYTES,
		descriptor.FieldDescriptorProto_TYPE_STRING:
		tsType = "string"
	case descriptor.FieldDescriptorProto_TYPE_ENUM:
		tsType = getTSFullEnumName(field.GetEnumType())
	case descriptor.FieldDescriptorProto_TYPE_MESSAGE:
		tsType = getTSFullMessageName(field.GetMessageType())
	default:
		panic(fmt.Sprintf("%d is unknow protobuf field type !!!", field.GetType()))
	}
	return fmt.Sprintf("%s%s", tsType, arrayFlag)
}

func writeMessage(f *os.File, message *desc.MessageDescriptor) {
	f.WriteString(fmt.Sprintf("declare interface %s {\n", getTSFullMessageName(message)))
	fields := message.GetFields()
	if fields != nil && len(fields) > 0 {
		for _, field := range fields {
			f.WriteString(fmt.Sprintf("	%s : %s ;\n", field.GetName(), getTSFieldType(field)))
		}
	}
	f.WriteString(fmt.Sprintf("}\n\n"))
}

func writeAllMessageAndNested(f *os.File, message *desc.MessageDescriptor) {
	writeMessage(f, message)
	nestedEnums := message.GetNestedEnumTypes()
	if nestedEnums != nil && len(nestedEnums) > 0 {
		for _, nestedEnum := range nestedEnums {
			writeEnum(f, nestedEnum)
		}
	}
	nestedMessages := message.GetNestedMessageTypes()
	if nestedMessages != nil && len(nestedMessages) > 0 {
		for _, nestedMessage := range nestedMessages {
			writeAllMessageAndNested(f, nestedMessage)
		}
	}
}

func load(buffer []byte, pbcPath string, outPath string) {
	var fileDescriptorSet descriptor.FileDescriptorSet
	if err := proto.Unmarshal(buffer, &fileDescriptorSet); err != nil {
		panic(fmt.Sprintf("%s is not a proto descriptor file", pbcPath))
	}
	fileDescriptors, err := desc.CreateFileDescriptorsFromSet(&fileDescriptorSet)
	if err != nil {
		panic(fmt.Sprintf("%s is not a proto descriptor file", pbcPath))
	}
	f, err := os.Create(outPath)
	if err != nil {
		panic(err)
	}
	for _, fileDescriptor := range fileDescriptors {
		for _, enum := range fileDescriptor.GetEnumTypes() {
			writeEnum(f, enum)
		}
		for _, message := range fileDescriptor.GetMessageTypes() {
			writeAllMessageAndNested(f, message)
		}
	}
}

func main() {
	if len(os.Args) < 2 {
		panic("format : pbcPath outPath !!!")
	}
	pbcPath, outPath := os.Args[1], os.Args[2]
	if len(pbcPath) == 0 || len(outPath) == 0 {
		panic("format : pbcPath outPath !!!")
	}
	buffer, err := ioutil.ReadFile(pbcPath)
	if err != nil {
		panic(fmt.Sprintf("%s is not exist", pbcPath))
	}
	load(buffer, pbcPath, outPath)
}

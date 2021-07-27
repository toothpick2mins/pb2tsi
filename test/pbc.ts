declare interface ro3_GroupPvpInfoNewReq {
}

declare interface ro3_GroupPvpInfoNewResp {
	result : ro3_GeneralRet ;
	group_pvp_info : ro3_GroupPvpInfoNew ;
}

declare interface ro3_GroupPvpBattleInfoReq {
}

declare interface ro3_GroupPvpBattleInfoResp {
	result : ro3_GeneralRet ;
	group_data : ro3_GroupPvpData[] ;
	role_data : ro3_GroupPvpRole[] ;
}

declare interface ro3_UnitExtInfo {
	account : string ;
	ip : string ;
}

declare interface ro3_OnlineUnit {
	state : ro3_OnlineUnit_State ;
	ext_info : ro3_UnitExtInfo ;
	login_time : number ;
	last_active_time : number ;
}

declare enum ro3_OnlineUnit_State {
	OFFLINE = 0 ,
	ONLINE = 1 
}

declare interface ro3_StatData {
	fields : ro3_StatData_Data[] ;
}

declare interface ro3_StatData_Data {
	key : string ;
	val : string ;
}

declare interface ro3_SealAccountInfo {
	username : string ;
	reason : string ;
	time : number ;
	expire_time : number ;
	is_done : number ;
}

declare interface ro3_UserStatCache {
	username : string ;
	online_time : number ;
	last_record_time : number ;
}

declare interface ro3_KC_SendingMailCache {
	username : string ;
	guid : string ;
	mails_buffer : string ;
	send_times : number ;
	last_send_time : number ;
}

declare interface ro3_KC_SvrData {
	svr_data : ro3_KC_SvrData_ServerData[] ;
}

declare interface ro3_KC_SvrData_ServerData {
	sid : string ;
	vip_count : number ;
}

declare interface ro3_KC_RankPool {
	rank_type : number ;
	ranks : ro3_RankCell[] ;
	end_time : number ;
	rewardflag : number ;
}

declare interface ro3_KC_ActKaifuPower {
	activity_id : number ;
	ranks : ro3_RankCell[] ;
	reward_flag : number ;
	reward_time : number ;
	max_cnt : number ;
	end_time : number ;
}

declare interface ro3_KC_RankMain {
	rank_type : number ;
	end_time : number ;
	file_name : string ;
	id : number ;
	last_id : number ;
	last_file_name : string ;
}

declare interface ro3_RoleBossRec {
	uid : string ;
	reward_flag : number ;
	rand_num : number ;
	is_owner : number ;
	fastpass : number ;
}

declare interface ro3_KC_BossData {
	pos : number ;
	owner : ro3_SnapRole ;
	role_list : ro3_RoleBossRec[] ;
	reward : ro3_KC_BossData_OwnerReward[] ;
	time_stamp : number ;
	next_time : number ;
	_helper : ro3_SnapRole ;
	helpers : ro3_KC_BossData_BossHelper[] ;
}

declare interface ro3_KC_BossData_OwnerReward {
	id : number ;
	num : number ;
}

declare interface ro3_KC_BossData_BossHelper {
	uid_son : string ;
	uid_helper : string ;
}

declare interface ro3_KC_BossStage {
	stage_id : number ;
	rewards : ro3_KC_BossData[] ;
	tmp_rewards : ro3_KC_BossData[] ;
	role_shaizi : ro3_RoleBossRec[] ;
	shaizi_time : number ;
}

declare interface ro3_KC_RobotData {
	role_data : ro3_RoleData ;
	nickname : string[] ;
	param : number ;
}

declare interface ro3_KC_GroupPveData {
	end_time : number ;
	pve_ranks : ro3_GroupPveRankCell[] ;
}

declare interface ro3_KC_GroupAnti {
	anti_list : ro3_KC_GroupAnti_KC_GroupAntiData[] ;
	max_groupid : number ;
}

declare interface ro3_KC_GroupAnti_KC_GroupAntiData {
	uid : string ;
	end_time : number ;
}

declare interface ro3_RankCell {
	username : string ;
	value : number ;
	stamp : number ;
	rewardflag : number ;
	param : number ;
}

declare interface ro3_MiniGroupRankSnap {
	uid : number ;
	name : string ;
	mems : ro3_MiniGroupMember[] ;
}

declare interface ro3_MsgRankCell {
	snap : ro3_SnapRole ;
	value : number ;
	rank : number ;
	param : number ;
	mini_group_snap : ro3_MiniGroupRankSnap ;
	group_snap : ro3_GroupSnap ;
	ymirspace_finish_info : ro3_YmirSapceFinishInfo ;
}

declare interface ro3_GroupRankCell {
	name : string ;
	val : number ;
	time_stamp : number ;
	groupid : number ;
}

declare interface ro3_GroupPveRankCell {
	stage_id : number ;
	ranks : ro3_GroupRankCell[] ;
}

declare interface ro3_PvpGetDataReq {
	ttype : number ;
}

declare interface ro3_PvpGetDataResp {
	result : ro3_GeneralRet ;
	paiwei : ro3_PvpPaiwei ;
	jingji : ro3_PvpJingji ;
	selfrank : number ;
	rank : ro3_MsgRankCell ;
}

declare interface ro3_PvpFightReq {
	ttype : number ;
	uid : string ;
}

declare interface ro3_PvpFightResp {
	result : ro3_GeneralRet ;
	ttype : number ;
	paiwei : ro3_PvpPaiwei ;
	jingji : ro3_PvpJingji ;
	rsync : ro3_GeneralRsync ;
	selfrank : number ;
}

declare interface ro3_PvpResetReq {
}

declare interface ro3_PvpResetResp {
	result : ro3_GeneralRet ;
	jingji : ro3_PvpJingji ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_PvpPaiweiBuyReq {
}

declare interface ro3_PvpPaiweiBuyResp {
	result : ro3_GeneralRet ;
	paiwei : ro3_PvpPaiwei ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_PvpPaiweiEnemyReq {
}

declare interface ro3_PvpPaiweiEnemyResp {
	result : ro3_GeneralRet ;
	enemy : ro3_SnapRole ;
	level : number ;
	star : number ;
}

declare interface ro3_ShopItemCell {
	idx : number ;
	item : ro3_Item ;
	count : number ;
	cost : number ;
	original_cost : number ;
	max_buy : number ;
	lock : number ;
	cost_items : ro3_Item[] ;
	ext : ro3_ShopItemCell_ExtData ;
	cost2 : number ;
	discount : number ;
	kind : number ;
}

declare interface ro3_ShopItemCell_ExtData {
	pos : number ;
	unlock : number ;
}

declare interface ro3_ShopCell {
	shop_id : number ;
	refresh_times : number ;
	last_manual_refresh_time : number ;
	next_free_fresh_time : number ;
	shop_items : ro3_ShopItemCell[] ;
	next_manual_free_fresh_time : number ;
	version : number ;
}

declare interface ro3_Shop {
	shop_cells : ro3_ShopCell[] ;
}

declare interface ro3_MailListReq {
	start_idx : number ;
	count : number ;
	fmt : number ;
}

declare interface ro3_MailListResp {
	result : ro3_GeneralRet ;
	mail_list : ro3_MailList ;
	start_idx : number ;
	total_num : number ;
}

declare interface ro3_MailReadReq {
	mail_ins_id : number[] ;
}

declare interface ro3_MailReadResp {
	result : ro3_GeneralRet ;
	mail : ro3_Mail[] ;
}

declare interface ro3_MailRewardReq {
	mail_ins_id : number[] ;
}

declare interface ro3_MailRewardResp {
	result : ro3_GeneralRet ;
	mail_ins_id : number[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_MailDeleteReq {
	mail_ins_id : number[] ;
}

declare interface ro3_MailDeleteResp {
	result : ro3_GeneralRet ;
	mail_ins_id : number[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_MailNotify {
	mail : ro3_Mail[] ;
	rsync : ro3_GeneralRsync ;
	unread_num : number ;
}

declare interface ro3_RedPacketNotify {
	red_list : ro3_RedPacketList ;
}

declare interface ro3_GetRedPacketNotifyReq {
}

declare interface ro3_GetRedPacketNotifyResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GetRedPacketRewardReq {
	id : number ;
	end_time : number ;
}

declare interface ro3_GetRedPacketRewardResp {
	result : ro3_GeneralRet ;
	data : ro3_RedPacket ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_att_value {
	idx : number ;
	value : number ;
}

declare interface ro3_skill_info {
	skill_id : number ;
	skill_level : number ;
	buff_list : ro3_skill_info_buff_info[] ;
	follow_skill_list : ro3_skill_info[] ;
}

declare interface ro3_skill_info_buff_info {
	buff_id : number ;
	buff_level : number ;
}

declare interface ro3_HeroAttribInfo {
	attrib_list : ro3_att_value[] ;
	power : number ;
	cid : number ;
	skill_list : ro3_skill_info[] ;
	passive_skill : ro3_HeroAttribInfo_Passive[] ;
	show_data : ro3_ShowData ;
	power_records : number[] ;
	pet_skill : ro3_HeroAttribInfo_PetSkill[] ;
}

declare interface ro3_HeroAttribInfo_Passive {
	type : number ;
	skill_list : ro3_skill_info[] ;
}

declare interface ro3_HeroAttribInfo_PetSkill {
	monster_id : number ;
	skill_list : ro3_skill_info[] ;
}

declare interface ro3_ElfSkill {
	elf_idx : number ;
	skill_list : ro3_skill_info[] ;
}

declare interface ro3_BattleFrontFightInfo {
	Id : number ;
	Level : number ;
	skill_list : ro3_skill_info[] ;
	equips : number ;
	equip_list : number[] ;
}

declare interface ro3_AttribInfo {
	heros : ro3_HeroAttribInfo[] ;
	elf_skill_list : ro3_ElfSkill[] ;
	things_monster : number ;
	hj_add : number[] ;
	power_records : number[] ;
	things_skill_list : ro3_skill_info[] ;
	heropower_skill_list_ext : ro3_skill_info[] ;
	things_guard : number ;
	battle_front : ro3_BattleFrontFightInfo ;
}

declare interface ro3_QiFuHorsePosi {
	posi : number ;
	horse_id : number ;
	xl_lv : number ;
}

declare interface ro3_QiFuSkillInfo {
	skillid : number ;
	lv : number ;
}

declare interface ro3_QiFu {
	lv : number ;
	exp : number ;
	horse_list : ro3_QiFuHorsePosi[] ;
	fs_lv : number ;
	zz_lv : number ;
	active : number ;
	skillinfo : ro3_QiFuSkillInfo[] ;
}

declare interface ro3_ThingsGuard {
	type : number ;
	id : number ;
	posis : number[] ;
	skills : number[] ;
}

declare interface ro3_ThingsGuardInfo {
	active_type : number ;
	guards : ro3_ThingsGuard[] ;
}

declare interface ro3_GoldenBuyInfo {
	usednum : number ;
	leavenum : number ;
	lastdayid : number ;
}

declare interface ro3_ThingsGuardActiveReq {
	type : number ;
}

declare interface ro3_ThingsGuardActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_ThingsGuardLevelUpReq {
	type : number ;
}

declare interface ro3_ThingsGuardLevelUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsguardInfo : ro3_ThingsGuardInfo ;
}

declare interface ro3_ThingsGuardSkillLevelUpReq {
	type : number ;
	skill_id : number ;
	level : number ;
}

declare interface ro3_ThingsGuardSkillLevelUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsguardInfo : ro3_ThingsGuardInfo ;
}

declare interface ro3_ThingsGuardPosiLevelUpReq {
	type : number ;
	count : number ;
}

declare interface ro3_ThingsGuardPosiLevelUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsguardInfo : ro3_ThingsGuardInfo ;
}

declare interface ro3_XingzuoActiveReq {
	id : number ;
	hero_id : number ;
}

declare interface ro3_XingzuoActiveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	xingzuo : ro3_Xingzuo ;
}

declare interface ro3_XingzuoLvUpReq {
	id : number ;
	hero_id : number ;
	level : number ;
}

declare interface ro3_XingzuoLvUpResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	xingzuo : ro3_Xingzuo ;
}

declare interface ro3_XingzuoSkillLvUpReq {
	id : number ;
	hero_id : number ;
	level : number ;
}

declare interface ro3_XingzuoSkillLvUpResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	xingzuo : ro3_Xingzuo ;
}

declare interface ro3_XingzuoDisplayReq {
	display_id : number ;
	hero_id : number ;
}

declare interface ro3_XingzuoDisplayResp {
	result : ro3_GeneralRet ;
	display_id : number ;
}

declare interface ro3_CaiShenDao {
	activity_id : number ;
	level : number ;
	diamond : number ;
	mail_extra : number[] ;
	total_extra : number ;
	version : number ;
}

declare interface ro3_ActGoalRewardLimit {
	activity_id : number ;
	goals : ro3_ActGoalRewardLimit_GoalRewardLimitCell[] ;
	end_time : number ;
}

declare interface ro3_ActGoalRewardLimit_GoalRewardLimitCell {
	idx : number ;
	number : number ;
}

declare interface ro3_ActGoalEntity1 {
	activity_id : number ;
	ttype : number ;
	curval : number ;
	conds : ro3_ActGoalEntity1_GoalCond1[] ;
	got_conds : ro3_ActGoalEntity1_GoalCond1[] ;
	version : number ;
	is_completed : number ;
	next_addval_time : number ;
	svr_data : ro3_ActGoalRewardLimit ;
}

declare interface ro3_ActGoalEntity1_GoalCond1 {
	idx : number ;
	cond : number ;
	state : number ;
}

declare interface ro3_ActGoalEntity2 {
	activity_id : number ;
	conds : ro3_ActGoalEntity2_GoalCond2[] ;
	got_conds : ro3_ActGoalEntity2_GoalCond2[] ;
	version : number ;
	is_completed : number ;
	last_addval_time : number ;
	svr_data : ro3_ActGoalRewardLimit ;
}

declare interface ro3_ActGoalEntity2_GoalCond2 {
	idx : number ;
	ttype : number ;
	curval : number ;
	cond : number ;
	state : number ;
	num : number ;
}

declare interface ro3_ActGoalNewCell {
	goal_id : number ;
	ctype : number ;
	cvalue : number ;
	complete : number ;
	state : number ;
}

declare interface ro3_ActvyCarnival {
	activity_id : number ;
	goal_list : ro3_ActGoalNewCell[] ;
	got_time : number ;
	goal_number : number ;
	version : number ;
}

declare interface ro3_ActvyFoodFestival {
	activity_id : number ;
	task_list : ro3_TaskCell[] ;
	got_time : number ;
	buy_task_count : number ;
	food_festival_point : number ;
	got_reward_festival_point : number ;
	shop : ro3_ActvyFoodFestival_FoodFestivalShop ;
	alice_total_task_num : number ;
	alice_complete_task_num : number ;
	alice_is_day_reward : boolean ;
	version : number ;
}

declare interface ro3_ActvyFoodFestival_FoodFestivalShop {
	shop_items : ro3_ActvyFoodFestival_FoodFestivalShop_FoodFestivalShopCell[] ;
}

declare interface ro3_ActvyFoodFestival_FoodFestivalShop_FoodFestivalShopCell {
	idx : number ;
	buy_times : number ;
}

declare interface ro3_ActSysMonster {
	activity_id : number ;
	list : ro3_ActSysMonster_SysMonsterCell[] ;
	end_time : number ;
}

declare interface ro3_ActSysMonster_SysMonsterCell {
	id : number ;
	username : string ;
	nickname : string ;
}

declare interface ro3_ActMonster {
	activity_id : number ;
	list : ro3_ActMonster_MonsterList[] ;
	version : number ;
	svr_data : ro3_ActSysMonster ;
}

declare interface ro3_ActMonster_MonsterCell {
	stage_id : number ;
	kill_time : number ;
}

declare interface ro3_ActMonster_MonsterList {
	id : number ;
	data : ro3_ActMonster_MonsterCell[] ;
	reward_flag : number ;
	reward_flag1 : number ;
	reward_flag2 : number ;
}

declare interface ro3_SignInInfo {
	signdays : number ;
	rewardid : number ;
	isget : number ;
	lastsigndayid : number ;
	refreshdayid : number ;
	rewardids : number[] ;
	enddayid : number ;
	signrewards : number[] ;
	activity_id : number ;
	needdays : ro3_SignInInfo_infoforclient[] ;
	version : number ;
	edition : number ;
}

declare interface ro3_SignInInfo_rewardinfo {
	id : number ;
	num : number ;
}

declare interface ro3_SignInInfo_infoforclient {
	ID : number ;
	Para : number ;
	Reward : ro3_SignInInfo_rewardinfo[] ;
}

declare interface ro3_LoginActInfo {
	dayid : number[] ;
	nowdayid : number ;
	refreshdayid : number ;
	enddayid : number ;
	logindayid : number[] ;
	activity_id : number ;
	version : number ;
}

declare interface ro3_RechargeRankInfo {
	username : string ;
	nickname : string ;
	ranknum : number ;
	costnum : number ;
	rewardtype : number ;
	lastcosttime : number ;
}

declare interface ro3_RechargeListInfo {
	myinfo : ro3_RechargeRankInfo ;
	infos : ro3_RechargeRankInfo[] ;
	activity_id : number ;
	version : number ;
}

declare interface ro3_ActSportsRankCell {
	rank : number ;
	username : string ;
	nickname : string ;
	value : number ;
}

declare interface ro3_ActSportsRank {
	day : number ;
	ttype : number ;
	total_cnt : number ;
	reward_flag : number ;
	list : ro3_ActSportsRankCell[] ;
}

declare interface ro3_ActSports {
	activity_id : number ;
	ranks : ro3_ActSportsRank[] ;
	start_time : number ;
	end_time : number ;
	is_end : number ;
}

declare interface ro3_Sports {
	activity_id : number ;
	version : number ;
}

declare interface ro3_Expedition {
	activity_id : number ;
	level : number ;
	value : number ;
	normalids : number ;
	costids : number ;
	is_promotion : number ;
	is_rise : number ;
	version : number ;
	edition : number ;
	historylevel : number ;
	historygift : number ;
}

declare interface ro3_LuckyCard {
	activity_id : number ;
	rewardinfos : ro3_LuckyCard_chooseinfo[] ;
	ids : number[] ;
	is_confirm : number ;
	choosenum : number ;
	version : number ;
	freeendtime : number ;
}

declare interface ro3_LuckyCard_chooseinfo {
	area : number ;
	id : number ;
	itemid : number ;
	num : number ;
	quality : number ;
	isget : number ;
}

declare interface ro3_ActDanbi {
	activity_id : number ;
	ttype : number ;
	conds : ro3_ActDanbi_GoalCond1[] ;
	got_conds : ro3_ActDanbi_GoalCond1[] ;
	version : number ;
	is_completed : number ;
	next_addval_time : number ;
}

declare interface ro3_ActDanbi_GoalCond1 {
	idx : number ;
	cond : number ;
	state : number ;
	reachval : number ;
	curval : number ;
}

declare interface ro3_ActGiftDia {
	activity_id : number ;
	day : number ;
	next_stamp : number ;
	cells : ro3_ActGiftDia_ActGiftDiaCell[] ;
	version : number ;
}

declare interface ro3_ActGiftDia_ActGiftDiaCell {
	id : number ;
	count : number ;
}

declare interface ro3_ActGiftRecharge {
	activity_id : number ;
	day : number ;
	next_stamp : number ;
	cells : ro3_ActGiftRecharge_ActGiftReCell[] ;
	version : number ;
}

declare interface ro3_ActGiftRecharge_ActGiftReCell {
	id : number ;
	count : number ;
}

declare interface ro3_ActKaifuPower {
	activity_id : number ;
	ranks : ro3_MsgRankCell[] ;
	reward_time : number ;
	version : number ;
}

declare interface ro3_ActChaoRecharge {
	activity_id : number ;
	next_stamp : number ;
	records : number[] ;
	reward_flag : number ;
	version : number ;
}

declare interface ro3_RichSign {
	activity_id : number ;
	final_flag : number ;
	next_day : number ;
	day : number ;
	cond : number ;
	value : number ;
	nowdayid : number[] ;
	records1 : number[] ;
	records2 : number[] ;
	version : number ;
}

declare interface ro3_SaleNotice {
	activity_id : number ;
	rewards : number[] ;
	version : number ;
}

declare interface ro3_LoginRedPacket {
	activity_id : number ;
	receive_days : number[] ;
	withdraw_days : number[] ;
	withdraw_cnt : number ;
	version : number ;
}

declare interface ro3_TenThousandRebate {
	activity_id : number ;
	withdraw_days : number[] ;
	reward_days : number[] ;
	version : number ;
}

declare interface ro3_CashRebate {
	activity_id : number ;
	withdraw_days : number[] ;
	gift_info : ro3_CashRebate_GiftInfo[] ;
	version : number ;
}

declare interface ro3_CashRebate_GiftInfo {
	id : number ;
	next_buy_time : number ;
	buy_times : number ;
}

declare interface ro3_Holiday {
	activity_id : number ;
	gift_info : ro3_Holiday_GiftInfo[] ;
	login_gift_reward_day : number ;
	login_gift_day : number ;
	version : number ;
}

declare interface ro3_Holiday_GiftInfo {
	id : number ;
	buy_times : number ;
}

declare interface ro3_Holiday618 {
	activity_id : number ;
	task_list : ro3_TaskCell[] ;
	gift_info : ro3_Holiday618_GiftInfo[] ;
	total_cost_money : number ;
	have_reward : number[] ;
	version : number ;
}

declare interface ro3_Holiday618_GiftInfo {
	id : number ;
	day_id : number ;
	day_buy_times : number ;
	total_buy_times : number ;
}

declare interface ro3_Summon {
	activity_id : number ;
	summon_num : number ;
	is_rank : number ;
	baodi_times : number ;
	version : number ;
}

declare interface ro3_BlindBox {
	activity_id : number ;
	blind_num : number ;
	baodi_times : number ;
	version : number ;
	dayid : number ;
}

declare interface ro3_ElfHelp {
	activity_id : number ;
	theme_info : ro3_ElfHelp_ThemeInfo[] ;
	version : number ;
	dayid : number ;
}

declare interface ro3_ElfHelp_ThemeInfo {
	theme : number ;
	times : number ;
}

declare interface ro3_KillMonsterFestival {
	activity_id : number ;
	day_id : number ;
	day_hit_boss_cnt : number ;
	reward_info : ro3_KillMonsterFestival_RewardInfo[] ;
	day_use_item_cnt : number ;
	battle_use_item_cnt : number ;
	version : number ;
}

declare interface ro3_KillMonsterFestival_RewardInfo {
	stage_id : number ;
	rate : number ;
	timestamp : number ;
	kill_monster_num : number ;
}

declare interface ro3_OneCoin {
	activity_id : number ;
	gift_info : ro3_OneCoin_GiftInfo[] ;
	version : number ;
}

declare interface ro3_OneCoin_GiftInfo {
	rechargeid : number ;
	config : number ;
	timestamp : number ;
}

declare interface ro3_ZeroCoin {
	activity_id : number ;
	buy_info : ro3_ZeroCoin_BuyInfo[] ;
	version : number ;
}

declare interface ro3_ZeroCoin_BuyInfo {
	config : number ;
	dayid : number ;
	rewarddays : number[] ;
	logindays : number[] ;
}

declare interface ro3_HFLuckyShop {
	activity_id : number ;
	buy_info : ro3_HFLuckyShop_BuyInfo[] ;
	freenum : number ;
	edition : number ;
	rewardids : number[] ;
	dayid : number ;
	refreshnum : number ;
	version : number ;
}

declare interface ro3_HFLuckyShop_BuyInfo {
	config : number ;
	num : number ;
}

declare interface ro3_HFLottery {
	activity_id : number ;
	rechargenum : number ;
	edition : number ;
	version : number ;
}

declare interface ro3_CatBoard {
	activity_id : number ;
	gift_info : ro3_CatBoard_GiftInfo[] ;
	total_point : number ;
	have_reward : number[] ;
	version : number ;
}

declare interface ro3_CatBoard_GiftInfo {
	id : number ;
	day_id : number ;
	day_buy_times : number ;
	week_id : number ;
	week_buy_times : number ;
	total_buy_times : number ;
}

declare interface ro3_CashBack {
	activity_id : number ;
	gift_info : ro3_CashBack_GiftInfo[] ;
	version : number ;
}

declare interface ro3_CashBack_GiftInfo {
	id : number ;
	buy_times : number ;
	withdraw_times : number ;
}

declare interface ro3_GrowthGift {
	activity_id : number ;
	gift_info : ro3_GrowthGift_GiftInfo[] ;
	version : number ;
}

declare interface ro3_GrowthGift_GiftInfo {
	id : number ;
	buy_times : number ;
	time_stamp : number ;
	have_reward : number[] ;
}

declare interface ro3_BoliValue {
	activity_id : number ;
	info : ro3_BoliValue_BoliValueInfo ;
	version : number ;
}

declare interface ro3_BoliValue_BoliValueChoice {
	Id : number ;
	rand : number ;
}

declare interface ro3_BoliValue_BoliValueInfo {
	state : number ;
	diamond_count : number ;
	choices : ro3_BoliValue_BoliValueChoice[] ;
	lilian_reward_get_flag : number ;
	lilian_reward_get_time : number ;
	get_corn_count : number ;
	diamond_count_total : number ;
}

declare interface ro3_JianwenTehuiCell {
	id : number ;
	buy_times : number ;
	index : number ;
}

declare interface ro3_JianwenTehui {
	activity_id : number ;
	version : number ;
	edition : number ;
	dayid : number ;
	cells : ro3_JianwenTehuiCell[] ;
}

declare interface ro3_HeroFightCell {
	id : number ;
	got : number ;
	fight_count : number ;
	value : number ;
	rank : number ;
}

declare interface ro3_HeroFightRecord {
	id : number ;
	value : number ;
}

declare interface ro3_HeroFight {
	activity_id : number ;
	version : number ;
	edition : number ;
	dayid : number ;
	cells : ro3_HeroFightCell[] ;
	reward_got_ids : number[] ;
	rank : number ;
	records : ro3_HeroFightRecord[] ;
	done : number ;
}

declare interface ro3_ChampionsShip {
	activity_id : number ;
	task_list : ro3_TaskCell[] ;
	type : number ;
	have_reward : ro3_ChampionsShip_StageReward[] ;
	last_rank : number ;
	have_rank : number[] ;
	dayid : number ;
	kuafu_type : number ;
	integral : number[] ;
	start_dayid : number ;
	limit : number[] ;
	version : number ;
}

declare interface ro3_ChampionsShip_StageReward {
	task_type : number ;
	stage : number[] ;
}

declare interface ro3_ShiLianRoad {
	activity_id : number ;
	lv : number ;
	exp : number ;
	buy_card : number ;
	have_reward : number[] ;
	ope_box_cnt : number ;
	box_have_reward : number[] ;
	task_list : ro3_TaskCell[] ;
	base_exp : number ;
	version : number ;
}

declare interface ro3_ShiLianDice {
	activity_id : number ;
	telecontrol_dice : number ;
	dice : number ;
	buy_dice : number ;
	ope_box_cnt : number ;
	box_index : number[] ;
	cur_index : number ;
	bao_di : number ;
	dice_update : number ;
	version : number ;
}

declare interface ro3_StageDrop {
	activity_id : number ;
	drop_num : number ;
	have_reward : number[] ;
	version : number ;
}

declare interface ro3_QuesChallenge {
	activity_id : number ;
	jifen : number ;
	version : number ;
	stage : number[] ;
	start_time : number ;
	end_time : number ;
	ques_info : number[] ;
	total_time : number ;
	right_num : number ;
	hava_send_mail : number ;
}

declare interface ro3_GradeFund {
	activity_id : number ;
	is_buy : number ;
	have_reward : number[] ;
	have_extra_reward : number[] ;
	version : number ;
}

declare interface ro3_StampBook {
	activity_id : number ;
	task_list : ro3_TaskCell[] ;
	version : number ;
}

declare interface ro3_CrossCompetition {
	activity_id : number ;
	base_power : number ;
	type : number ;
	version : number ;
}

declare interface ro3_CrossCompetitionRead {
	activity_id : number ;
	version : number ;
}

declare interface ro3_CrossGift {
	activity_id : number ;
	gift_time : ro3_CrossGift_GiftTime[] ;
	version : number ;
}

declare interface ro3_CrossGift_GiftTime {
	gift_id : number ;
	time : number ;
}

declare interface ro3_MazeDungeon {
	activity_id : number ;
	cur_stage_id : number ;
	stage_reward_list : ro3_MazeDungeon_StageReward[] ;
	version : number ;
}

declare interface ro3_MazeDungeon_StageReward {
	stage_id : number ;
	reward_list : ro3_Item[] ;
}

declare interface ro3_FreeGift {
	activity_id : number ;
	is_buy : boolean ;
	return_day : number ;
	time_stamp : number ;
	version : number ;
}

declare interface ro3_MazeGift {
	activity_id : number ;
	gift_info : ro3_MazeGift_GiftInfo[] ;
	version : number ;
}

declare interface ro3_MazeGift_GiftInfo {
	id : number ;
	buy_cnt : number ;
}

declare interface ro3_MazePass {
	activity_id : number ;
	lv : number ;
	exp : number ;
	total_exp : number ;
	buy_card : number ;
	normal_reward_id : number ;
	privilege_reward_id : number ;
	version : number ;
}

declare interface ro3_AdventureTeamMemInfo {
	uid : string ;
	name : string ;
	image_id : number ;
	job : number ;
	markup : number ;
	is_friend : boolean ;
}

declare interface ro3_Adventure {
	activity_id : number ;
	history_adventure_info : ro3_Adventure_AdventureInfo[] ;
	cur_adventure_info : ro3_Adventure_AdventureInfo ;
	total_distance : number ;
	cur_adventure_uid : number ;
	cur_log_uid : number ;
	single_max_distance : number ;
	version : number ;
}

declare interface ro3_Adventure_AdventureInfo {
	adventure_uid : number ;
	start_time : number ;
	end_time : number ;
	team : ro3_AdventureTeamMemInfo[] ;
	recruit_list : ro3_AdventureTeamMemInfo[] ;
	log : ro3_Adventure_AdventureInfo_AdventureLog[] ;
	last_event_time : number ;
	markup : number ;
	distance : number ;
	settlement_reward : ro3_Item[] ;
	extra_reward : ro3_Item[] ;
	event_reward : ro3_Item[] ;
}

declare interface ro3_Adventure_AdventureInfo_AdventureLog {
	log_uid : number ;
	event_id : number ;
	uid : string ;
	nickname : string ;
	int_param : number[] ;
	str_param : string[] ;
	time : number ;
	state : number ;
	reward : ro3_Item[] ;
	option : number ;
}

declare interface ro3_TempleTrialStage {
	count : number ;
	buy_count : number ;
}

declare interface ro3_TempleTrial {
	activity_id : number ;
	version : number ;
	edition : number ;
	dayid : number ;
	stages : ro3_TempleTrialStage[] ;
	stage_info : ro3_TempleTrialStage ;
}

declare interface ro3_Activity {
	cai_shen_dao : ro3_CaiShenDao ;
	goal_actvys1 : ro3_ActGoalEntity1[] ;
	goal_actvys2 : ro3_ActGoalEntity2[] ;
	carnival : ro3_ActvyCarnival ;
	monster : ro3_ActMonster ;
	sign_info : ro3_SignInInfo ;
	loginact_info : ro3_LoginActInfo ;
	rechargelist_info : ro3_RechargeListInfo ;
	food_festival : ro3_ActvyFoodFestival ;
	sports : ro3_Sports ;
	expedition_info : ro3_Expedition ;
	danbi_kaifu : ro3_ActDanbi ;
	gift_diamond : ro3_ActGiftDia ;
	gift_recharge : ro3_ActGiftRecharge ;
	kaifu_power : ro3_ActKaifuPower ;
	chao_recharge : ro3_ActChaoRecharge ;
	lucky_card : ro3_LuckyCard ;
	rich_sign : ro3_RichSign ;
	sale_notice : ro3_SaleNotice ;
	sale_notice_first : ro3_SaleNotice ;
	loginact_info_2 : ro3_LoginActInfo ;
	sign_info_2 : ro3_SignInInfo ;
	login_red_packet : ro3_LoginRedPacket ;
	ten_thousand_rebate : ro3_TenThousandRebate ;
	cash_rebate : ro3_CashRebate ;
	holiday : ro3_Holiday ;
	holiday618 : ro3_Holiday618 ;
	summon : ro3_Summon ;
	kill_monster_festival : ro3_KillMonsterFestival ;
	onecoin : ro3_OneCoin ;
	zerocoin : ro3_ZeroCoin ;
	summon_2 : ro3_Summon ;
	luckyshop : ro3_HFLuckyShop ;
	lottery : ro3_HFLottery ;
	cat_board : ro3_CatBoard ;
	cash_back : ro3_CashBack ;
	growth_gift : ro3_GrowthGift ;
	jianwen_tehui : ro3_JianwenTehui ;
	boli_value : ro3_BoliValue ;
	champions_ship : ro3_ChampionsShip ;
	shi_lian_road : ro3_ShiLianRoad ;
	festival_login_info : ro3_LoginActInfo ;
	stage_drop : ro3_StageDrop ;
	blind_box : ro3_BlindBox ;
	elf_help : ro3_ElfHelp ;
	ques_challenge : ro3_QuesChallenge ;
	gradefund : ro3_GradeFund ;
	stamp_book : ro3_StampBook ;
	hero_fight : ro3_HeroFight ;
	maze_dungeon : ro3_MazeDungeon ;
	free_gift : ro3_FreeGift ;
	maze_gift : ro3_MazeGift ;
	maze_pass : ro3_MazePass ;
	shi_lian_dice : ro3_ShiLianDice ;
	adventure : ro3_Adventure ;
	cross_competition : ro3_CrossCompetition ;
	cross_competition_read : ro3_CrossCompetitionRead ;
	cross_gift : ro3_CrossGift ;
	temple_trial : ro3_TempleTrial ;
	task_version : number ;
}

declare interface ro3_ActivityRewardConfig {
	cai_shen_dao_conf : ro3_ActivityRewardConfig_CaiShenDaoConfig ;
	goal_actvys_conf : ro3_ActivityRewardConfig_GoalActvyInfoConfig ;
	monster_conf : ro3_ActivityRewardConfig_ActMonsterConfig ;
	carnival_conf : ro3_ActivityRewardConfig_ActvyCarnivalConfig ;
	sign_conf : ro3_ActivityRewardConfig_SignActConfig ;
	loginact_conf : ro3_ActivityRewardConfig_LoginActConfig ;
	rechargelist_conf : ro3_ActivityRewardConfig_RechargeListConfig ;
	sports_conf : ro3_ActivityRewardConfig_SportsConfig ;
	expedition_conf : ro3_ActivityRewardConfig_ExpeditionConfig ;
	danbi_conf : ro3_ActivityRewardConfig_GoalActvyInfoConfig ;
	giftdiamond_conf : ro3_ActivityRewardConfig_GiftDiamondConfig ;
	giftrecharge_conf : ro3_ActivityRewardConfig_GiftRechargeConfig ;
	kaifupower_conf : ro3_ActivityRewardConfig_KaifuPowerConfig ;
	chaorecharge_conf : ro3_ActivityRewardConfig_ChaoRechargeConfig ;
	luckcard_conf : ro3_ActivityRewardConfig_LuckyCardConfig ;
	richsign_conf : ro3_ActivityRewardConfig_RichSignConfig ;
	food_festival_conf : ro3_ActivityRewardConfig_FoodFestivalConfig ;
	loginact_conf_2 : ro3_ActivityRewardConfig_LoginActConfig ;
	login_red_packet_conf : ro3_ActivityRewardConfig_LoginRedPacketConfig ;
	ten_thousand_rebate_conf : ro3_ActivityRewardConfig_TenThousandRebateConfig ;
	cash_rebate_conf : ro3_ActivityRewardConfig_CashRebateConfig ;
	holiday_conf : ro3_ActivityRewardConfig_HolidayConfig ;
	sign_conf_2 : ro3_ActivityRewardConfig_SignActConfig ;
	holiday618_conf : ro3_ActivityRewardConfig_Holiday618Config ;
	summon_conf : ro3_ActivityRewardConfig_SummonConfig ;
	kill_monster_festival_conf : ro3_ActivityRewardConfig_KillMonsterFestivalConfig ;
	one_coin_conf : ro3_ActivityRewardConfig_OneCoinConfig ;
	zero_coin_conf : ro3_ActivityRewardConfig_ZeroCoinConfig ;
	summon_conf_2 : ro3_ActivityRewardConfig_Summon2Config ;
	luckyshop_conf : ro3_ActivityRewardConfig_HFLuckyShopConfig ;
	lottery_conf : ro3_ActivityRewardConfig_HFLotteryConfig ;
	cat_board_conf : ro3_ActivityRewardConfig_CatBoardConfig ;
	cash_back_conf : ro3_ActivityRewardConfig_CashBackConfig ;
	growth_gift_conf : ro3_ActivityRewardConfig_GrowthGiftConfig ;
	jianwen_tehui_conf : ro3_ActivityRewardConfig_JianwenTehuiConfig ;
	boli_value_conf : ro3_ActivityRewardConfig_BoliValueConfig ;
	champions_ship_conf : ro3_ActivityRewardConfig_ChampionsShipConfig ;
	shi_lian_road_conf : ro3_ActivityRewardConfig_ShiLianRoadConfig ;
	festival_login_conf : ro3_ActivityRewardConfig_FestivalLoginConfig ;
}

declare interface ro3_ActivityRewardConfig_ActivityRewardCell {
	arcell : number[] ;
}

declare interface ro3_ActivityRewardConfig_GAICCell {
	index : number ;
	ttype : number ;
	para : number[] ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	limit : number ;
	svr_num : number ;
	personal_limit : number[] ;
	der : number ;
}

declare interface ro3_ActivityRewardConfig_GoalActvyInfoConfig {
	activity_id : number ;
	gai_desc : ro3_ActivityRewardConfig_GAICCell[] ;
}

declare interface ro3_ActivityRewardConfig_CaiShenDaoConfig {
	activity_id : number ;
	level_desc : ro3_ActivityRewardConfig_CaiShenDaoConfig_CSDLevelCell[] ;
}

declare interface ro3_ActivityRewardConfig_CaiShenDaoConfig_CSDLevelCell {
	index : number ;
	grade : number ;
	nex_index : number ;
	diamond : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ActMonsterConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_ActMonsterConfig_MonsterCell[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_ActMonsterConfig_MonsterCell {
	id : number ;
	stage_list : number[] ;
	arcreward1 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	arcreward2 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	arcreward3 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ActvyCarnivalConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_ActvyCarnivalConfig_CarnivalCell[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_ActvyCarnivalConfig_CarnivalCell {
	ID : number ;
	Days : number ;
	Title_Type : number ;
	Title_Name : number ;
	Type : number ;
	Para : number[] ;
	Goal_Note : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_SignActConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_SignActConfig_SignInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_SignActConfig_SignInfo {
	ID : number ;
	Edition : number ;
	Type : number ;
	Para : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Vip_Double : number[] ;
}

declare interface ro3_ActivityRewardConfig_LoginActConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_LoginActConfig_Logininfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_LoginActConfig_Logininfo {
	ID : number ;
	Edition : number ;
	Type : number ;
	Para : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_FestivalLoginConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_FestivalLoginConfig_Logininfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_FestivalLoginConfig_Logininfo {
	ID : number ;
	Edition : number ;
	Type : number ;
	Para : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Der : number ;
}

declare interface ro3_ActivityRewardConfig_RechargeListConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_RechargeListConfig_RechargeInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_RechargeListConfig_RechargeInfo {
	ID : number ;
	Edition : number ;
	Type : number ;
	Para : number ;
	Limit : number[] ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_SportsConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_SportsConfig_SportsCell[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_SportsConfig_SportsCell {
	ID : number ;
	Edition : number ;
	name : number ;
	icon : number ;
	day : number ;
	ttype : number ;
	param : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	start_day : number ;
}

declare interface ro3_ActivityRewardConfig_ExpeditionConfig {
	activity_id : number ;
	list1 : ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionInfo[] ;
	list2 : ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionCardInfo[] ;
	list3 : ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionMainRewardInfo[] ;
	list4 : ro3_ActivityRewardConfig_ExpeditionConfig_ExceditionRechargeInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionInfo {
	ID : number ;
	Edition : number ;
	Level : number ;
	Exp : number ;
	Main_Reward : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Reward1 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionCardInfo {
	ID : number ;
	Edition : number ;
	Recharge_ID : number ;
	Exp : number ;
	Note : number[] ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ExpeditionConfig_ExpeditionMainRewardInfo {
	ID : number ;
	Edition : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Exhibition : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Show : number[] ;
}

declare interface ro3_ActivityRewardConfig_ExpeditionConfig_ExceditionRechargeInfo {
	ID : number ;
	Recharge_ID : number ;
	level : number ;
}

declare interface ro3_ActivityRewardConfig_GiftDiamondCell {
	index : number ;
	para : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	day : number ;
	personal_limit : number[] ;
	ttype : number ;
}

declare interface ro3_ActivityRewardConfig_GiftDiamondConfig {
	activity_id : number ;
	cells : ro3_ActivityRewardConfig_GiftDiamondCell[] ;
}

declare interface ro3_ActivityRewardConfig_GiftRechargeCell {
	index : number ;
	para : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	recharge_id : number ;
	personal_limit : number[] ;
}

declare interface ro3_ActivityRewardConfig_GiftRechargeConfig {
	activity_id : number ;
	cells : ro3_ActivityRewardConfig_GiftRechargeCell[] ;
}

declare interface ro3_ActivityRewardConfig_LuckyCardConfig {
	activity_id : number ;
	cardrewardinfos : ro3_ActivityRewardConfig_LuckyCardConfig_CardReward[] ;
	timesrewardinfo : ro3_ActivityRewardConfig_LuckyCardConfig_TimesReward[] ;
}

declare interface ro3_ActivityRewardConfig_LuckyCardConfig_CardReward {
	ID : number ;
	Edition : number ;
	Quality : number ;
	Item_ID : number ;
	Number : number ;
	Choose_Number : number ;
}

declare interface ro3_ActivityRewardConfig_LuckyCardConfig_TimesReward {
	ID : number ;
	Edition : number ;
	Times : number ;
	Reward : number[] ;
}

declare interface ro3_ActivityRewardConfig_KaifuPowerConfig {
	activity_id : number ;
	cells : ro3_ActivityRewardConfig_KaifuPowerConfig_KaifuPowerCell[] ;
}

declare interface ro3_ActivityRewardConfig_KaifuPowerConfig_KaifuPowerCell {
	rank : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ChaoRechargeConfig {
	activity_id : number ;
	cells : ro3_ActivityRewardConfig_ChaoRechargeConfig_ChaoRechargeCell[] ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ChaoRechargeConfig_ChaoRechargeCell {
	idx : number ;
	recharge_id : number ;
	para : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	type : number[] ;
}

declare interface ro3_ActivityRewardConfig_RichSignConfig {
	activity_id : number ;
	act_type : number ;
	reward : ro3_ActivityRewardConfig_RichSignConfig_RichSignReward[] ;
	finalreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_RichSignConfig_RichSignReward {
	id : number ;
	day : number ;
	value : number ;
	reward1 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	reward2 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_FoodFestivalConfig {
	activity_id : number ;
	task_cost : ro3_ActivityRewardConfig_FoodFestivalConfig_TaskCost[] ;
}

declare interface ro3_ActivityRewardConfig_FoodFestivalConfig_TaskCost {
	task_id : number ;
	item_id : number ;
	item_num : number ;
}

declare interface ro3_ActivityRewardConfig_LoginRedPacketConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_LoginRedPacketConfig_RedPacketInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_LoginRedPacketConfig_RedPacketInfo {
	id : number ;
	edition : number ;
	time : number ;
	para : number ;
	str : number ;
	money : number ;
	stage_id : number ;
	tips : number ;
}

declare interface ro3_ActivityRewardConfig_TenThousandRebateConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_TenThousandRebateConfig_TenThousandRebateInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_TenThousandRebateConfig_TenThousandRebateInfo {
	id : number ;
	edition : number ;
	day : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_CashRebateConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_CashRebateConfig_CashRebateInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_CashRebateConfig_CashRebateInfo {
	id : number ;
	type : number ;
	edition : number ;
	recharge : number ;
	cost : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_HolidayConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_HolidayConfig_HolidayInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_HolidayConfig_HolidayInfo {
	id : number ;
	edition : number ;
	type : number ;
	day : number ;
	discount : number ;
	cost : number ;
	recharge : number ;
	times : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	step : number ;
	name : number ;
	name2 : number ;
	reward_mark : number[] ;
}

declare interface ro3_ActivityRewardConfig_Holiday618Config {
	activity_id : number ;
	shop_info : ro3_ActivityRewardConfig_Holiday618Config_ShopInfo[] ;
	big_reward_info : ro3_ActivityRewardConfig_Holiday618Config_BigRewardInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_Holiday618Config_ShopInfo {
	id : number ;
	edition : number ;
	day : number ;
	type : number ;
	gift_name : number ;
	gift_image : number ;
	recharge : number[] ;
	coupon : number ;
	cost : number[] ;
	limit : number[] ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_Holiday618Config_BigRewardInfo {
	id : number ;
	edition : number ;
	total : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_HyperLink1 {
	hyper : number[] ;
}

declare interface ro3_ActivityRewardConfig_ChampionsShipConfig {
	activity_id : number ;
	champions_info : ro3_ActivityRewardConfig_ChampionsShipConfig_ChampionsInfo[] ;
	stage_info : ro3_ActivityRewardConfig_ChampionsShipConfig_StageInfo[] ;
	rank_info : ro3_ActivityRewardConfig_ChampionsShipConfig_RankInfo[] ;
	recharge_info : ro3_ActivityRewardConfig_ChampionsShipConfig_RechargeInfo[] ;
}

declare interface ro3_ActivityRewardConfig_ChampionsShipConfig_ChampionsInfo {
	id : number ;
	task_type : number ;
	activity_id : number ;
	edition : number ;
	type1 : number ;
	type2 : number ;
	activity_time : number[] ;
	tag : number[] ;
	theme_type : number ;
	name : number ;
	item_id : number[] ;
}

declare interface ro3_ActivityRewardConfig_ChampionsShipConfig_StageInfo {
	id : number ;
	activity_id : number ;
	total : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	edition : number ;
	stage : number ;
	task_type : number ;
	activity_time : number[] ;
}

declare interface ro3_ActivityRewardConfig_ChampionsShipConfig_RankInfo {
	id : number ;
	activity_id : number ;
	edition : number ;
	limit : number[] ;
	type1 : number ;
	type2 : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	task_type : number ;
}

declare interface ro3_ActivityRewardConfig_ChampionsShipConfig_RechargeInfo {
	id : number ;
	recharge_id : number ;
	activity_id : number ;
	edition : number ;
	name : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	task_type : number ;
	hyper_link1 : ro3_ActivityRewardConfig_HyperLink1[] ;
}

declare interface ro3_ActivityRewardConfig_SummonConfig {
	activity_id : number ;
	reward_info : ro3_ActivityRewardConfig_SummonConfig_RewardInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_SummonConfig_RewardInfo {
	id : number ;
	edition : number ;
	type : number ;
	probability : number ;
	probability_Show : number ;
	start_time : number ;
	end_time : number ;
	filter : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_Summon2Config {
	activity_id : number ;
	reward_info : ro3_ActivityRewardConfig_Summon2Config_RewardInfo[] ;
	config : ro3_ActivityRewardConfig_Summon2Config_ActConf ;
	rank_config : ro3_ActivityRewardConfig_Summon2Config_RankConfig[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_Summon2Config_RewardInfo {
	id : number ;
	edition : number ;
	type : number ;
	probability : number ;
	probability_Show : number ;
	start_time : number ;
	end_time : number ;
	filter : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_Summon2Config_ActConf {
	ID : number ;
	Edition : number ;
	String : number[] ;
	Image : number ;
	Min : number ;
	Max : number ;
	Baodi_Number : number[] ;
	Baodi_Reward : number[] ;
	Astrology_RechargeID : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Item_ID : number ;
	Limit_Number : number ;
}

declare interface ro3_ActivityRewardConfig_Summon2Config_RankConfig {
	ID : number ;
	Edition : number ;
	Limit : number[] ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Activity_ID : number ;
}

declare interface ro3_ActivityRewardConfig_KillMonsterFestivalConfig {
	activity_id : number ;
	config_info : ro3_ActivityRewardConfig_KillMonsterFestivalConfig_ConfigInfo[] ;
	stage_prop : ro3_ActivityRewardConfig_KillMonsterFestivalConfig_StageProp ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_KillMonsterFestivalConfig_AvatarInfo {
	id : number ;
	num : number ;
}

declare interface ro3_ActivityRewardConfig_KillMonsterFestivalConfig_RateInfo {
	num : number ;
	rate : number ;
}

declare interface ro3_ActivityRewardConfig_KillMonsterFestivalConfig_ConfigInfo {
	id : number ;
	edition : number ;
	type : number ;
	stage_id : number[] ;
	monster_show : number[] ;
	times : number ;
	avater_info : ro3_ActivityRewardConfig_KillMonsterFestivalConfig_AvatarInfo[] ;
	rate_info : ro3_ActivityRewardConfig_KillMonsterFestivalConfig_RateInfo[] ;
	countdown : number ;
}

declare interface ro3_ActivityRewardConfig_KillMonsterFestivalConfig_StageProp {
	id : number ;
	edition : number ;
	damage : number ;
	cost : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	limit_1 : number ;
	limit_2 : number ;
	gift : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_OneCoinConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_OneCoinConfig_OneCoinInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_OneCoinConfig_OneCoinInfo {
	ID : number ;
	Activity_ID : number ;
	Gift_Name : number ;
	Recharge : number ;
	Limit : number[] ;
	Edition : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ZeroCoinConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_ZeroCoinConfig_ZeroCoinInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_ZeroCoinConfig_ZeroCoinInfo {
	ID : number ;
	Activity_ID : number ;
	Gift_Name : number ;
	Price : number ;
	Limit : number[] ;
	Edition : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	String_ID : number ;
	Cash_Back : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_HFLuckyShopConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_HFLuckyShopConfig_HFLuckyShopInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_HFLuckyShopConfig_HFLuckyShopInfo {
	ID : number ;
	Name : number ;
	Item : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	Type : number ;
	Time : number ;
	Price : number ;
	Price1 : number ;
	Price2 : number ;
	Price3 : number ;
	Discount : number ;
	Edition : number ;
	probability : number ;
}

declare interface ro3_ActivityRewardConfig_HFLotteryConfig {
	activity_id : number ;
	list : ro3_ActivityRewardConfig_HFLotteryConfig_HFLotteryInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_HFLotteryConfig_HFLotteryInfo {
	ID : number ;
	Grade : number ;
	Type : number ;
	Type2 : number ;
	Reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	probability : number ;
	Edition : number ;
	string_id : number ;
}

declare interface ro3_ActivityRewardConfig_CatBoardConfig {
	activity_id : number ;
	shop_info : ro3_ActivityRewardConfig_CatBoardConfig_ShopInfo[] ;
	big_reward_info : ro3_ActivityRewardConfig_CatBoardConfig_BigRewardInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_CatBoardConfig_ShopInfo {
	id : number ;
	edition : number ;
	day : number ;
	type : number ;
	recharge : number ;
	sale : number ;
	cost : number ;
	limit : number[] ;
	point : number ;
	gift_name : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	start_time : number ;
	end_time : number ;
}

declare interface ro3_ActivityRewardConfig_CatBoardConfig_BigRewardInfo {
	id : number ;
	edition : number ;
	total : number ;
	gift_image : number ;
	gift_name : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_CashBackConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_CashBackConfig_CashBackInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_CashBackConfig_CashBackInfo {
	id : number ;
	day : number ;
	edition : number ;
	recharge_id : number ;
	sale : number ;
	limit : number[] ;
	last_time : number ;
	rmb : number[] ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_GrowthGiftConfig {
	activity_id : number ;
	info : ro3_ActivityRewardConfig_GrowthGiftConfig_GiftInfo[] ;
	reward_info : ro3_ActivityRewardConfig_GrowthGiftConfig_GiftRewardInfo[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_GrowthGiftConfig_GiftInfo {
	id : number ;
	edition : number ;
	type : number ;
	recharge_id : number ;
	name : number ;
	der : number ;
	tab : number ;
	open : number ;
	price : number ;
}

declare interface ro3_ActivityRewardConfig_GrowthGiftConfig_GiftRewardInfo {
	id : number ;
	edition : number ;
	type : number ;
	name : number ;
	limt_day : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_JianwenTehuiConfig {
	activity_id : number ;
	version : number ;
	edition : number ;
	cells : ro3_ActivityRewardConfig_JianwenTehuiConfig_JianwenTehuiConfigCell[] ;
}

declare interface ro3_ActivityRewardConfig_JianwenTehuiConfig_JianwenTehuiConfigCell {
	id : number ;
	type : number ;
	arcreward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	recharge_id : number ;
	edition : number ;
	limit : number ;
	name : number ;
	price : number ;
}

declare interface ro3_ActivityRewardConfig_BoliValueConfig {
	activity_id : number ;
	confs : ro3_ActivityRewardConfig_BoliValueConfig_BoliValueConf[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_BoliValueConfig_BoliValueItem {
	Id : number ;
	count : number ;
}

declare interface ro3_ActivityRewardConfig_BoliValueConfig_BoliValueConf {
	id : number ;
	edition : number ;
	type : number ;
	version : number ;
	item : ro3_ActivityRewardConfig_BoliValueConfig_BoliValueItem ;
}

declare interface ro3_ActivityRewardConfig_ShiLianRoadConfig {
	activity_id : number ;
	reward_info : ro3_ActivityRewardConfig_ShiLianRoadConfig_RewardInfo[] ;
	box_reward_info : ro3_ActivityRewardConfig_ShiLianRoadConfig_BoxRewardInfo[] ;
	box_drop_info : ro3_ActivityRewardConfig_ShiLianRoadConfig_BoxDropInfo ;
	reward_30 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	reward_128 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	version : number ;
}

declare interface ro3_ActivityRewardConfig_ShiLianRoadConfig_RewardInfo {
	id : number ;
	edition : number ;
	level : number ;
	exp : number ;
	reward1 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	reward2 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	reward3 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ShiLianRoadConfig_BoxRewardInfo {
	id : number ;
	edition : number ;
	time : number ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
}

declare interface ro3_ActivityRewardConfig_ShiLianRoadConfig_ShilianKeyPayment {
	value : number[] ;
}

declare interface ro3_ActivityRewardConfig_ShiLianRoadConfig_BoxDropInfo {
	id : number ;
	edition : number ;
	lottery_id : number ;
	task_type : number[] ;
	show_reward_1 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	show_reward_2 : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	reward : ro3_ActivityRewardConfig_ActivityRewardCell[] ;
	shilian_key_payment : ro3_ActivityRewardConfig_ShiLianRoadConfig_ShilianKeyPayment[] ;
	shilian_key_and_box : number[] ;
	shilian_battlepass : number[] ;
	type : number ;
	show_reward_1_pr : number[] ;
	show_reward_2_pr : number[] ;
}

declare interface ro3_ActivityList {
	activity_list : ro3_ActivityList_ActivityInfo[] ;
}

declare interface ro3_ActivityList_ActivityInfo {
	id : number ;
	start_time : number ;
	end_time : number ;
	end_show_time : number ;
	reward_config : ro3_ActivityRewardConfig ;
	pic_list : ro3_ActivityList_ActivityInfo_ACTpic[] ;
	sort : number[] ;
	icon : number ;
	name : number ;
	extra_end_time : number ;
}

declare interface ro3_ActivityList_ActivityInfo_ACTpic {
	params : number[] ;
}

declare interface ro3_SkillInfo {
	id : number ;
	level : number ;
}

declare interface ro3_SkillSortSlut {
	id : number[] ;
}

declare interface ro3_SkillList {
	skill_list : ro3_SkillInfo[] ;
	is_all_open : number ;
	skill_used_point : number ;
	skill_sort_active : number ;
	skill_sort_slut : ro3_SkillSortSlut[] ;
}

declare interface ro3_MedalInfo {
	level : number ;
}

declare interface ro3_MedalInfoNew {
	level : number ;
	exp : number ;
}

declare interface ro3_TimePvpGetActivityInfoReq {
}

declare interface ro3_TimePvpGetActivityInfoResp {
	result : ro3_GeneralRet ;
	error : number ;
	activity_info : ro3_TimePvpActivityInfo ;
}

declare interface ro3_ArtifactPiece {
	pieceid : number ;
	active : number ;
}

declare interface ro3_Artifact {
	artifact_id : number ;
	artifact_piece : ro3_ArtifactPiece[] ;
	active : number ;
}

declare interface ro3_ElementRunesActiveReq {
}

declare interface ro3_ElementRunesActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	elementrunes : ro3_ElementRunesInfo ;
}

declare interface ro3_ElementRunesSetReq {
	element_id : number ;
}

declare interface ro3_ElementRunesSetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	elementrunes : ro3_ElementRunesInfo ;
}

declare interface ro3_ElementRunesResolveReq {
	element_list : ro3_Item[] ;
}

declare interface ro3_ElementRunesResolveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElementRunesExchangeReq {
	element_id : number ;
}

declare interface ro3_ElementRunesExchangeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElementRunesMaxToLowReq {
	num : number ;
}

declare interface ro3_ElementRunesMaxToLowResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HandbookLvUpReq {
	type : number ;
	handbook_id : number ;
	to_star : number ;
}

declare interface ro3_HandbookLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HandbookAdLvUpReq {
	type : number ;
	handbook_id : number ;
	to_lv : number ;
}

declare interface ro3_HandbookAdLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HandbookAdLvUpPlusReq {
	entity_list : ro3_HandbookAdLvUpPlusReq_Entity[] ;
}

declare interface ro3_HandbookAdLvUpPlusReq_Entity {
	handbook_id : number ;
	to_lv : number ;
}

declare interface ro3_HandbookAdLvUpPlusResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	handbook_data_list : ro3_HandbookCell[] ;
}

declare interface ro3_PrestigeRetrieveReq {
}

declare interface ro3_PrestigeRetrieveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	prestige_info : ro3_PrestigeInfo ;
}

declare interface ro3_MonsterSiegeActivityInfo {
	season_id : number ;
	start_time : number ;
	end_time : number ;
	step : number ;
	battle_state : number[] ;
}

declare interface ro3_GodWeaponSkillCell {
	skill_id : number ;
	level : number ;
	point_level : number ;
}

declare interface ro3_GodWeaponStigmataCell {
	stigmata_id : number ;
	pos_index : number ;
	level : number ;
	guid : number ;
	num : number ;
}

declare interface ro3_HeroGodWeapon {
	level : number ;
	skill_point : number ;
	skill_list : ro3_GodWeaponSkillCell[] ;
	stigmata_list : ro3_GodWeaponStigmataCell[] ;
	is_active : number ;
	active_lv : number ;
}

declare interface ro3_GodWeaponStageInfo {
	godweapon_stage_id : number ;
	challenge_times : number ;
	begin_challenge_time : number ;
	challenge_cost_time : number ;
	challenging_stage_id : number ;
	is_first_pass : number ;
	last_operator_time : number ;
	is_init : number ;
}

declare interface ro3_GodWeaponInfo {
	stage_info : ro3_GodWeaponStageInfo ;
	stigmata_list : ro3_GodWeaponStigmataCell[] ;
}

declare interface ro3_PvpPaiwei {
	id : number ;
	level : number ;
	star : number ;
	fight_cnt : number ;
	next_recover_time : number ;
	buy_cnt : number ;
	win_cnt : number ;
	con_win_cnt : number ;
	enemy : ro3_SnapRole ;
}

declare interface ro3_PvpKFPaiwei {
	id : number ;
	level : number ;
	star : number ;
	fight_cnt : number ;
	next_recover_time : number ;
	buy_cnt : number ;
	win_cnt : number ;
	con_win_cnt : number ;
	daily_fight_count : number ;
	daily_reward_flag : number ;
	enemy : ro3_SnapRole ;
}

declare interface ro3_EnemySnap {
	uid : string ;
	image : number ;
	nick : string ;
	lv : number ;
	zx_lv : number ;
}

declare interface ro3_PvpJingji {
	tili : number ;
	jifen : number ;
	enemys : ro3_EnemySnap[] ;
	next_time : number ;
	next_refresh_time : number ;
	day_stamp : number ;
	last_uid : string ;
}

declare interface ro3_PvpFlag {
	robot : number ;
}

declare interface ro3_AreanFightEmeny {
	uid : string ;
	nickname : string ;
	imageid : number ;
	power : number ;
	cur_rank : number ;
	first : boolean ;
	portrait_frame : number ;
}

declare interface ro3_AreanFightRecord {
	type : number ;
	win : number ;
	fight_time : number ;
	revenge_time : number ;
	uid : string ;
	nick_name : string ;
	change : number ;
	revenge : boolean ;
}

declare interface ro3_AreanFightRecords {
	records : ro3_AreanFightRecord[] ;
}

declare interface ro3_Arean {
	fight_cnt : number ;
	buy_cnt : number ;
	win_cnt : number ;
	cur_rank : number ;
	max_rank : number ;
	next_recover_time : number ;
	daily_reward_flag : number ;
	records : ro3_AreanFightRecord[] ;
	emenys : ro3_AreanFightEmeny[] ;
	last_refresh_time : number ;
	active : number ;
	first_rank : number ;
}

declare interface ro3_AreanOnHeart {
	cur_rank : number ;
	records : ro3_AreanFightRecord[] ;
	first_rank : number ;
}

declare interface ro3_PvpSkyArena {
	score : number ;
	fight_count : number ;
	season : number ;
}

declare interface ro3_Pvp {
	paiwei : ro3_PvpPaiwei ;
	jingji : ro3_PvpJingji ;
	paiwei_kf : ro3_PvpKFPaiwei ;
	Arean : ro3_Arean ;
	cup : ro3_PVPCup ;
	skyarena : ro3_PvpSkyArena ;
	flags : ro3_PvpFlag ;
}

declare interface ro3_PVPCup {
	opentime : number ;
	opentrailer : number ;
}

declare interface ro3_ServerName {
	sid : number ;
	name : string ;
	mergelist : number[] ;
}

declare interface ro3_ArtifactGetReq {
}

declare interface ro3_ArtifactGetResp {
	result : ro3_GeneralRet ;
	artifact : ro3_Artifact[] ;
}

declare interface ro3_ArtifactActiveReq {
	id : number ;
}

declare interface ro3_ArtifactActiveResp {
	result : ro3_GeneralRet ;
	artifact : ro3_Artifact[] ;
}

declare interface ro3_GetGuanYinReq {
	lv : number ;
}

declare interface ro3_GetGuanYinResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GuanYinLvUpReq {
}

declare interface ro3_GuanYinLvUpResp {
	result : ro3_GeneralRet ;
	jw_data : ro3_HeroJueWei ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GetGuanYinDataReq {
}

declare interface ro3_GetGuanYinDataResp {
	result : ro3_GeneralRet ;
	jw_data : ro3_HeroJueWei ;
}

declare interface ro3_GuanYinNotify {
	jw_data : ro3_HeroJueWei ;
}

declare interface ro3_FriendListReq {
}

declare interface ro3_FriendListResp {
	result : ro3_GeneralRet ;
	friend : ro3_Friend[] ;
}

declare interface ro3_FriendApplyListInfoReq {
}

declare interface ro3_FriendApplyListInfoResp {
	result : ro3_GeneralRet ;
	accept : ro3_Friend[] ;
}

declare interface ro3_FriendBlackListInfoReq {
}

declare interface ro3_FriendBlackListInfoResp {
	result : ro3_GeneralRet ;
	black : ro3_Friend[] ;
}

declare interface ro3_FriendApplyReq {
	nickname : string ;
}

declare interface ro3_FriendApplyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_FriendAcceptReq {
	username : string ;
	is_refuse : number ;
}

declare interface ro3_FriendAcceptResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	friend_list : ro3_FriendList ;
}

declare interface ro3_FriendDeleteReq {
	username : string ;
}

declare interface ro3_FriendDeleteResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	friend_list : ro3_FriendList ;
}

declare interface ro3_FriendBlackReq {
	username : string ;
}

declare interface ro3_FriendBlackResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	friend_list : ro3_FriendList ;
}

declare interface ro3_FriendUnBlackReq {
	user : string ;
}

declare interface ro3_FriendUnBlackResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	friend_list : ro3_FriendList ;
}

declare interface ro3_FriendInfoReq {
	username : string ;
}

declare interface ro3_FriendInfoResp {
	result : ro3_GeneralRet ;
	info : ro3_HeroSimpleData ;
}

declare interface ro3_FriendNotify {
	type : number ;
	friend : ro3_Friend ;
}

declare interface ro3_HeroGetReq {
	heroid : number ;
}

declare interface ro3_HeroGetResp {
	result : ro3_GeneralRet ;
	heros : ro3_HeroData ;
}

declare interface ro3_HeroRecruitReq {
	heroid : number ;
}

declare interface ro3_HeroRecruitResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroLHActiveReq {
	heroid : number ;
}

declare interface ro3_HeroLHActiveResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
}

declare interface ro3_HeroLHAddExpReq {
	heroid : number ;
	num : number ;
}

declare interface ro3_HeroLHAddExpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroWingsActiveReq {
	heroid : number ;
}

declare interface ro3_HeroWingsActiveResp {
	result : ro3_GeneralRet ;
	wings : ro3_Wings ;
}

declare interface ro3_HeroWingsAddExpReq {
	heroid : number ;
	next_lv : number ;
	count : number ;
}

declare interface ro3_HeroWingsAddExpResp {
	result : ro3_GeneralRet ;
	wings : ro3_Wings ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroWingsLvUpReq {
	heroid : number ;
	type : number ;
}

declare interface ro3_HeroWingsLvUpResp {
	result : ro3_GeneralRet ;
	wings : ro3_Wings ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroFeatherEquipReq {
	heroid : number ;
	featherid : number ;
}

declare interface ro3_HeroFeatherEquipResp {
	result : ro3_GeneralRet ;
	wings : ro3_Wings ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroFeatherConvertReq {
	id1 : number ;
	id2 : number ;
}

declare interface ro3_HeroFeatherConvertResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroFeatherMergeReq {
	featherid : number ;
	heroid : number ;
}

declare interface ro3_HeroFeatherMergeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	wings : ro3_Wings ;
}

declare interface ro3_HeroFeatherWakeupReq {
	heroid : number ;
	posi : number ;
	num : number ;
}

declare interface ro3_HeroFeatherWakeupResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	wings : ro3_Wings ;
}

declare interface ro3_YuPeiActiveReq {
	heroid : number ;
}

declare interface ro3_YuPeiActiveResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
}

declare interface ro3_YuPeiLvUpReq {
	heroid : number ;
	ttype : number ;
	num : number ;
}

declare interface ro3_YuPeiLvUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_YuPeiFeedReq {
	heroid : number ;
	ttype : number ;
	num : number ;
}

declare interface ro3_YuPeiFeedResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroGroupLvupReq {
	heroid : number ;
	ttype : number ;
	count : number ;
}

declare interface ro3_HeroGroupLvupResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroGetZhuanZTasksReq {
	heroid_list : number[] ;
}

declare interface ro3_HeroGetZhuanZTasksResp {
	result : ro3_GeneralRet ;
	hero_list : ro3_Hero[] ;
	errcode : number ;
}

declare interface ro3_HeroToZhuanZReq {
	heroid : number ;
}

declare interface ro3_HeroToZhuanZResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_HeroToJiuZReq {
	heroid : number ;
	jiuz_id : number ;
}

declare interface ro3_HeroToJiuZResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_HeroToJiuZTaskCommitReq {
	jiuz_id : number ;
}

declare interface ro3_HeroToJiuZTaskCommitResp {
	result : ro3_GeneralRet ;
	jiuz_id : number ;
}

declare interface ro3_WingSkillLvUpReq {
	heroid : number ;
	skillid : number ;
	num : number ;
}

declare interface ro3_WingSkillLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ZhanWen {
	guid : number ;
	id : number ;
	level : number ;
	num : number ;
}

declare interface ro3_ZhanWenPosi {
	posi : number ;
	zhanwen : ro3_ZhanWen ;
}

declare interface ro3_ZhuanPanInfo {
	endtime : number ;
	lastendtime : number ;
	rewardids : number[] ;
	no_xianshi : number ;
	drawnum : number ;
	jdrewards : number[] ;
	alljdrewards : number[] ;
}

declare interface ro3_LotteryDrawInfo {
	drawnum : number ;
	lastdrawdayid : number ;
	rewardid : number[] ;
	chooserewardid : number[] ;
	drawnum2 : number ;
	drawnum3 : number ;
	drawnumjd : number ;
}

declare interface ro3_LotteryDrawRewardInfo {
	ID : number ;
	Type : number ;
	Reward : ro3_LotteryDrawRewardInfo_RewardInfo[] ;
	start_time : number ;
	end_time : number ;
	string_id : number ;
	Time : number ;
}

declare interface ro3_LotteryDrawRewardInfo_RewardInfo {
	id_num : number[] ;
}

declare interface ro3_GoddessBlessGiftRecommendNotify {
	id : number ;
	expiry_buy_time : number ;
}

declare interface ro3_GoddessBlessStartGiftRecommendNotify {
	start_gifts : ro3_GoddessBressStartGift[] ;
}

declare interface ro3_BagListExtendReq {
	cellnum : number ;
}

declare interface ro3_BagListExtendResp {
	result : ro3_GeneralRet ;
	equip_max_num : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ItemSellReq {
	items : ro3_Item[] ;
}

declare interface ro3_ItemSellResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ItemUseReq {
	items : ro3_Item[] ;
	index : number ;
	book : number ;
}

declare interface ro3_ItemUseResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_ItemUseSelectReq {
	item_id : number ;
	select_idx : number ;
	num : number ;
}

declare interface ro3_ItemUseSelectResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ItemMakeReq {
	item_id : number ;
	num : number ;
	expend_type : number ;
}

declare interface ro3_ItemMakeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ItemExchangeReq {
	ttype : number ;
	item : ro3_Item ;
	items : ro3_Item[] ;
}

declare interface ro3_ItemExchangeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfEquip {
	id : number ;
	guid : number ;
	ench : number[] ;
	ench_real : number[] ;
}

declare interface ro3_Elf {
	id : number ;
	level : number ;
	equips : ro3_ElfEquip[] ;
	exp : number ;
	talent : number ;
	bless : number ;
	zz : number ;
}

declare interface ro3_ElfList {
	elfs : ro3_Elf[] ;
	elf_equip_list : ro3_ElfEquip[] ;
}

declare interface ro3_RedPointReadReq {
	field_id_list : number[] ;
}

declare interface ro3_RedPointReadResp {
	result : ro3_GeneralRet ;
	redpoint : ro3_RedPointInfo ;
}

declare interface ro3_RedPointNotify {
	redpoint : ro3_RedPointInfo ;
}

declare interface ro3_ShaiziNotify {
	max_user : ro3_SnapRole ;
	max_rand : number ;
}

declare interface ro3_GBattleInfo {
	url : string ;
}

declare interface ro3_PVEReq {
	stage_idx : number ;
	battle_idx : number ;
	born_id : number ;
	ttype : number ;
	fastpass : number ;
	tar_uid : string ;
	rob_mine_pos : number ;
	rcd_guid : number ;
	change_flag : number ;
	help_uid : string ;
	help_uuid : number ;
	room_id : number ;
}

declare interface ro3_PVEResp {
	result : ro3_GeneralRet ;
	battle_idx : number ;
	boss : ro3_RoleBoss ;
	boss_list : ro3_BossData[] ;
	rsync : ro3_GeneralRsync ;
	snotify : ro3_ShaiziNotify ;
	my_rand : number ;
	errcode : number ;
	group : ro3_GroupRole ;
	mine_info : ro3_PVEResp_MineInfo ;
	mine_data : ro3_MineRoleData ;
	fight_help : ro3_FightHelpInfo ;
	gbattleinfo : ro3_GBattleInfo ;
	activity_time : ro3_ActivityTimeUserInfo ;
	server_names : ro3_ServerName[] ;
	room_id : number ;
	create_stamp : number ;
	temple_trial_stage_info : ro3_TempleTrialStage ;
}

declare interface ro3_PVEResp_MineInfo {
	mine_roominfo : ro3_MineRoomInfo ;
	room_num : number ;
	min_room_id : number ;
	max_room_id : number ;
}

declare interface ro3_PVEFinishReq {
	battle_idx : number ;
	stage_id : number ;
	boss_id : number ;
	guid : string ;
}

declare interface ro3_SkyArenaFinishTeam {
	side : number ;
	kill_count : number ;
	roles : ro3_SkyArenaFinishRole[] ;
}

declare interface ro3_SkyArenaFinishInfo {
	teams : ro3_SkyArenaFinishTeam[] ;
	win_uids : string[] ;
}

declare interface ro3_SkyArenaFinishRole {
	uid : string ;
	nickname : string ;
	image_id : number ;
	damage_old : number ;
	cur_score : number ;
	add_score : number ;
	damage : number ;
}

declare interface ro3_CrossbossLimit {
	guishu : number ;
	canyu : number ;
}

declare interface ro3_PVEFinishResp {
	result : ro3_GeneralRet ;
	battle_idx : number ;
	boss : ro3_RoleBoss ;
	boss_list : ro3_BossData[] ;
	rsync : ro3_GeneralRsync ;
	pve_data : ro3_PVE ;
	stage_id : number ;
	owner : ro3_SnapRole ;
	item_list : ro3_Item[] ;
	tower : ro3_Tower ;
	win_flag : number ;
	sefrank : number ;
	pvp : ro3_Pvp ;
	things_stageinfo : ro3_ThingsStageInfo ;
	godweapon_stageinfo : ro3_GodWeaponStageInfo ;
	_helper : ro3_SnapRole ;
	group_list : ro3_GroupPvpData[] ;
	user_jifen : number ;
	helper : ro3_PVEFinishResp_PveHelper ;
	tower_new : ro3_Tower_New ;
	grouphunt : ro3_GroupHuntData ;
	group_pve : ro3_GroupPve ;
	group_pve_ranks : ro3_GroupRankCell[] ;
	group_pvp_info : ro3_GroupPvpInfo ;
	activity_time : ro3_ActivityTimeUserInfo ;
	self_group_pve_val : number ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
	vip_info : ro3_VIPInfo ;
	extra_bag_num : number ;
	goldbuyinfo : ro3_GoldenBuyInfo ;
	mini_group_role : ro3_MiniGroupRole ;
	skyarena_finish_info : ro3_SkyArenaFinishInfo ;
	crossboss_limit : ro3_CrossbossLimit ;
	yimrspace_finish_info : ro3_YmirSapceFinishInfo ;
	item_list_2 : ro3_Item[] ;
	roles : ro3_SkyArenaFinishRole[] ;
}

declare interface ro3_PVEFinishResp_PveHelper {
	uid : string ;
	image : number ;
	nickname : string ;
	ttype : number ;
}

declare interface ro3_PVEExitReq {
	battle_idx : number ;
}

declare interface ro3_PVEExitResp {
	result : ro3_GeneralRet ;
	boss : ro3_RoleBoss ;
	group : ro3_GroupRole ;
	grouphunt : ro3_GroupHuntData ;
	group_pve : ro3_GroupPve ;
	group_pve_ranks : ro3_GroupRankCell[] ;
	activity_time : ro3_ActivityTimeUserInfo ;
	self_group_pve_val : number ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_BossInfoReq {
	ttype : number[] ;
	stage_id : number ;
}

declare interface ro3_BossInfoResp {
	result : ro3_GeneralRet ;
	boss_list : ro3_BossData[] ;
	next_time : number ;
	boss : ro3_RoleBoss ;
	crossbosslist : ro3_CrossBossInfo[] ;
	crossboss_limit : ro3_CrossbossLimit ;
}

declare interface ro3_PveSweepReq {
	stage_idx : number[] ;
	count : number ;
}

declare interface ro3_PveSweepResp {
	result : ro3_GeneralRet ;
	pve_data : ro3_PVE ;
	rsync : ro3_GeneralRsync ;
	boss : ro3_RoleBoss ;
	group : ro3_GroupRole ;
	group_pve : ro3_GroupPve ;
	group_pve_ranks : ro3_GroupRankCell[] ;
	self_group_pve_val : number ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
	mini_fight : ro3_MiniGroupFight ;
}

declare interface ro3_PveGetBackReq {
	stage_idx : number ;
	count : number ;
	index : number ;
}

declare interface ro3_PveGetBackResp {
	result : ro3_GeneralRet ;
	pve_data : ro3_PVE ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_PveRewardReq {
	stage_idx : number ;
	index : number ;
}

declare interface ro3_PveRewardResp {
	result : ro3_GeneralRet ;
	pve_data : ro3_PVE ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_BossRewardReq {
	stage_idx : number ;
}

declare interface ro3_BossRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_BossShaiziReq {
	stage_idx : number ;
	battle_idx : number ;
}

declare interface ro3_BossShaiziResp {
	result : ro3_GeneralRet ;
	notify : ro3_ShaiziNotify ;
	rand_num : number ;
}

declare interface ro3_ReliveReq {
	battle_idx : number ;
	count : number ;
	stage_id : number ;
	is_suiji : number ;
}

declare interface ro3_ReliveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	code : number ;
}

declare interface ro3_BossBuyReq {
	ttype : number ;
}

declare interface ro3_BossBuyResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	boss : ro3_RoleBoss ;
}

declare interface ro3_FightHelpInfoGetReq {
}

declare interface ro3_FightHelpInfoGetResp {
	result : ro3_GeneralRet ;
	fight_help : ro3_FightHelpInfo ;
}

declare interface ro3_FightHelpRequestReq {
	battle_idx : number ;
	stage_id : number ;
}

declare interface ro3_FightHelpRequestResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	fight_help : ro3_FightHelpInfo ;
}

declare interface ro3_FightHelpNofity {
	uuid : number ;
	battle_idx : number ;
	username : string ;
	stage_id : number ;
	snap : ro3_SnapRole ;
	time : number ;
	is_cancel : number ;
}

declare interface ro3_FightHelpBuyHelpTimesReq {
}

declare interface ro3_FightHelpBuyHelpTimesResp {
	result : ro3_GeneralRet ;
	fight_help : ro3_FightHelpInfo ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_FightHelpCancelReq {
}

declare interface ro3_FightHelpCancelResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_PvePassRewardReq {
}

declare interface ro3_PvePassRewardResp {
	result : ro3_GeneralRet ;
	cur_flag : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_PveSweepNewReq {
	info : ro3_PveSweepNewReq_StageInfo[] ;
	sweep_type : number ;
}

declare interface ro3_PveSweepNewReq_StageInfo {
	stage_idx : number ;
	num : number ;
}

declare interface ro3_PveSweepNewResp {
	result : ro3_GeneralRet ;
	pve_data : ro3_PVE ;
	rsync : ro3_GeneralRsync ;
	boss : ro3_RoleBoss ;
	group : ro3_GroupRole ;
	group_pve : ro3_GroupPve ;
	group_pve_ranks : ro3_GroupRankCell[] ;
	self_group_pve_val : number ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
}

declare interface ro3_PveHitBossRewardReq {
	boss_type : number ;
	reward_index : number ;
}

declare interface ro3_PveHitBossRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_TrilogyPart2RankReq {
	stage_id : number ;
}

declare interface ro3_TrilogyPart2RankResp {
	result : ro3_GeneralRet ;
	self_hit : number ;
	self_rank : number ;
	rank_list : ro3_TrilogyRoleData[] ;
}

declare interface ro3_PveMiniGroupHelpReq {
	battle_idx : number ;
	stage_id : number ;
	help_mem_uid : string ;
}

declare interface ro3_PveMiniGroupHelpResp {
	result : ro3_GeneralRet ;
	error : number ;
}

declare interface ro3_PveStageRewardReq {
}

declare interface ro3_PveStageRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	curr_idx : number ;
}

declare interface ro3_PveStarRewardReq {
}

declare interface ro3_PveStarRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	curr_idx : number ;
}

declare interface ro3_RankListReq {
	rank_type : number ;
	rank_range : number[] ;
	flag : number ;
	type : number ;
}

declare interface ro3_RankListResp {
	result : ro3_GeneralRet ;
	rank_type : number ;
	ranks : ro3_MsgRankCell[] ;
	selfrank : number ;
	selfval : number ;
	selfparam : number ;
	jifen : number ;
}

declare interface ro3_RankChangeNotify {
	rank_type : number ;
}

declare interface ro3_RankTitleChangeReq {
	rank_type : number ;
}

declare interface ro3_RankTitleChangeResp {
	result : ro3_GeneralRet ;
	titles : ro3_HeroTitle[] ;
}

declare interface ro3_FightHelpInfo {
	request_help_times : number ;
	help_times : number ;
	buy_help_times : number ;
}

declare interface ro3_PrestigeInfo {
	ptvalue : number ;
	retrieve_val : number ;
	prestige_last_refresh_time : number ;
	is_open : number ;
}

declare interface ro3_AreanGetRankReq {
	uid : string ;
	rank : number ;
}

declare interface ro3_AreanGetRankResp {
	result : ro3_GeneralRet ;
	uid : string ;
	rank : number ;
	emenys : ro3_AreanFightEmeny[] ;
}

declare interface ro3_AreanGetRanksReq {
}

declare interface ro3_ArenaEmenyRank {
	uid : string ;
	rank : number ;
}

declare interface ro3_AreanGetRanksResp {
	result : ro3_GeneralRet ;
	emenys : ro3_SnapRole[] ;
	ranks : ro3_ArenaEmenyRank[] ;
}

declare interface ro3_AreanGetInfoReq {
	type : number ;
}

declare interface ro3_AreanGetInfoResp {
	type : number ;
	result : ro3_GeneralRet ;
	fight_cnt : number ;
	buy_cnt : number ;
	win_cnt : number ;
	daily_reward_flag : number ;
	emenys : ro3_AreanFightEmeny[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_AreanFightReq {
	uid : string ;
	type : number ;
	time : number ;
}

declare interface ro3_AreanItem {
	id : number ;
	count : number ;
}

declare interface ro3_AreanFightResp {
	result : ro3_GeneralRet ;
	cur_rank : number ;
	fight_cnt : number ;
	win_cnt : number ;
	record : ro3_AreanFightRecord ;
	rsync : ro3_GeneralRsync ;
	fight_rsync : ro3_FightRsync ;
	tar_image_id : number ;
	self_old_rank : number ;
	self_new_rank : number ;
	tar_old_rank : number ;
	tar_new_rank : number ;
	item_list : ro3_AreanItem[] ;
	emenys : ro3_AreanFightEmeny[] ;
	revenge_record : ro3_AreanFightRecord ;
	first_rank : number ;
}

declare interface ro3_AreanBuyReq {
}

declare interface ro3_AreanBuyResp {
	result : ro3_GeneralRet ;
	buy_cnt : number ;
	fight_cnt : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_AreanGetDailyRewardReq {
	stage : number ;
}

declare interface ro3_AreanGetDailyRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	reward_flag : number ;
}

declare interface ro3_ElfActiveReq {
	elf_idx : number ;
}

declare interface ro3_ElfActiveResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfFeedReq {
	elf_idx : number ;
	feed_count : number ;
}

declare interface ro3_ElfFeedResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfTalentReq {
	elf_idx : number ;
	talent : number ;
}

declare interface ro3_ElfTalentResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfEquipReq {
	equip_req : ro3_ElfEquipReq_equip_info[] ;
}

declare interface ro3_ElfEquipReq_equip_info {
	elf_guid : number[] ;
	elf_idx : number ;
}

declare interface ro3_ElfEquipResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf[] ;
	old_eq : ro3_ElfEquip[] ;
}

declare interface ro3_ElfEnchReq {
	elf_guid : number ;
	elf_idx : number ;
}

declare interface ro3_ElfEnchResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfEnchSaveReq {
	elf_guid : number ;
	elf_idx : number ;
	type : number ;
}

declare interface ro3_ElfEnchSaveResp {
	result : ro3_GeneralRet ;
	elf_info : ro3_Elf ;
}

declare interface ro3_ElfEquipComposeReq {
	new_elf_equip_id : number ;
	old_elf_equip_guid : number[] ;
}

declare interface ro3_ElfEquipComposeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ElfBlessReq {
	elf_idx : number ;
	type : number ;
	count : number ;
}

declare interface ro3_ElfBlessResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	elf_info : ro3_Elf ;
}

declare interface ro3_ElfMergeReq {
	newid : number ;
	guids : number[] ;
	protection : number ;
}

declare interface ro3_ElfMergeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_HeroPotentialityLvUpReq {
	heroid : number ;
	to_level : number ;
}

declare interface ro3_HeroPotentialityLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	potentiality_info : ro3_PotentialityInfo ;
}

declare interface ro3_ZhanWenSetReq {
	heroid : number ;
	posi : number ;
	zhanwen : ro3_ZhanWen ;
}

declare interface ro3_ZhanWenSetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zhanwen_pos : ro3_ZhanWenPosi ;
}

declare interface ro3_ZhanWenResolveReq {
	zhanwen_list : ro3_ZhanWen[] ;
}

declare interface ro3_ZhanWenResolveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ZhanWenLvupReq {
	heroid : number ;
	posi : number ;
	lv_num : number ;
}

declare interface ro3_ZhanWenLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zhanwen_pos : ro3_ZhanWenPosi ;
}

declare interface ro3_GroupPveRank {
	name : string ;
	val : number ;
}

declare interface ro3_GroupRole {
	wealth : number ;
	gongxian : number ;
	anti_time : number ;
	applygroupids_ : string[] ;
	pve_ids : number[] ;
	pve_cnt : number ;
	pve_reset_time : number ;
	onlone : number ;
	juanxian_cnt : number ;
	name : string ;
	next_week_time : number ;
	groupid : number ;
	applygroupids : number[] ;
	boss_cd : number ;
	red_flag : number ;
	pvp_cd : number ;
	pvp_daily_day_stamp : number ;
	group_hunt_cnt : number ;
	group_hunt_end_time : number ;
	pvp_hunt_cd : number ;
	history_gongxian : number ;
}

declare interface ro3_GroupCommonData {
	wealth : number ;
	shenxiang_lv : number ;
	shop_lv : number ;
	create_time : number ;
	notice : string ;
	pve_groupid_ : string ;
	pve_reset_time : number ;
	groupid : number ;
	pve_groupid : number ;
	pve_groupname : string ;
	weekid : number ;
}

declare interface ro3_GroupMember {
	username : string ;
	nickname : string ;
	pos : number ;
	gongxian : number ;
	join_time : number ;
	vip_lv : number ;
	power : number ;
	last_login_time : number ;
	online : number ;
	juanxian_time : number ;
	image : number ;
	history_gongxian : number ;
	jifen : number[] ;
	history_cham_jifen : number[] ;
	jifen_juanxian_time : number ;
	portrait_frame : number ;
}

declare interface ro3_GroupApplyInfo {
	username : string ;
	applytime : number ;
	image : number ;
	power : number ;
	nickname : string ;
	vip_lv : number ;
}

declare interface ro3_GroupLog {
	logtype : number ;
	opr_username : string ;
	opr_nickname : string ;
	opr_position : number ;
	int_param : number[] ;
	str_param : string[] ;
	opr_time : number ;
}

declare interface ro3_GroupTree {
	lv : number ;
	exp : number ;
	reset_time : number ;
}

declare interface ro3_GroupSnap {
	name : string ;
	leader : string ;
	level : number ;
	max_member : number ;
	cur_member : number ;
	min_power : number ;
	total_power : number ;
	last_update_time : number ;
	allow_flag : number ;
	groupid : number ;
}

declare interface ro3_GroupBoss {
	stage_id : number ;
	exp : number ;
	end_time : number ;
	uids : string[] ;
	battle_id : number ;
}

declare interface ro3_GroupRankData {
	username : string ;
	val : number ;
	nickname : string ;
	time_stamp : number ;
}

declare interface ro3_GroupDailyRank {
	end_stamp : number ;
	rank_list : ro3_GroupRankData[] ;
}

declare interface ro3_GroupPveDailyRankData {
	username : string ;
	nickname : string ;
	value : number ;
	time_stamp : number ;
}

declare interface ro3_GroupPveStage {
	stage_id : number ;
	hp : number ;
	max_hp : number ;
	fighter : string ;
	next_fight_time : number ;
	daily_rank : ro3_GroupPveDailyRankData[] ;
}

declare interface ro3_GroupPve {
	cur_stage_id : number ;
	stage_list : ro3_GroupPveStage[] ;
}

declare interface ro3_GroupPvp {
	state : number ;
	end_time : number ;
}

declare interface ro3_GroupHuntRcd {
	stage_id : number ;
}

declare interface ro3_Group {
	data : ro3_GroupCommonData ;
	role_list : ro3_GroupMember[] ;
	snap : ro3_GroupSnap ;
	boss_list : ro3_GroupBoss[] ;
	apply_list : ro3_GroupApplyInfo[] ;
	logs : ro3_GroupLog[] ;
	daily_rank : ro3_GroupDailyRank ;
	pve_data : ro3_GroupPve ;
	tree : ro3_GroupTree ;
	pvp_data : ro3_GroupPvp ;
	group_hunt : ro3_GroupHuntRcd ;
	activity_id : number ;
	kick_cnt : number ;
	total_jifen : number[] ;
}

declare interface ro3_GroupPvpRole {
	uid : string ;
	image : number ;
	nickname : string ;
	jifen : number ;
	time_stamp : number ;
	rank : number ;
	groupid : number ;
}

declare interface ro3_GroupPvpData {
	groupid : number ;
	group_lv : number ;
	group_name : string ;
	leader : string ;
	jifen : number ;
	time_stamp : number ;
	winner : number ;
	rank : number ;
	camp : number ;
	member_num : number ;
}

declare interface ro3_GroupPveList {
	group_list1 : ro3_GroupPvpData[] ;
	group_list2 : ro3_GroupPvpData[] ;
	group_winner1 : ro3_GroupPvpData ;
	group_winner2 : ro3_GroupPvpData ;
}

declare interface ro3_GroupPvpInfo {
	season_id : number ;
	step : number ;
	end_time : number ;
	last_season_id : number ;
}

declare interface ro3_GroupHuntRole {
	uid : string ;
	val : number ;
	rcds : ro3_GroupHuntRole_GroupHuntRes[] ;
}

declare interface ro3_GroupHuntRole_GroupHuntRes {
	res_id : number ;
	sec : number ;
}

declare interface ro3_GroupHuntResPoint {
	id : number ;
	res_id : number ;
	uid : string ;
	begin_time : number ;
	image : number ;
	nickname : string ;
}

declare interface ro3_GroupHuntData {
	groupid : number ;
	id : number ;
	step : number ;
	end_time : number ;
	progress : number ;
	role_list : ro3_GroupHuntRole[] ;
	points : ro3_GroupHuntResPoint[] ;
	hp : number ;
	max_hp : number ;
}

declare interface ro3_GroupPvpInfoNew {
	season_id : number ;
	step : number ;
	start_time : number ;
	end_time : number ;
	group_data : ro3_GroupPvpData[] ;
	role_data : ro3_GroupPvpRole[] ;
	last_season_id : number ;
	last_win_group_id : number ;
	last_win_group_leader : ro3_SnapRole ;
	last_group_data : ro3_GroupPvpData[] ;
	last_role_data : ro3_GroupPvpRole[] ;
}

declare interface ro3_ElementRunesInfo {
	element_list : number[] ;
	is_active : number ;
}

declare interface ro3_PotentialityInfo {
	level : number ;
}

declare interface ro3_DollEquip {
	id : number ;
	position : number ;
	level : number ;
	star : number ;
	exp : number ;
}

declare interface ro3_Doll {
	id : number ;
	level : number ;
	star : number ;
	exp : number ;
	is_activate : boolean ;
	bless_lv : number ;
	equips : ro3_DollEquip[] ;
	adlevel : number ;
}

declare interface ro3_DollCollectSuit {
	id : number ;
	is_activate : boolean ;
	doll_list : number[] ;
}

declare interface ro3_GamerDollInfo {
	doll_num : number ;
	dolls : ro3_Doll[] ;
	doll_collect_suits : ro3_DollCollectSuit[] ;
}

declare interface ro3_LotteryDrawReq {
	type : number ;
}

declare interface ro3_LotteryDrawResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	info : ro3_LotteryDrawInfo ;
	rewardid : ro3_Item[] ;
}

declare interface ro3_LotteryCardBuyReq {
	num : number ;
}

declare interface ro3_LotteryCardBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	info : ro3_LotteryDrawInfo ;
}

declare interface ro3_LotteryRewardReq {
	rewardid : number ;
}

declare interface ro3_LotteryRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_LotteryChooseReq {
}

declare interface ro3_LotteryChooseResp {
	result : ro3_GeneralRet ;
	rewardid : number[] ;
	rewardinfo : ro3_LotteryDrawRewardInfo[] ;
}

declare interface ro3_ZhuanPanRewardListGetReq {
}

declare interface ro3_ZhuanPanRewardListGetResp {
	result : ro3_GeneralRet ;
	rewardid : number[] ;
	zhuanpaninfo : ro3_ZhuanPanInfo ;
	rewardinfo : ro3_LotteryDrawRewardInfo[] ;
	jdrewardinfo : ro3_LotteryDrawRewardInfo[] ;
}

declare interface ro3_ZhuanPanRewardGetReq {
	type : number ;
}

declare interface ro3_ZhuanPanRewardGetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	rewardids : number[] ;
	zhuanpaninfo : ro3_ZhuanPanInfo ;
}

declare interface ro3_ZhuanPanItemBuyReq {
	num : number ;
}

declare interface ro3_ZhuanPanItemBuyResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ZhuanPanJDReq {
	rewardid : number[] ;
}

declare interface ro3_ZhuanPanJDResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	zhuanpaninfo : ro3_ZhuanPanInfo ;
	code : number ;
}

declare interface ro3_MiniGroupListReq {
	type : number ;
}

declare interface ro3_MiniGroupListResp {
	result : ro3_GeneralRet ;
	mini_group : ro3_MiniGroup[] ;
	apply_mini_group_ids : number[] ;
}

declare interface ro3_MiniGroupGetReq {
}

declare interface ro3_MiniGroupGetResp {
	result : ro3_GeneralRet ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupCreateReq {
	level : number ;
	name : string ;
}

declare interface ro3_MiniGroupCreateResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	mini_group : ro3_MiniGroup ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupRandomJoinReq {
}

declare interface ro3_MiniGroupRandomJoinResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group_role : ro3_MiniGroupRole ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupApplyReq {
	mini_group_uid : number ;
}

declare interface ro3_MiniGroupApplyResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group_role : ro3_MiniGroupRole ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupAcceptReq {
	gamer_uid : string ;
	ttype : number ;
}

declare interface ro3_MiniGroupAcceptResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupKickReq {
	uid : string ;
}

declare interface ro3_MiniGroupKickResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupExitReq {
	mini_group_uid : number ;
}

declare interface ro3_MiniGroupExitResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupLimitReq {
	ttype : number ;
	power : number ;
}

declare interface ro3_MiniGroupLimitResp {
	result : ro3_GeneralRet ;
	snap : ro3_MiniGroupSnap ;
}

declare interface ro3_MiniGroupSearchReq {
	mini_group_uid : number ;
}

declare interface ro3_MiniGroupSearchResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupChangeNameReq {
	mini_group_new_name : string ;
}

declare interface ro3_MiniGroupChangeNameResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group : ro3_MiniGroup ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupAdditionRewardReq {
	reward_info : ro3_MiniGroupAdditionRewardReq_RewardInfo[] ;
}

declare interface ro3_MiniGroupAdditionRewardReq_RewardInfo {
	id : number ;
	lv : number ;
}

declare interface ro3_MiniGroupAdditionRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupTalentLvUpReq {
	talent_id : number ;
}

declare interface ro3_MiniGroupTalentLvUpResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupChangePosReq {
	gamer_uid : string ;
	pos : number ;
}

declare interface ro3_MiniGroupChangePosResp {
	result : ro3_GeneralRet ;
	error : number ;
	mini_group : ro3_MiniGroup ;
}

declare interface ro3_MiniGroupAcceptNotify {
	code : number ;
	mini_group_uid : number ;
}

declare interface ro3_MiniGroupStatusChangeNotify {
	ttype : number ;
	gamer_uid : string ;
	mini_group : ro3_MiniGroup ;
	mini_group_role : ro3_MiniGroupRole ;
}

declare interface ro3_MiniGroupFightFortressRewardReq {
	fortress_id : number ;
}

declare interface ro3_MiniGroupFightFortressRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	reward_got_ids : number ;
}

declare interface ro3_TowerRewardReq {
	ttype : number ;
}

declare interface ro3_TowerRewardResp {
	result : ro3_GeneralRet ;
	tower : ro3_Tower ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_TowerSweepReq {
}

declare interface ro3_TowerSweepResp {
	result : ro3_GeneralRet ;
	tower : ro3_Tower ;
	rsync : ro3_GeneralRsync ;
	code : number ;
}

declare interface ro3_TowerNewResetReq {
}

declare interface ro3_TowerNewResetResp {
	result : ro3_GeneralRet ;
	tower_new : ro3_Tower_New ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_TowerNewSweepReq {
}

declare interface ro3_TowerNewSweepResp {
	result : ro3_GeneralRet ;
	tower_new : ro3_Tower_New ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_FightDropList {
	drops : ro3_FightDropList_DropInfo[] ;
}

declare interface ro3_FightDropList_Item {
	id : number ;
	num : number ;
}

declare interface ro3_FightDropList_DropInfo {
	uid : string ;
	item_list : ro3_FightDropList_Item[] ;
}

declare interface ro3_UseCDKeyReq {
	cdkey : string ;
	user : string ;
	platform : number ;
	level : number ;
	vip_lv : number ;
	time : number ;
}

declare interface ro3_UseCDKeyResp {
	result : ro3_GeneralRet ;
	cdkey : string ;
	code : number ;
	msg : string ;
	items : ro3_Item[] ;
}

declare interface ro3_AchievementCondition {
	ctype : number ;
	cvalue : number ;
	complete : number ;
}

declare interface ro3_AchievementCell {
	achievement_id : number ;
	finish_cond_list : ro3_AchievementCondition[] ;
	state : number ;
	version : number ;
	complete_time : number ;
}

declare interface ro3_AchievementInfo {
	achievement_list : ro3_AchievementCell[] ;
	version : number ;
}

declare interface ro3_Tower {
	stage_id : number ;
	last_day_stamp : number ;
	rand_reward_cnt : number ;
	wheel_id : number ;
	reward_list : number[] ;
}

declare interface ro3_Tower_New {
	stage_id : number ;
	max_stage_id : number ;
	reset_cnt : number ;
}

declare interface ro3_AchievementListGetReq {
}

declare interface ro3_AchievementListGetResp {
	result : ro3_GeneralRet ;
	achievement_info : ro3_AchievementInfo ;
}

declare interface ro3_AchievementRewardGetReq {
	achiv_id_list : number[] ;
}

declare interface ro3_AchievementRewardGetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_AchievementNotify {
	ttype : number ;
	achievement_list : ro3_AchievementCell[] ;
}

declare interface ro3_GodWeaponActiveReq {
	heroid : number ;
}

declare interface ro3_GodWeaponActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon : ro3_HeroGodWeapon ;
}

declare interface ro3_GodWeaponLvupReq {
	heroid : number ;
	lvnum : number ;
}

declare interface ro3_GodWeaponLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon : ro3_HeroGodWeapon ;
}

declare interface ro3_GodWeaponSkillLvupReq {
	heroid : number ;
	skill_id : number ;
}

declare interface ro3_GodWeaponSkillLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	godweapon : ro3_HeroGodWeapon ;
	skill_sort_slut : ro3_SkillSortSlut[] ;
}

declare interface ro3_GodWeaponStigmataSetReq {
	heroid : number ;
	stigmata_id : number ;
	pos_index : number ;
	stigmata : ro3_GodWeaponStigmataCell ;
}

declare interface ro3_GodWeaponStigmataSetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon : ro3_HeroGodWeapon ;
}

declare interface ro3_GodWeaponSkillPointResetReq {
	heroid : number ;
}

declare interface ro3_GodWeaponSkillPointResetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon : ro3_HeroGodWeapon ;
	skill_sort_slut : ro3_SkillSortSlut[] ;
}

declare interface ro3_GodWeaponStigmataMixReq {
	item_list : ro3_Item[] ;
}

declare interface ro3_GodWeaponStigmataMixResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GodWeaponStageSweepReq {
	stage_id : number ;
	rate : number ;
}

declare interface ro3_GodWeaponStageSweepResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon_stageinfo : ro3_GodWeaponStageInfo ;
}

declare interface ro3_GodWeaponStageGetRewardReq {
	rate : number ;
}

declare interface ro3_GodWeaponStageGetRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	godweapon_stageinfo : ro3_GodWeaponStageInfo ;
}

declare interface ro3_GodWeaponStaResolveReq {
	stigmata_list : ro3_GodWeaponStigmataCell[] ;
}

declare interface ro3_GodWeaponStaResolveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GodWeaponStaLvupReq {
	heroid : number ;
	pos_index : number ;
	target_lv : number ;
}

declare interface ro3_GodWeaponStaLvupResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	heroid : number ;
	stigmata : ro3_GodWeaponStigmataCell ;
}

declare interface ro3_SkyArenaMatchRole {
	uid : string ;
	nickname : string ;
	min_group : string ;
	image_id : number ;
	power : number ;
	prepare : boolean ;
	owner : boolean ;
	fight_count : number ;
	score : number ;
	node_name : string ;
}

declare interface ro3_SkyArenaMatchRoom {
	guid : number ;
	start_match : boolean ;
	roles : ro3_SkyArenaMatchRole[] ;
	start_fight : boolean ;
	start_match_time : number ;
}

declare interface ro3_SkyArenaMatchRoomSyncNotify {
	room : ro3_SkyArenaMatchRoom ;
}

declare interface ro3_SkyArenaMatchEnterReq {
}

declare interface ro3_SkyArenaMatchEnterResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	room : ro3_SkyArenaMatchRoom ;
}

declare interface ro3_SkyArenaMatchInviteReq {
	uid : string ;
}

declare interface ro3_SkyArenaMatchInviteResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_SkyArenaMatchInviteNotify {
	room : ro3_SkyArenaMatchRoom ;
}

declare interface ro3_SkyArenaMatchLeaveReq {
}

declare interface ro3_SkyArenaMatchLeaveResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_SkyArenaMatchJoinReq {
	guid : number ;
}

declare interface ro3_SkyArenaMatchJoinResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	room : ro3_SkyArenaMatchRoom ;
}

declare interface ro3_SkyArenaMatchPrepareReq {
	prepare : boolean ;
}

declare interface ro3_SkyArenaMatchPrepareResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	prepare : boolean ;
}

declare interface ro3_SkyArenaMatchStartMatchReq {
	cancel : boolean ;
}

declare interface ro3_SkyArenaMatchStartMatchResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_SkyAreanFightRoleSnap {
	side : number ;
	uid : string ;
	nickname : string ;
	image_id : number ;
}

declare interface ro3_SkyArenaMatchJoinBattleNotify {
	room_id : number ;
	snaps : ro3_SkyAreanFightRoleSnap[] ;
}

declare interface ro3_SkyArenaGetInfoReq {
}

declare interface ro3_SkyArenaGetInfoResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	season : number ;
	score : number ;
	score_max : number ;
	win_count : number ;
	win_count_total : number ;
	reward_flag : number[] ;
	fight_count : number ;
	daily_reward_flag : number[] ;
	next_season : number ;
}

declare interface ro3_SkyArenaGetRewardReq {
	id : number ;
}

declare interface ro3_SkyArenaGetRewardResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_SkyArenaGetDailyRewardReq {
	id : number ;
}

declare interface ro3_SkyArenaGetDailyRewardResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_SkyArenaGetMatchRoomInfosReq {
	guids : number[] ;
}

declare interface ro3_SkyArenaGetMatchRoomInfosResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rooms : ro3_SkyArenaMatchRoom[] ;
}

declare interface ro3_HeroSkillLvUpReq {
	heroid : number ;
	skill_list : ro3_SkillInfo[] ;
}

declare interface ro3_HeroSkillLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	req : ro3_HeroSkillLvUpReq ;
	skill_used_point : number ;
	skill_sort_slut : ro3_SkillSortSlut[] ;
}

declare interface ro3_HeroSkillResetReq {
	heroid : number ;
}

declare interface ro3_HeroSkillResetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	heroid : number ;
	skill_list : ro3_SkillList ;
}

declare interface ro3_HeroSkillSetSortSlutReq {
	heroid : number ;
	slut : number ;
	skill_list : number[] ;
}

declare interface ro3_HeroSkillSetSortSlutResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	req : ro3_HeroSkillSetSortSlutReq ;
}

declare interface ro3_HeroSkillActiveSortSlutReq {
	heroid : number ;
	slut : number ;
}

declare interface ro3_HeroSkillActiveSortSlutResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	req : ro3_HeroSkillActiveSortSlutReq ;
}

declare interface ro3_BattleFrontActiveReq {
	part : number ;
}

declare interface ro3_BattleFrontActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	battle_data : ro3_BattleFront ;
}

declare interface ro3_BattleFrontGetReq {
}

declare interface ro3_BattleFrontGetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	battle_data : ro3_BattleFront ;
}

declare interface ro3_MechaLvUpReq {
	id : number ;
	is_one_key : number ;
}

declare interface ro3_MechaLvUpResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	mecha : ro3_Mecha ;
}

declare interface ro3_MechaEquipmentActiveReq {
	type : number ;
	id : number ;
}

declare interface ro3_MechaEquipmentActiveResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	mecha_equipment : ro3_MechaEquipment ;
}

declare interface ro3_RechargeProduct {
	product : number ;
	total : number ;
	last_time : number ;
}

declare interface ro3_RechargeRecord {
	product : number ;
	order : string ;
	amount : number ;
	time : number ;
}

declare interface ro3_RechargeHistory {
	products : ro3_RechargeProduct[] ;
	records : ro3_RechargeRecord[] ;
}

declare interface ro3_FightSkillReq {
	battle_idx : number ;
}

declare interface ro3_FightSkillResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightAttackPlayerReq {
	battle_idx : number ;
	uid : string ;
}

declare interface ro3_FightAttackPlayerResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightAttackBossReq {
	battle_idx : number ;
	boss_id : string ;
	target_role : number ;
}

declare interface ro3_FightAttackBossResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightGiveupBossReq {
	battle_idx : number ;
}

declare interface ro3_FightGiveupBossResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightEndNotify {
	battle_idx : number ;
	stage_id : number ;
}

declare interface ro3_FightMoveReq {
	x : number ;
	y : number ;
	battle_idx : number ;
}

declare interface ro3_FightMoveResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightLuckyBossReq {
	battle_idx : number ;
}

declare interface ro3_FightLuckyBossResp {
	result : ro3_GeneralRet ;
	code : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_FightShenjianSkillReq {
	battle_idx : number ;
	skill_idx : number ;
}

declare interface ro3_FightShenjianSkillResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_FightPowerNotify {
	power : number ;
}

declare interface ro3_FightItemAttackReq {
	battle_idx : number ;
	ttype : number ;
}

declare interface ro3_FightItemAttackResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rsync : ro3_GeneralRsync ;
	activity : ro3_Activity ;
}

declare interface ro3_JianwenShopBuyReq {
	id : number ;
}

declare interface ro3_JianwenShopBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	chapter : ro3_JianwenChapter ;
}

declare interface ro3_JianwenRewardReq {
	id : number ;
}

declare interface ro3_JianwenRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	chapter : ro3_JianwenChapter ;
}

declare interface ro3_JianwenNotify {
	chapters : ro3_JianwenChapter[] ;
}

declare interface ro3_Jianwen2DataReq {
}

declare interface ro3_Jianwen2DataResp {
	result : ro3_GeneralRet ;
	data : ro3_Jianwen2Data ;
}

declare interface ro3_Jianwen2RewardReq {
	type : number ;
}

declare interface ro3_Jianwen2RewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_Jianwen2ShopBuyReq {
	id : number ;
}

declare interface ro3_Jianwen2ShopBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	cell : ro3_JianwenShopCell ;
}

declare interface ro3_Jianwen2PowerReq {
	type : number ;
	power : number ;
}

declare interface ro3_Jianwen2PowerResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_QiFuActiveReq {
}

declare interface ro3_QiFuActiveResp {
	result : ro3_GeneralRet ;
	qifu : ro3_QiFu ;
}

declare interface ro3_QiFuAddExpReq {
	next_lv : number ;
	count : number ;
}

declare interface ro3_QiFuAddExpResp {
	result : ro3_GeneralRet ;
	qifu : ro3_QiFu ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_QiFuLvUpReq {
	type : number ;
}

declare interface ro3_QiFuLvUpResp {
	result : ro3_GeneralRet ;
	qifu : ro3_QiFu ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_QiFuSkillLvUpReq {
	skillid : number ;
	num : number ;
}

declare interface ro3_QiFuSkillLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	qifu : ro3_QiFu ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_QiFuHorseEquipReq {
	horseid : number ;
}

declare interface ro3_QiFuHorseEquipResp {
	result : ro3_GeneralRet ;
	qifu : ro3_QiFu ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_QiFuHorseWakeupReq {
	posi : number ;
	num : number ;
}

declare interface ro3_QiFuHorseWakeupResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	qifu : ro3_QiFu ;
}

declare interface ro3_RechargeReq {
	user : string ;
	amount : string ;
	product : number ;
	config : number ;
	selfdef : number ;
	game_money : number ;
	base_money : number ;
	other_item : string ;
	order : string ;
	platform : number ;
	plat_order : string ;
	channel : string ;
	time : number ;
	sign : string ;
}

declare interface ro3_RechargeResp {
	result : ro3_GeneralRet ;
	code : number ;
	level_sdk : number ;
	getnum_sdk : number ;
	config : number ;
}

declare interface ro3_RechargeNotify {
	code : number ;
	product : number ;
	vip_info : ro3_VIPInfo ;
	record : ro3_RechargeRecord ;
	products : ro3_RechargeProduct[] ;
	expedition : ro3_Expedition ;
	zhuansheng_guide : ro3_ZhuanShengGuideInfo ;
	rsync : ro3_GeneralRsync ;
	activity : ro3_Activity ;
	goldbuyinfo : ro3_GoldenBuyInfo ;
	total_rchg : number ;
	extra_bag_num : number ;
	recharge_chao_rsync : ro3_GeneralRsync ;
	recharge : ro3_RechargeHistory ;
	config : number ;
	show_reward : ro3_Item[] ;
}

declare interface ro3_RechargeRewardReq {
	day : number ;
}

declare interface ro3_RechargeRewardResp {
	result : ro3_GeneralRet ;
	vip_info : ro3_VIPInfo ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ShopGetReq {
	shop_id : number ;
}

declare interface ro3_ShopGetResp {
	result : ro3_GeneralRet ;
	shops : ro3_ShopCell[] ;
}

declare interface ro3_ShopBuyReq {
	shop_id : number ;
	id : number ;
	num : number ;
}

declare interface ro3_ShopBuyResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	shop_item : ro3_ShopItemCell ;
}

declare interface ro3_ShopRefreshReq {
	shop_id : number ;
}

declare interface ro3_ShopRefreshResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	shop : ro3_ShopCell ;
}

declare interface ro3_TimePvpActivityInfo {
	season_id : number ;
	start_time : number ;
	end_time : number ;
	step : number ;
}

declare interface ro3_Item {
	id : number ;
	num : number ;
	stamp : number ;
}

declare interface ro3_MineRobRcd {
	rcd_guid : number ;
	rob_type : number ;
	uid : string ;
	nick : string ;
	ttype : number ;
	time : number ;
	win : number ;
	item_list : ro3_Item[] ;
	is_revenge_win : number ;
	snap : ro3_SnapRole ;
}

declare interface ro3_MineCell {
	owner_uid : string ;
	ttype : number ;
	room_id : number ;
	index_pos : number ;
	start_time : number ;
	end_time : number ;
	is_finish : number ;
	robbed_list : ro3_MineRobRcd[] ;
	snap : ro3_SnapRole ;
}

declare interface ro3_MineRoleInfo {
	mine_data : ro3_MineCell ;
	record_list : ro3_MineRobRcd[] ;
	next_rcd_guid : number ;
	has_new : number ;
}

declare interface ro3_MineRoomInfo {
	room_id : number ;
	create_time : number ;
	mine_cell_list : ro3_MineCell[] ;
}

declare interface ro3_MineRoleData {
	mine_cnt : number ;
	rob_cnt : number ;
	bless_cnt : number ;
	bless_val : number ;
	cur_ttype : number ;
	ttype : number ;
	start_time : number ;
	end_time : number ;
	is_finish : number ;
	last_operator_time : number ;
}

declare interface ro3_ChangeHeadReq {
	id : number ;
	type : number ;
}

declare interface ro3_ChangeHeadResp {
	result : ro3_GeneralRet ;
	error : number ;
}

declare interface ro3_OneClickGetReq {
	info : ro3_OneClickInfo ;
	type : number ;
}

declare interface ro3_OneClickGetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	pve_data : ro3_PVE ;
	boss : ro3_RoleBoss ;
	group : ro3_GroupRole ;
	group_pve : ro3_GroupPve ;
	tower : ro3_Tower ;
	time : number ;
}

declare interface ro3_OneClickCardReq {
}

declare interface ro3_OneClickCardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	endtime : number ;
}

declare interface ro3_RedPointInfo {
}

declare interface ro3_OtherData {
	unread_mail_num : number ;
	unread_chat_num : number ;
	unaccept_friend_num : number ;
}

declare interface ro3_UpdateTime {
	week_time : number ;
	day_time : number ;
}

declare interface ro3_ClientFlag {
	flags : number[] ;
}

declare interface ro3_ClientData {
	key : string ;
	value : string ;
}

declare interface ro3_UserShare {
	guanzhu_stamp : number ;
	share_cnt : number ;
	next_share_stamp : number ;
	total_num : number ;
	today_num : number ;
	share_rewards : number[] ;
	identity_reward : number ;
	subscibe_reward : number ;
	good_gift_reward : number ;
}

declare interface ro3_SellData {
	type : number ;
	notify : string ;
}

declare interface ro3_RoleData {
	nickname : string ;
	wealth : ro3_RoleData_Wealth ;
	guid_mng : ro3_RoleData_GUIDManager ;
	image : number ;
	username : string ;
	hero_list : ro3_HeroData ;
	item_list : ro3_Item[] ;
	equip_list : ro3_Equip[] ;
	zhanwen_list : ro3_ZhanWen[] ;
	equip_max_num : number ;
	mine_data : ro3_MineRoleData ;
	artifact : ro3_Artifact[] ;
	pve_data : ro3_PVE ;
	boss : ro3_RoleBoss ;
	tower : ro3_Tower ;
	pvp : ro3_Pvp ;
	vip_info : ro3_VIPInfo ;
	things_stageinfo : ro3_ThingsStageInfo ;
	xinfa_list : ro3_XinFa[] ;
	other_data : ro3_OtherData ;
	update_time : ro3_UpdateTime ;
	client_flag : ro3_ClientFlag ;
	mail_list : ro3_MailList ;
	zhuansheng_info : ro3_ZhuanShengInfo ;
	godweapon_info : ro3_GodWeaponInfo ;
	activity : ro3_Activity ;
	task_info : ro3_TaskInfo ;
	group : ro3_GroupRole ;
	achievement_info : ro3_AchievementInfo ;
	recharge : ro3_RechargeHistory ;
	friend_list : ro3_FriendList ;
	lottery_info : ro3_LotteryDrawInfo ;
	shop : ro3_Shop ;
	equipcardlist : ro3_EquipCard[] ;
	lastoneclicksweeptime : number ;
	share_data : ro3_UserShare ;
	client_data : ro3_ClientData[] ;
	goldbuyinfo : ro3_GoldenBuyInfo ;
	redpoint : ro3_RedPointInfo ;
	fight_help : ro3_FightHelpInfo ;
	extra_bag_num : number ;
	tower_new : ro3_Tower_New ;
	zhuansheng_guide : ro3_ZhuanShengGuideInfo ;
	oneclick_endtime : number ;
	activity_time : ro3_ActivityTimeUserInfo ;
	zhuanpaninfo : ro3_ZhuanPanInfo ;
	goddessBressGiftInfo : ro3_GoddessBressGiftInfo ;
	activity_time_join_info : ro3_ActivityTimeUserJoinInfos ;
	loop_task_flag : boolean ;
	qifu : ro3_QiFu ;
	selldata : ro3_SellData[] ;
	pvpcupdata : ro3_PVPCup ;
	mini_group_role : ro3_MiniGroupRole ;
	jianwen_data : ro3_JianwenData ;
	virtual_item_day_list : ro3_Item[] ;
	redpapter_data : ro3_RedpaperData ;
	jianwen2_data : ro3_Jianwen2Data ;
	heropower : ro3_HeroPowerData ;
	ymirspace : ro3_Ymirspace ;
	battlefront : ro3_BattleFront ;
	username_v2 : string ;
	temp_item_list : ro3_RoleData_Temp_Item_List ;
	opencond : number ;
	data_version : number ;
	ext_info : ro3_RoleData_ExtInfo ;
	manager : ro3_RoleData_Manager[] ;
	robot : ro3_Robot ;
	stamp_book_stage : number[] ;
	have_Extra : number[] ;
	stamp_book : ro3_RoleData_Stamp[] ;
	adventure_job : number ;
	portrait_frame : number ;
	heads : ro3_Head[] ;
	rank_cross_add_power : ro3_RoleData_RankCrossAddPower[] ;
}

declare interface ro3_RoleData_Wealth {
	z : number ;
	diamond : number ;
}

declare interface ro3_RoleData_GUIDManager {
	next_mail_guid : number ;
	next_equip_guid : number ;
	next_zhanwen_guid : number ;
	next_xinfa_guid : number ;
	next_godweapon_guid : number ;
	last_got_cache_guid : number ;
}

declare interface ro3_RoleData_Temp_Item_List {
	equips : ro3_Item[] ;
	others : ro3_Item[] ;
}

declare interface ro3_RoleData_ExtInfo {
	create_stamp : number ;
	last_login_stamp : number ;
	last_ip : string ;
	last_platform : number ;
	last_os : string ;
	create_platform : number ;
	plat_acc_id : string ;
	mcc : string ;
	channel_id : string ;
	login_times : number ;
	login_days : number ;
	cont_login_days : number ;
	max_cont_login_days : number ;
	last_oline_dayid : number ;
	last_logout_stamp : number ;
	power : number ;
	attrib_info : ro3_AttribInfo ;
	total_online_time : number ;
	check_online_time : number ;
	total_rchg_time : number ;
	total_pay : number ;
	total_rchg : number ;
	left_rchg : number ;
	fp_time : number ;
	fp_amount : number ;
	fp_channel : string ;
	card_maxlevel : number ;
	fuwen_num : number ;
	speak_limit : number ;
	login_limit : number ;
	login_limit_reason : string ;
	login_limit_mirror : boolean ;
	max_stage : number ;
	last_guide : number ;
	last_event : number ;
	first_heroid : number ;
	cur_hero_num : number ;
	client_flags : number[] ;
	total_hejirunes : number ;
	total_guaji_get_exp : number ;
	jiuz_id : number ;
	next_login_broadcast_refresh_time : number ;
	yzj_start_time : number ;
	stage_star_time : number ;
	jiyou_start_time : number ;
}

declare interface ro3_RoleData_Manager {
}

declare interface ro3_RoleData_Stamp {
	book : number[] ;
}

declare interface ro3_RoleData_RankCrossAddPower {
	activity_id : number ;
	add_power : number ;
}

declare interface ro3_PosiInfo {
	posi : number ;
	target_lv : number ;
}

declare interface ro3_EquipLvUpReq {
	heroid : number ;
	type : number ;
	datas : ro3_PosiInfo[] ;
}

declare interface ro3_EquipLvUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipUpReq {
	heroid : number ;
	guids : number[] ;
	auto_equip : number ;
}

declare interface ro3_EquipUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	old_equips : ro3_Equip[] ;
	guids : number[] ;
}

declare interface ro3_EquipMakeReq {
	equipid : number ;
	heroid : number ;
	guid : number ;
	upgrade : number ;
}

declare interface ro3_EquipMakeResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	old_equip : ro3_Equip ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipResolveReq {
	guids : number[] ;
	type : number ;
	ids : number[] ;
}

declare interface ro3_EquipResolveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_AvatarActiveReq {
	heroid : number ;
	avatarid : number ;
}

declare interface ro3_AvatarActiveResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_AvatarEquipReq {
	heroid : number ;
	avatarid : number ;
	posi : number ;
}

declare interface ro3_AvatarEquipResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
}

declare interface ro3_AvatarLvUpReq {
	heroid : number ;
	avatarid : number ;
}

declare interface ro3_AvatarLvUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ChuangChengEquipLvUpReq {
	guid : number ;
}

declare interface ro3_ChuangChengEquipLvUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_TitleEquipReq {
	heroid : number ;
	titleid : number ;
	unequip : number ;
}

declare interface ro3_TitleEquipResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	titles : ro3_HeroTitle[] ;
}

declare interface ro3_EquipCardAllReq {
	type : number ;
	heroid : number ;
	info : ro3_EquipCardNeedInfo[] ;
}

declare interface ro3_EquipCardAllResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	rsync : ro3_GeneralRsync ;
	equipcardlist : ro3_EquipCard[] ;
	hero : ro3_Hero ;
}

declare interface ro3_EquipCardItemCastReq {
	compose_id : number ;
	compose_count : number ;
}

declare interface ro3_EquipCardItemCastResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipCardResolveReq {
	info : ro3_EquipCard[] ;
}

declare interface ro3_EquipCardResolveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	equipcardlist : ro3_EquipCard[] ;
}

declare interface ro3_EquipCardResetReq {
	info : ro3_EquipCard[] ;
}

declare interface ro3_EquipCardResetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	equipcardlist : ro3_EquipCard[] ;
}

declare interface ro3_EquipFMActiveReq {
	heroid : number ;
	posi : number ;
	ttype : number ;
}

declare interface ro3_EquipFMActiveResp {
	result : ro3_GeneralRet ;
	code : number ;
	heroid : number ;
	equip_list : ro3_EquipPosi[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipFMLvupReq {
	heroid : number ;
	datas : ro3_PosiInfo[] ;
}

declare interface ro3_EquipFMLvupResp {
	result : ro3_GeneralRet ;
	code : number ;
	heroid : number ;
	equip_list : ro3_EquipPosi[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipFMBreakLvUpReq {
	heroid : number ;
	posi : number ;
	target_lv : number ;
}

declare interface ro3_EquipFMBreakLvUpResp {
	result : ro3_GeneralRet ;
	error : number ;
	heroid : number ;
	equip_list : ro3_EquipPosi[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipFMResetReq {
	heroid : number ;
	posi : number ;
}

declare interface ro3_EquipFMResetResp {
	result : ro3_GeneralRet ;
	code : number ;
	heroid : number ;
	equip_list : ro3_EquipPosi[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipFMReq {
	type : number ;
	heroid : number ;
	equipposi : number ;
	uptype : number ;
}

declare interface ro3_EquipFMResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	rsync : ro3_GeneralRsync ;
	hero : ro3_Hero ;
}

declare interface ro3_EquipLTLvupReq {
	heroid : number ;
	posi : number ;
	index : number ;
	target_lv : number ;
}

declare interface ro3_EquipLTLvupResp {
	result : ro3_GeneralRet ;
	code : number ;
	heroid : number ;
	equip_data : ro3_EquipPosi ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipAncientReq {
	heroid : number ;
	id : number ;
	auto : number ;
}

declare interface ro3_EquipAncientResp {
	result : ro3_GeneralRet ;
	heroid : number ;
	equip_data : ro3_EquipPosi ;
	rsync : ro3_GeneralRsync ;
	auto_equip_data : ro3_EquipPosi[] ;
}

declare interface ro3_EquipAncientStoneReq {
	heroid : number ;
	id : number ;
	num : number ;
}

declare interface ro3_EquipAncientStoneResp {
	result : ro3_GeneralRet ;
	heroid : number ;
	ancient : ro3_HeroAncient ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_EquipAncientComposeReq {
	heroid : number ;
	targetid : number ;
}

declare interface ro3_EquipAncientComposeResp {
	result : ro3_GeneralRet ;
	heroid : number ;
	equip_data : ro3_EquipPosi ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_MineRobRcdListReq {
}

declare interface ro3_MineRobRcdListResp {
	result : ro3_GeneralRet ;
	mine_rcd_list : ro3_MineRobRcd[] ;
	has_new : number ;
}

declare interface ro3_MineNewRobbedRcdNotify {
}

declare interface ro3_MineReadRobRcdReq {
}

declare interface ro3_MineReadRobRcdResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_MineStartReq {
}

declare interface ro3_MineStartResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	mine_list : ro3_MineCell[] ;
	data : ro3_MineRoleData ;
}

declare interface ro3_MineStartNotify {
	mine_cell : ro3_MineCell ;
}

declare interface ro3_MineFastFinishReq {
}

declare interface ro3_MineFastFinishResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	data : ro3_MineRoleData ;
}

declare interface ro3_MineFastFinishNotify {
	mine_cell : ro3_MineCell ;
}

declare interface ro3_MineGetRewardReq {
	type : number ;
}

declare interface ro3_MineGetRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	robbed_list : ro3_MineRobRcd[] ;
	data : ro3_MineRoleData ;
}

declare interface ro3_MinePeopleLevelUpReq {
	type : number ;
}

declare interface ro3_MinePeopleLevelUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	data : ro3_MineRoleData ;
}

declare interface ro3_OneClickInfo {
	type : number[] ;
	sweeptimes : number ;
	rewardtimes : number ;
	bossbuytimes : number ;
	stage_idx : number[] ;
}

declare interface ro3_VipGiftReq {
	level : number ;
	type : number ;
}

declare interface ro3_VipGiftResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	vip_info : ro3_VIPInfo ;
}

declare interface ro3_ShieldInfo {
	level : number ;
	lvup_times : number ;
	is_need_break : number ;
	shield_val : number ;
	shield_hurt_absorb : number ;
	is_not_active : number ;
}

declare interface ro3_HeroTitle {
	id : number ;
	active : number ;
	active_end_time : number ;
	equip_hero : number ;
}

declare interface ro3_HeroJueWei {
	id : number ;
	exp : number ;
	lv_list : number[] ;
	lilian : number ;
}

declare interface ro3_HeroCommonData {
	heronum : number ;
	lv : number ;
	exp : number ;
	zx_lv : number ;
	zx_exp : number ;
	titles : ro3_HeroTitle[] ;
	handbook : ro3_HandbookInfo ;
	elementrunes : ro3_ElementRunesInfo ;
	lh_lv : number ;
	lh_exp : number ;
	max_lv : number ;
	jw_data : ro3_HeroJueWei ;
	thingsinfo : ro3_ThingsInfo ;
	medal_info : ro3_MedalInfo ;
	prestige_info : ro3_PrestigeInfo ;
	elf_data : ro3_ElfList ;
	shenzhuang_max_power : number ;
	card_open : number[] ;
	dolls : ro3_GamerDollInfo ;
	medal_info_new : ro3_MedalInfoNew ;
	thingsguardinfo : ro3_ThingsGuardInfo ;
	mecha : ro3_Mecha[] ;
	mecha_equipment : ro3_MechaEquipment[] ;
}

declare interface ro3_Avatar {
	id : number ;
	active : number ;
	lv : number ;
	active_end_time : number ;
}

declare interface ro3_AvatarPosi {
	posi : number ;
	avatarid : number ;
}

declare interface ro3_HeroLongHun {
	lv : number ;
	exp : number ;
	active : number ;
}

declare interface ro3_HeroYuPei {
	lv : number ;
	exp : number ;
	lv1 : number ;
	lv2 : number ;
	lv3 : number ;
}

declare interface ro3_HeroGroupData {
	lv1 : number ;
	lv2 : number ;
	lv3 : number ;
}

declare interface ro3_HeroAncient {
	ad_lv1 : number ;
	ad_lv2 : number ;
}

declare interface ro3_Hero {
	id : number ;
	job_type : number ;
	equip_list : ro3_EquipPosi[] ;
	zhanwenpos_list : ro3_ZhanWenPosi[] ;
	titleid : number ;
	avatar : ro3_AvatarPosi[] ;
	avatar_list : ro3_Avatar[] ;
	lh_data : ro3_HeroLongHun ;
	skl_list : ro3_SkillList ;
	shield : ro3_ShieldInfo ;
	wings : ro3_Wings ;
	yp_data : ro3_HeroYuPei ;
	xf_data : ro3_XinFaList ;
	potentiality : ro3_PotentialityInfo ;
	godweapon : ro3_HeroGodWeapon ;
	group : ro3_HeroGroupData ;
	cardalllevel : number ;
	zhanwen_suits : number[] ;
	avatar_suits : number[] ;
	qifu : ro3_QiFu ;
	power : number ;
	is_zztask_flag : number ;
	zz_lv : number ;
	ancient : ro3_HeroAncient ;
	xing_zuo : ro3_XingzuoInfo ;
}

declare interface ro3_HeroData {
	heros : ro3_Hero[] ;
	heros_data : ro3_HeroCommonData ;
}

declare interface ro3_RobotHero {
	mid : number ;
	avatar : ro3_AvatarPosi[] ;
	equip_list : number[] ;
	job_type : number ;
}

declare interface ro3_Robot {
	id : number ;
	image : number ;
	lv : number ;
	zx_lv : number ;
	lh_lv : number ;
	heros : ro3_RobotHero[] ;
	Attri_Coefficient : number[] ;
	he_skill : number ;
	title : number ;
}

declare interface ro3_GoldenBuyReq {
	times : number ;
}

declare interface ro3_GoldenBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	info : ro3_GoldenBuyInfo ;
}

declare interface ro3_BattlePlayerInfo {
	uid : string ;
	nickname : string ;
	image_id : number ;
	power : number ;
	time : number ;
	ranknum : number ;
}

declare interface ro3_BattleFieldInfo {
	stage_id : number ;
	realnum : number ;
	maxnum : number ;
	starttime : number ;
	endtime : number ;
	item : ro3_BattleFieldInfo_iteminfo ;
	infos : ro3_BattlePlayerInfo[] ;
}

declare interface ro3_BattleFieldInfo_iteminfo {
	itemid : number ;
	num : number ;
}

declare interface ro3_LoginReq {
	uid : string ;
	password : string ;
	device_type : string ;
	resolution : string ;
	os_type : string ;
	isp : string ;
	net : string ;
	mcc : string ;
	account : string ;
	platform : number ;
	version : number ;
	reconnect : number ;
	ip : string ;
	channel_id : string ;
}

declare interface ro3_LoginResp {
	result : ro3_LoginResp_LoginRet ;
	uid : string ;
	isinit : boolean ;
	req_type : ro3_LoginResp_ReqType ;
	role_data : ro3_RoleData ;
	nowtime : number ;
	open_svr_time : number ;
	version : number ;
	reconnect : number ;
	battle_idx : number ;
	stage_id : number ;
	offlinereward : ro3_LoginResp_OfflineReward ;
	activity_list : ro3_ActivityList ;
	boss_list : ro3_BossData[] ;
	next_time : number ;
	fieldinfos : ro3_BattleFieldInfo[] ;
	activity_list_ext : ro3_ActivityList ;
	robot_list : ro3_RoleData[] ;
	merge_svr_time : number ;
	timezone_diff : number ;
	server_names : ro3_ServerName[] ;
	open_day_flag : number ;
	svr_type : number ;
}

declare enum ro3_LoginResp_LoginRet {
	OK = 0 ,
	FAIL = -1 ,
	NODATA = 1 ,
	NOAUTH = 2 ,
	FULL = 3 ,
	VER_ERR = 4 ,
	NICKNAME_EXIST = 5 ,
	NICKNAME_ERR = 6 ,
	BLOCKED = 7 
}

declare enum ro3_LoginResp_ReqType {
	LOGIN = 0 ,
	SELECT_ROLE = 1 ,
	CREATE_ROLE = 2 
}

declare interface ro3_LoginResp_OfflineReward {
	yueka_zeny : number ;
	yueka_exp : number ;
	rsync : ro3_GeneralRsync ;
	offline_time : number ;
	nianka_zeny : number ;
	nianka_exp : number ;
	automatic_melting : number ;
	automatic_melting2 : number ;
}

declare interface ro3_RegistReq {
	role_name : string ;
	image : number ;
	device_type : string ;
	resolution : string ;
	os_type : string ;
	isp : string ;
	net : string ;
	mcc : string ;
	account : string ;
	platform : number ;
	heroid : number ;
	ip : string ;
	ext_info : ro3_RegistReq_ExtInfo ;
	flag : number ;
	is_auto : number ;
	channel_id : string ;
}

declare interface ro3_RegistReq_ExtInfo {
	real_money : number ;
	money : number ;
}

declare interface ro3_KickOutNotify {
	reason : ro3_KickOutNotify_Reason ;
	msg : string ;
}

declare enum ro3_KickOutNotify_Reason {
	NeedLogin = 0 ,
	ForceLogout = 1 ,
	Sealed = 2 ,
	PlayerFull = 3 
}

declare interface ro3_SetClientFlagReq {
	add_flags : number[] ;
	del_flags : number[] ;
}

declare interface ro3_SetClientFlagResp {
	result : ro3_GeneralRet ;
	client_flags : ro3_ClientFlag ;
}

declare interface ro3_DataRsyncInfo {
	wealth : ro3_RoleData_Wealth ;
	rsync : ro3_GeneralRsync ;
	server_time : number ;
}

declare interface ro3_HeartBeatReq {
}

declare interface ro3_HeartBeatResp {
	result : ro3_GeneralRet ;
	rsync : ro3_DataRsyncInfo ;
	boss_list : ro3_BossData[] ;
	boss : ro3_RoleBoss ;
	zhuansheng_guide : ro3_ZhuanShengGuideInfo ;
	activity_time : ro3_ActivityTimeUserInfo ;
	areanOnHeart : ro3_AreanOnHeart ;
}

declare interface ro3_HeartCheckReq {
}

declare interface ro3_HeartCheckResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_SimpleHeartBeatReq {
}

declare interface ro3_SimpleHeartBeatResp {
	result : ro3_GeneralRet ;
	heros_data : ro3_HeroCommonData ;
}

declare interface ro3_AttribDebugReq {
}

declare interface ro3_AttribDebugResp {
	result : ro3_GeneralRet ;
	hero_list : ro3_AttribDebugResp_hero_attrib_list[] ;
	handbook : ro3_AttribDebugResp_att_value[] ;
	element : ro3_AttribDebugResp_att_value[] ;
	artifact : ro3_AttribDebugResp_att_value[] ;
	jw : ro3_AttribDebugResp_att_value[] ;
	things : ro3_AttribDebugResp_att_value[] ;
	medal : ro3_AttribDebugResp_att_value[] ;
	title : ro3_AttribDebugResp_att_value[] ;
	power : number ;
	weiwang : ro3_AttribDebugResp_att_value[] ;
	elf : ro3_AttribDebugResp_att_value[] ;
	power1 : number ;
	vip : ro3_AttribDebugResp_att_value[] ;
}

declare interface ro3_AttribDebugResp_att_value {
	idx : number ;
	value : number ;
}

declare interface ro3_AttribDebugResp_attrib_list {
	list : ro3_AttribDebugResp_att_value[] ;
}

declare interface ro3_AttribDebugResp_hero_attrib_list {
	id : number ;
	container : ro3_AttribDebugResp_attrib_list[] ;
	show_list : ro3_AttribDebugResp_att_value[] ;
}

declare interface ro3_SimpleRsyncNotify {
	notify_list : ro3_SimpleRsyncNotify_Notify[] ;
}

declare interface ro3_SimpleRsyncNotify_Notify {
	type : string ;
	buffer : string ;
}

declare interface ro3_LogoutReq {
	uid : string ;
}

declare interface ro3_LogoutResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_UserShareReq {
	ttype : number ;
	num : number[] ;
	is_collect : number ;
	is_caiqian : number ;
}

declare interface ro3_UserShareResp {
	result : ro3_GeneralRet ;
	share_data : ro3_UserShare ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_ChangeNickReq {
	infos : ro3_ChangeNickReq_ChangeUid[] ;
	new_nick : string ;
}

declare interface ro3_ChangeNickReq_ChangeUid {
	cidbefore : number ;
	cidafter : number ;
}

declare interface ro3_ChangeNickResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	nickname : string ;
	image : number ;
	hero_list : ro3_HeroData ;
	attrib_info : ro3_AttribInfo ;
}

declare interface ro3_ClientDataReq {
	operate : number ;
	client_data : ro3_ClientData[] ;
}

declare interface ro3_ClientDataResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	client_data : ro3_ClientData[] ;
}

declare interface ro3_HeroInfo {
	id : number ;
	power : number ;
}

declare interface ro3_SnapRole {
	uid : string ;
	nickname : string ;
	level : number ;
	image_id : number ;
	vip_level : number ;
	title : number ;
	zx_level : number ;
	power : number ;
	heroinfo : ro3_HeroInfo[] ;
	group_name : string ;
	groupid : number ;
	mini_group_name : string ;
	mini_group_uid : number ;
	service_name : string ;
	adventure_job : number ;
	portrait_frame : number ;
	last_login_time : number ;
}

declare interface ro3_Friend {
	username : string ;
	snap : ro3_SnapRole ;
	online : number ;
	client_flag : number ;
	create_time : number ;
	last_login_int : number ;
	apply_time : number ;
	last_update_time : number ;
}

declare interface ro3_HeroSimple {
	id : number ;
	job_type : number ;
	equip_list : ro3_EquipPosi[] ;
	avatar : ro3_AvatarPosi[] ;
	winglevel : number ;
	power : number ;
	xingzuo_display_id : number ;
	title_id : number ;
}

declare interface ro3_HeroSimpleData {
	username : string ;
	snap : ro3_SnapRole ;
	heros : ro3_HeroSimple[] ;
	id : number ;
}

declare interface ro3_FriendList {
	friend : ro3_Friend[] ;
	accept : ro3_Friend[] ;
	black : ro3_Friend[] ;
	apply : string[] ;
	max_friend_num : number ;
	next_reset_time : number ;
	last_update_time : number ;
	last_refresh_time : number ;
}

declare interface ro3_XinFaActiveReq {
	heroid : number ;
	ttype : number ;
}

declare interface ro3_XinFaActiveResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
}

declare interface ro3_XinFaEquipReq {
	heroid : number ;
	ttype : number ;
	pos : number ;
	id : number ;
	guid : number ;
}

declare interface ro3_XinFaEquipResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	xinfa_list : ro3_XinFa[] ;
}

declare interface ro3_XinFaStarUpReq {
	heroid : number ;
	ttype : number ;
	pos : number ;
}

declare interface ro3_XinFaStarUpResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
	xinfa_list : ro3_XinFa[] ;
}

declare interface ro3_XinFaLvupReq {
	heroid : number ;
	ttype : number ;
	level : number ;
}

declare interface ro3_XinFaLvupResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_XinFaSmeltReq {
	xinfa_list : ro3_XinFa[] ;
}

declare interface ro3_XinFaSmeltResp {
	result : ro3_GeneralRet ;
	xinfa_list : ro3_XinFa[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_YmirspaceShopItem {
	config_id : number ;
	item : ro3_Item ;
	cost : ro3_Item[] ;
	buy_count : number ;
	max_count : number ;
	season : number ;
}

declare interface ro3_YmirspaceShopSeasonItems {
	season : number ;
	items : ro3_YmirspaceShopItem[] ;
}

declare interface ro3_Ymirspace {
	buy_items : ro3_YmirspaceShopItem[] ;
	season_items : ro3_YmirspaceShopSeasonItems[] ;
}

declare interface ro3_YmirSapceFinishRole {
	uid : string ;
	nickname : string ;
	image_id : number ;
	damage : number ;
	disconnect : boolean ;
}

declare interface ro3_YmirSapceFinishInfo {
	guid : string ;
	season : number ;
	level : number ;
	pass : boolean ;
	pass_time : number ;
	roles : ro3_YmirSapceFinishRole[] ;
}

declare interface ro3_ActivityListReq {
	ttype : number ;
	ttypes : number[] ;
	flag : number ;
}

declare interface ro3_ActivityListResp {
	result : ro3_GeneralRet ;
	activity_list : ro3_ActivityList ;
	activity : ro3_Activity ;
}

declare interface ro3_GetActivityReq {
	activity_types : number[] ;
}

declare interface ro3_GetActivityResp {
	result : ro3_GeneralRet ;
	activity : ro3_Activity ;
}

declare interface ro3_MsgNewActNotify {
	activity_id : number ;
}

declare interface ro3_MsgNewActNotify2 {
	list : ro3_MsgNewActNotify2_MsgActCell[] ;
}

declare interface ro3_MsgNewActNotify2_MsgActCell {
	activity_id : number ;
	begin_time : number ;
}

declare interface ro3_ActCaishendaoReq {
}

declare interface ro3_ActCaishendaoResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	diamond : number ;
	cai_shen_dao : ro3_CaiShenDao ;
}

declare interface ro3_ActGoalRewardReq {
	activity_id : number ;
	idx : number ;
}

declare interface ro3_ActGoalRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	code : number ;
}

declare interface ro3_ActGoalNotify {
	goal_actvys1 : ro3_ActGoalEntity1 ;
	goal_actvys2 : ro3_ActGoalEntity2 ;
	danbi_kaifu : ro3_ActDanbi ;
}

declare interface ro3_ActMonsterRewardReq {
	id : number ;
	ttype : number ;
}

declare interface ro3_ActMonsterRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	monster : ro3_ActMonster ;
}

declare interface ro3_ActNewGoalStateNotify {
	cell_list : ro3_ActNewGoalStateNotify_ActCell[] ;
}

declare interface ro3_ActNewGoalStateNotify_ActCell {
	activity_id : number ;
	goal_list : ro3_ActGoalNewCell[] ;
}

declare interface ro3_ActCarnivalRewardReq {
	goal_id : number ;
}

declare interface ro3_ActCarnivalRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	carnival : ro3_ActvyCarnival ;
}

declare interface ro3_SignInReq {
	rewardid : number ;
	type : number ;
}

declare interface ro3_SignInResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	sign_info : ro3_SignInInfo ;
	loginact_info : ro3_LoginActInfo ;
	sign_info_2 : ro3_SignInInfo ;
	loginact_info_2 : ro3_LoginActInfo ;
	festival_login_info : ro3_LoginActInfo ;
}

declare interface ro3_DailyLoginReq {
	rewardid : number ;
}

declare interface ro3_DailyLoginResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	loginact_info : ro3_LoginActInfo ;
}

declare interface ro3_CostListInfoReq {
}

declare interface ro3_CostListInfoResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rechargelist_info : ro3_RechargeListInfo ;
}

declare interface ro3_ActFoodFestivalGetReq {
}

declare interface ro3_ActFoodFestivalGetResp {
	result : ro3_GeneralRet ;
	food_festival : ro3_ActvyFoodFestival ;
}

declare interface ro3_ActFoodFestivalRewardReq {
	task_id_list : number[] ;
}

declare interface ro3_ActFoodFestivalRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	food_festival : ro3_ActvyFoodFestival ;
	addon : number ;
}

declare interface ro3_ActFoodFestivalTaskRefreshReq {
	task_id : number ;
}

declare interface ro3_ActFoodFestivalTaskRefreshResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	food_festival : ro3_ActvyFoodFestival ;
}

declare interface ro3_ActFoodFestivalTaskBuyReq {
	num : number ;
}

declare interface ro3_ActFoodFestivalTaskBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	food_festival : ro3_ActvyFoodFestival ;
}

declare interface ro3_ActFoodFestivalShopBuyReq {
	idx : number ;
	num : number ;
}

declare interface ro3_ActFoodFestivalShopBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	food_festival : ro3_ActvyFoodFestival ;
}

declare interface ro3_ActFoodAliceTaskCompleteReq {
	task_id : number ;
}

declare interface ro3_ActFoodAliceTaskCompleteResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	food_festival : ro3_ActvyFoodFestival ;
}

declare interface ro3_ActGetSportsLastRecordReq {
}

declare interface ro3_ActGetSportsLastRecordResp {
	result : ro3_GeneralRet ;
	rank : ro3_ActSportsRank ;
}

declare interface ro3_ActGetSportsRecordReq {
	day : number ;
}

declare interface ro3_ActGetSportsRecordResp {
	result : ro3_GeneralRet ;
	rank : ro3_ActSportsRank ;
	code : number ;
	jifen : number ;
}

declare interface ro3_ActGetSportsConfigReq {
}

declare interface ro3_ActGetSportsConfigResp {
	result : ro3_GeneralRet ;
	activity_list : ro3_ActivityList ;
	last_rank_end_time : number ;
}

declare interface ro3_ExpeditionRewardReq {
}

declare interface ro3_ExpeditionRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	info : ro3_Expedition ;
}

declare interface ro3_ActBuyGiftDiaReq {
	idx : number ;
	num : number ;
}

declare interface ro3_ActBuyGiftDiaResp {
	result : ro3_GeneralRet ;
	gift_diamond : ro3_ActGiftDia ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_LuckCardResetReq {
}

declare interface ro3_LuckCardResetResp {
	result : ro3_GeneralRet ;
	luckyinfo : ro3_LuckyCard ;
}

declare interface ro3_LuckyCardChooseReq {
	infos : ro3_LuckyCardChooseReq_Areainfo[] ;
}

declare interface ro3_LuckyCardChooseReq_Areainfo {
	area : number ;
	id : number ;
	type : number ;
}

declare interface ro3_LuckyCardChooseResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	luckyinfo : ro3_LuckyCard ;
}

declare interface ro3_LuckyCardConfirmReq {
}

declare interface ro3_LuckyCardConfirmResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	luckyinfo : ro3_LuckyCard ;
}

declare interface ro3_LuckyCardTurnReq {
	areaids : number[] ;
	ids : number[] ;
}

declare interface ro3_LuckyCardTurnResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	luckyinfo : ro3_LuckyCard ;
	rewards1 : ro3_LuckyCardTurnResp_Iteminfo[] ;
	rewards2 : ro3_LuckyCardTurnResp_Iteminfo[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_LuckyCardTurnResp_Iteminfo {
	id : number ;
	num : number ;
}

declare interface ro3_LuckyCardBuyReq {
	num : number ;
}

declare interface ro3_LuckyCardBuyResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_LuckyCardFreeReq {
}

declare interface ro3_LuckyCardFreeResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	rsync : ro3_GeneralRsync ;
	luckyinfo : ro3_LuckyCard ;
}

declare interface ro3_ActChaoRechargeReq {
}

declare interface ro3_ActChaoRechargeResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	chao_recharge : ro3_ActChaoRecharge ;
}

declare interface ro3_RichSignReq {
	signtype : number ;
}

declare interface ro3_RichSignResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	rich_sign : ro3_RichSign ;
}

declare interface ro3_ActSaleNoticeRewardReq {
	reward_idx : number ;
	act_type : number ;
}

declare interface ro3_ActSaleNoticeRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	sale_notice : ro3_SaleNotice ;
}

declare interface ro3_RedPacketReq {
	ttype : number ;
	operate : number ;
	day : number ;
	gift_id : number ;
}

declare interface ro3_RedPacketResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	login_red_packet : ro3_LoginRedPacket ;
	ten_thousand_rebate : ro3_TenThousandRebate ;
	cash_rebate : ro3_CashRebate ;
	rsync : ro3_GeneralRsync ;
	cash_back : ro3_CashBack ;
}

declare interface ro3_CashRebateNotify {
	cash_rebate : ro3_CashRebate ;
}

declare interface ro3_HolidayReq {
	ttype : number ;
	gift_id : number ;
}

declare interface ro3_HolidayResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	holiday : ro3_Holiday ;
}

declare interface ro3_ActivityTaskRewardReq {
	activity_type : number ;
	task_id : number ;
}

declare interface ro3_ActivityTaskRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	activity : ro3_Activity ;
}

declare interface ro3_ActivityTasksRewardReq {
	activity_type : number ;
	task_id : number[] ;
}

declare interface ro3_ActivityTasksRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	activity : ro3_Activity ;
}

declare interface ro3_Holiday618BigRewardReq {
	reward_id : number ;
}

declare interface ro3_Holiday618BigRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	holiday618 : ro3_Holiday618 ;
}

declare interface ro3_KillMonsterFestivalReceiveCompensationReq {
	stage_id : number ;
}

declare interface ro3_KillMonsterFestivalReceiveCompensationResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	kill_monster_festival : ro3_KillMonsterFestival ;
}

declare interface ro3_SummonReq {
	num : number ;
}

declare interface ro3_SummonResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	show_reward : ro3_Item[] ;
}

declare interface ro3_BlindBoxReq {
	num : number ;
	type : number ;
}

declare interface ro3_BlindBoxResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	show_reward : ro3_Item[] ;
	hide_reward : ro3_Item[] ;
	blind_box : ro3_BlindBox ;
}

declare interface ro3_ElfHelpReq {
	theme : number ;
	type : number ;
}

declare interface ro3_ElfHelpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	show_reward : ro3_Item[] ;
	elf_help : ro3_ElfHelp ;
}

declare interface ro3_Summon2Req {
	num : number ;
}

declare interface ro3_Summon2Resp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	show_reward : ro3_Item[] ;
	summon_2 : ro3_Summon ;
}

declare interface ro3_ZeroCoinRewardReq {
	id : number ;
}

declare interface ro3_ZeroCoinRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	zerocoin : ro3_ZeroCoin ;
	errcode : number ;
}

declare interface ro3_ZeroCoinReturnReq {
	id : number ;
	day : number ;
}

declare interface ro3_ZeroCoinReturnResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zerocoin : ro3_ZeroCoin ;
}

declare interface ro3_LuckyShopRefreshReq {
}

declare interface ro3_LuckyShopRefreshResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	luckyshop : ro3_HFLuckyShop ;
}

declare interface ro3_LuckyShopBuyReq {
	id : number ;
}

declare interface ro3_LuckyShopBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	luckyshop : ro3_HFLuckyShop ;
}

declare interface ro3_HFLotteryReq {
	grade : number ;
	num : number ;
}

declare interface ro3_HFLotteryResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	lottery : ro3_HFLottery ;
	show_reward : ro3_Item[] ;
	show_rewardids : number[] ;
}

declare interface ro3_CatBoardBigRewardReq {
	reward_id : number ;
}

declare interface ro3_CatBoardBigRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	catBoard : ro3_CatBoard ;
}

declare interface ro3_CatBoardGiftReq {
	gift_id : number ;
}

declare interface ro3_CatBoardGiftResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	catBoard : ro3_CatBoard ;
}

declare interface ro3_GrowthGiftRewardReq {
	gift_id : number ;
	reward_id : number[] ;
}

declare interface ro3_GrowthGiftRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	growthGift : ro3_GrowthGift ;
}

declare interface ro3_ActBoliValueChoiseReq {
	Ids : number[] ;
}

declare interface ro3_ActBoliValueChoiseResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	boliValue : ro3_BoliValue ;
}

declare interface ro3_ActBoliValueRandReq {
}

declare interface ro3_ActBoliValueRandResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rand : number ;
	boliValue : ro3_BoliValue ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ActBoliValueGetCornReq {
	count : number ;
}

declare interface ro3_ActBoliValueGetCornResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	boliValue : ro3_BoliValue ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ActBoliValueLiLianRewardReq {
}

declare interface ro3_ActBoliValueLiLianRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	boliValue : ro3_BoliValue ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_ChampionsShipNotify {
	activity_id : number ;
	reward : ro3_ChampionsShipNotify_item[] ;
}

declare interface ro3_ChampionsShipNotify_item {
	id : number ;
	num : number ;
}

declare interface ro3_ChampionsGroupNotify {
	activity_id : number ;
	reward : number[] ;
}

declare interface ro3_ChampionsShipRewardReq {
	reward_id : number ;
}

declare interface ro3_ChampionsShipRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	championsship : ro3_ChampionsShip ;
}

declare interface ro3_ShiLianRoadRewardReq {
	ttype : number ;
	num : number ;
	reward_id : number ;
}

declare interface ro3_ShiLianRoadRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	shi_lian_road : ro3_ShiLianRoad ;
	show_reward : ro3_Item[] ;
}

declare interface ro3_StageDropRewardReq {
}

declare interface ro3_StageDropRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	stage_drop : ro3_StageDrop ;
}

declare interface ro3_QuesAnswerReq {
	id : number ;
	Submit_id : number ;
	Submit_time : number ;
}

declare interface ro3_QuesAnswerResp {
	result : ro3_GeneralRet ;
	error : number ;
	ques_challenge : ro3_QuesChallenge ;
}

declare interface ro3_QuesStageRewardReq {
	stage : number ;
}

declare interface ro3_QuesStageRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	ques_challenge : ro3_QuesChallenge ;
}

declare interface ro3_GradeFundRewardReq {
	reward_id : number ;
}

declare interface ro3_GradeFundRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	gradefund : ro3_GradeFund ;
}

declare interface ro3_GradeFundOneClickGetReq {
	reward_id : number ;
}

declare interface ro3_GradeFundOneClickGetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	gradefund : ro3_GradeFund ;
}

declare interface ro3_StampBookOneClickGetReq {
	reward_id : number ;
}

declare interface ro3_StampBookOneClickGetResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	stamp_book_stage : number[] ;
	have_Extra : number[] ;
}

declare interface ro3_HeroFightRewardReq {
	id : number ;
}

declare interface ro3_HeroFightRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	hero_fight : ro3_HeroFight ;
}

declare interface ro3_HeroFightReq {
	id : number ;
}

declare interface ro3_HeroFightResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	hero_fight : ro3_HeroFight ;
	fight_rsync : ro3_FightRsync ;
}

declare interface ro3_HeroFightFinishReq {
	id : number ;
}

declare interface ro3_HeroFightFinishResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	hero_fight : ro3_HeroFight ;
	value : number ;
	rank : number ;
}

declare interface ro3_FreeGiftBuyReq {
}

declare interface ro3_FreeGiftBuyResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	free_gift : ro3_FreeGift ;
}

declare interface ro3_MazeGiftBuyReq {
	gift_id : number ;
}

declare interface ro3_MazeGiftBuyResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	maze_gift : ro3_MazeGift ;
}

declare interface ro3_MazePassLvUpReq {
	cost_item_num : number ;
}

declare interface ro3_MazePassLvUpResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	maze_pass : ro3_MazePass ;
}

declare interface ro3_MazePassRewardReq {
}

declare interface ro3_MazePassRewardResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	maze_pass : ro3_MazePass ;
}

declare interface ro3_ShiLianDiceBoxReq {
}

declare interface ro3_ShiLianDiceBoxResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	shi_lian_dice : ro3_ShiLianDice ;
}

declare interface ro3_ShiLianDiceBuyReq {
}

declare interface ro3_ShiLianDiceBuyResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	shi_lian_dice : ro3_ShiLianDice ;
}

declare interface ro3_ShiLianDiceReq {
}

declare interface ro3_ShiLianDiceResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	shi_lian_dice : ro3_ShiLianDice ;
	shi_lian_road : ro3_ShiLianRoad ;
}

declare interface ro3_ShiLianControlDiceReq {
	move_num : number ;
}

declare interface ro3_ShiLianControlDiceResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	shi_lian_dice : ro3_ShiLianDice ;
	shi_lian_road : ro3_ShiLianRoad ;
}

declare interface ro3_AdventureChangeJobReq {
	job_type : number ;
}

declare interface ro3_AdventureChangeJobResp {
	result : ro3_GeneralRet ;
	error : number ;
	adventure : ro3_Adventure ;
}

declare interface ro3_AdventureGetRecruitListReq {
}

declare interface ro3_AdventureGetRecruitListResp {
	result : ro3_GeneralRet ;
	recruit_list : ro3_AdventureTeamMemInfo[] ;
}

declare interface ro3_AdventureRecruitReq {
	gamer_uid : string ;
	array_index : number ;
}

declare interface ro3_AdventureRecruitResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	adventure : ro3_Adventure ;
}

declare interface ro3_AdventureLogEventReq {
	ttype : number ;
	adventure_uid : number ;
	log_uid : number ;
	select_option : number ;
}

declare interface ro3_AdventureLogEventResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	adventure : ro3_Adventure ;
}

declare interface ro3_AdventureStartStopReq {
	ttype : number ;
}

declare interface ro3_AdventureStartStopResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	adventure : ro3_Adventure ;
}

declare interface ro3_AdventureNewLogNotify {
	log : ro3_Adventure_AdventureInfo_AdventureLog ;
}

declare interface ro3_TempleTrialBuyReq {
	index : number ;
	num : number ;
}

declare interface ro3_TempleTrialBuyResp {
	result : ro3_GeneralRet ;
	error : number ;
	rsync : ro3_GeneralRsync ;
	stage : ro3_TempleTrialStage ;
}

declare interface ro3_JianwenRewardCell {
	id : number ;
	expire : number ;
}

declare interface ro3_JianwenShopCell {
	id : number ;
	buy_times : number ;
}

declare interface ro3_JianwenChapter {
	type : number ;
	reward_cells : ro3_JianwenRewardCell[] ;
	shop_expire : number ;
	shop_cells : ro3_JianwenShopCell[] ;
}

declare interface ro3_JianwenData {
	chapters : ro3_JianwenChapter[] ;
}

declare interface ro3_Jianwen2Chapter {
	type : number ;
	stage_id : number ;
}

declare interface ro3_Jianwen2Data {
	start_dayid : number ;
	jiesuan_dayid : number ;
	chapters : ro3_Jianwen2Chapter[] ;
	edition : number ;
	shop_cells : ro3_JianwenShopCell[] ;
}

declare interface ro3_HeroPower {
	id : number ;
	level : number ;
	star : number ;
	qianpan : ro3_HeroPowerQianpan[] ;
	reward_got_ids : number[] ;
	need_break : number ;
	break_count : number ;
}

declare interface ro3_HeroPowerSlot {
	ids : number[] ;
}

declare interface ro3_HeroPowerQianpan {
	id : number ;
	level : number ;
}

declare interface ro3_HeroPowerShopCell {
	id : number ;
	buy_times : number ;
}

declare interface ro3_HeroPowerData {
	hero_powers : ro3_HeroPower[] ;
	slots : ro3_HeroPowerSlot[] ;
	slot_act_idx : number ;
	shop_cells : ro3_HeroPowerShopCell[] ;
	is_open : number ;
}

declare interface ro3_ThingsActiveReq {
	thing_id : number ;
}

declare interface ro3_ThingsActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsStarReq {
}

declare interface ro3_ThingsStarResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsActiveShengliReq {
}

declare interface ro3_ThingsActiveShengliResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsSkillLearnReq {
	index : number ;
	thing_skill_id : number ;
}

declare interface ro3_ThingsSkillLearnResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsSkillLvupReq {
	index : number ;
}

declare interface ro3_ThingsSkillLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsSkillPosExtandReq {
	index : number ;
}

declare interface ro3_ThingsSkillPosExtandResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	thingsinfo : ro3_ThingsInfo ;
}

declare interface ro3_ThingsStageRewardReq {
	reward_type : number ;
}

declare interface ro3_ThingsStageRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	things_stageinfo : ro3_ThingsStageInfo ;
}

declare interface ro3_ThingsMarkAddExpReq {
}

declare interface ro3_ThingsMarkAddExpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	mark_info : ro3_ThingsMarkInfo ;
}

declare interface ro3_ThingsMarkSkillLvupReq {
	skill_id : number ;
}

declare interface ro3_ThingsMarkSkillLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	skill : ro3_ThingsMarkInfo_ThingsMarkSkillCell ;
}

declare interface ro3_HeroShieldActiveReq {
	heroid : number ;
}

declare interface ro3_HeroShieldActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	shield_info : ro3_ShieldInfo ;
}

declare interface ro3_HeroShieldLvUpReq {
	heroid : number ;
	ttype : number ;
	to_lv : number ;
	to_lvuptimes : number ;
}

declare interface ro3_HeroShieldLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	shield_info : ro3_ShieldInfo ;
}

declare interface ro3_Chater {
	username : string ;
	sid : number ;
	snap : ro3_SnapRole ;
}

declare interface ro3_TypeInfo {
	type : number ;
	infos : string[] ;
	stage_idx : number ;
	team_id : number ;
	newinfos : ro3_TypeInfo_ParamInfo[] ;
	isled : number ;
}

declare interface ro3_TypeInfo_ParamInfo {
	strvalue : string ;
	intvalue : number ;
}

declare interface ro3_Chat {
	speeker : ro3_Chater ;
	listeners : ro3_Chater[] ;
	msg : string ;
	channel : number ;
	groupid : number ;
	guid : number ;
	time : number ;
	typeinfo : ro3_TypeInfo ;
}

declare interface ro3_ChatData {
	perday_chat_times : number ;
	perday_max_chat_times : number ;
	last_refresh_time : number ;
}

declare interface ro3_EquipData {
	attr_per : number ;
	_aomi_lv : number ;
	suitid : number ;
}

declare interface ro3_Equip {
	guid : number ;
	id : number ;
	data : ro3_EquipData ;
}

declare interface ro3_EquipCard {
	guid : number ;
	level : number ;
	posi : number[] ;
	type : number ;
	num : number ;
	adlevel : number ;
	adlvcost : number ;
	compose_id : number ;
}

declare interface ro3_EquipCardPosi {
	posi : number ;
	info : ro3_EquipCard ;
}

declare interface ro3_EquipCardNeedInfo {
	card : ro3_EquipCard ;
	equipposi : number ;
	cardposi : number ;
	level : number ;
}

declare interface ro3_PosiData {
	q_lv : number ;
	z_lv : number ;
	j_lv : number ;
	qiyue_lv : number ;
	c_lv : number ;
	a_lv : number ;
	av_lv1 : number ;
	av_lv2 : number ;
	lt_lv : number[] ;
	ad_id : number ;
	ad_lv : number ;
	lt_clv : number ;
	adventure_lv : number ;
}

declare interface ro3_EquipFMPosi {
	type : number ;
	level : number ;
	break_level : number ;
}

declare interface ro3_EquipPosi {
	posi : number ;
	equip : ro3_Equip ;
	posidata : ro3_PosiData ;
	cardinfo : ro3_EquipCardPosi[] ;
	fminfo : ro3_EquipFMPosi ;
}

declare interface ro3_MonsterSiegeGetActivityInfoReq {
}

declare interface ro3_MonsterSiegeGetActivityInfoResp {
	result : ro3_GeneralRet ;
	error : number ;
	activity_info : ro3_MonsterSiegeActivityInfo ;
}

declare interface ro3_GmSendGiftReq {
	items : ro3_Item[] ;
}

declare interface ro3_GmSendGiftResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GmSendMailReq {
	title : string ;
	content : string ;
	type : number ;
	gid : number ;
	ttype : string ;
	attach : string ;
	foot : string ;
	target : ro3_GmSendMailReq_Tempinfo ;
	options : string ;
}

declare interface ro3_GmSendMailReq_Tempinfo {
	global : number ;
	users : string[] ;
}

declare interface ro3_GmSendMailResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GmMoveDataReq {
	uid : string ;
	type : string ;
	serverid : string ;
}

declare interface ro3_GmMoveDataResp {
	result : ro3_GeneralRet ;
	role : ro3_RoleData ;
}

declare interface ro3_GMRoleGetReq {
	target : string ;
	block : string ;
}

declare interface ro3_GMRoleGetResp {
	result : ro3_GeneralRet ;
	role : ro3_RoleData ;
	snap : ro3_SnapRole ;
	target : string ;
}

declare interface ro3_GMRoleSetReq {
	target : string ;
	block : string ;
}

declare interface ro3_GMRoleSetResp {
	result : ro3_GeneralRet ;
	role : ro3_RoleData ;
	target : string ;
}

declare interface ro3_GMSealAccountReq {
	target : string ;
	seal_time : number ;
	reason : string ;
}

declare interface ro3_GMSealAccountResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GMPassGuideReq {
	target : string ;
	guideid : number ;
}

declare interface ro3_GMPassGuideResp {
	result : ro3_GeneralRet ;
	target : string ;
	guideid : number ;
}

declare interface ro3_GMDiscardRoleReq {
	target : string ;
}

declare interface ro3_GMDiscardRoleResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GmSetTalkReq {
	target : string ;
	type : number ;
	time : number ;
}

declare interface ro3_GmSetTalkResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GmSellReq {
	type : number ;
	notify : string ;
	title : string ;
	desc : string ;
}

declare interface ro3_GmSellResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_GmKickoutPlayerReq {
	target : string ;
}

declare interface ro3_GmKickoutPlayerResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GroupPvpInfoReq {
}

declare interface ro3_GroupPvpInfoResp {
	result : ro3_GeneralRet ;
	group_pvp_info : ro3_GroupPvpInfo ;
	stage_cnt1 : number ;
	stage_cnt2 : number ;
}

declare interface ro3_GroupPvpSignReq {
	stage_id : number ;
}

declare interface ro3_GroupPvpSignResp {
	result : ro3_GeneralRet ;
	group_list : ro3_GroupPvpData[] ;
}

declare interface ro3_GroupPvpListReq {
	is_last : number ;
	ttype : number ;
	range : number[] ;
}

declare interface ro3_GroupPvpListResp {
	result : ro3_GeneralRet ;
	group_list1 : ro3_GroupPvpData[] ;
	group_list2 : ro3_GroupPvpData[] ;
	group_winner1 : ro3_GroupPvpData ;
	group_winner2 : ro3_GroupPvpData ;
	role_list : ro3_GroupPvpRole[] ;
}

declare interface ro3_GroupPvpRoleListReq {
	is_last : number ;
	range : number[] ;
}

declare interface ro3_GroupPvpRoleListResp {
	result : ro3_GeneralRet ;
	role_list : ro3_GroupPvpRole[] ;
}

declare interface ro3_GroupPvpDailyRewardReq {
}

declare interface ro3_GroupPvpDailyRewardResp {
	result : ro3_GeneralRet ;
	group : ro3_GroupRole ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupHuntGetReq {
}

declare interface ro3_GroupHuntGetResp {
	result : ro3_GeneralRet ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupHuntNotify {
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupHuntChooseReq {
	id : number ;
}

declare interface ro3_GroupHuntChooseResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupHuntContributeReq {
	ttype : number ;
}

declare interface ro3_GroupHuntContributeResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupHuntData ;
	rsync : ro3_GeneralRsync ;
	group : ro3_GroupRole ;
}

declare interface ro3_GroupHuntRobReq {
	id : number ;
}

declare interface ro3_GroupHuntRobResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupHuntExitReq {
	id : number ;
}

declare interface ro3_GroupHuntExitResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupHuntKickReq {
	id : number ;
	uid : string ;
}

declare interface ro3_GroupHuntKickResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_PvpCupSignUpReq {
}

declare interface ro3_PvpCupSignUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_PvpCupVote {
	stage_id : number ;
	match_id : number ;
	side : number ;
}

declare interface ro3_PvpCupVotes {
	votes : ro3_PvpCupVote[] ;
}

declare interface ro3_PvpCupVoteReq {
	stage_id : number ;
	match_id : number ;
	side : number ;
}

declare interface ro3_PvpCupVoteResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	stage_id : number ;
	match_id : number ;
	side : number ;
}

declare interface ro3_PvpCupSchedule {
	stage_id : number ;
	conf_id : number ;
	begin_time : number ;
	end_time : number ;
}

declare interface ro3_PvpCupGetScheduleReq {
}

declare interface ro3_PvpCupGetScheduleResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	schedules : ro3_PvpCupSchedule[] ;
}

declare interface ro3_PvpCupFightRecord {
	uuid : number ;
	role1 : ro3_SnapRole ;
	role2 : ro3_SnapRole ;
	win_side : number ;
	time_stamp : number ;
}

declare interface ro3_PvpCupFightRecords {
	records : ro3_PvpCupFightRecord[] ;
}

declare interface ro3_PvpCupPreFightRecordReq {
}

declare interface ro3_PvpCupPreFightRecordResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	records : ro3_PvpCupFightRecord[] ;
}

declare interface ro3_PvpCupStageRecordReq {
}

declare interface ro3_PvpCupStageRecordResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	records : ro3_PvpCupFightRecord[] ;
}

declare interface ro3_PvpCupContestants {
	contestants : string[] ;
}

declare interface ro3_PvpCupGetPreContestantsSnapReq {
}

declare interface ro3_PvpCupGetPreContestantsSnapResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	snap_role : ro3_SnapRole[] ;
}

declare interface ro3_PvpCupRankData {
	uid : string ;
	score : number ;
	win_count : number ;
	fight_count : number ;
	snap_role : ro3_SnapRole ;
}

declare interface ro3_PvpCupRankReq {
}

declare interface ro3_PvpCupRankResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	datas : ro3_PvpCupRankData[] ;
}

declare interface ro3_PvpCupGetInfoReq {
}

declare interface ro3_PvpCupGetInfoResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	start_time : number ;
	score : number ;
	votes : ro3_PvpCupVote[] ;
	server_names : ro3_ServerName[] ;
}

declare interface ro3_PvpCupGetFightRsyncReq {
	uuid : number ;
}

declare interface ro3_PvpCupGetFightRsyncResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	uuid : number ;
	win_side : number ;
	fight_rsync : ro3_FightRsync ;
}

declare interface ro3_PvpCupGetHeroSimpleDataReq {
	uid : string ;
}

declare interface ro3_PvpCupGetHeroSimpleDataResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	hero_simple_data : ro3_HeroSimpleData ;
}

declare interface ro3_PvpKFPaiweiGetDataReq {
}

declare interface ro3_PvpKFPaiweiGetDataResp {
	result : ro3_GeneralRet ;
	paiwei : ro3_PvpKFPaiwei ;
	selfrank : number ;
	rank : ro3_MsgRankCell ;
}

declare interface ro3_PvpKFPaiweiBuyReq {
}

declare interface ro3_PvpKFPaiweiBuyResp {
	result : ro3_GeneralRet ;
	paiwei : ro3_PvpKFPaiwei ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_PvpKFPaiweiGetDailyRewardReq {
	stage : number ;
}

declare interface ro3_PvpKFPaiweiGetDailyRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	reward_flag : number ;
}

declare interface ro3_PvpKFPaiweiEnemyReq {
}

declare interface ro3_PvpKFPaiweiEnemyResp {
	result : ro3_GeneralRet ;
	enemy : ro3_SnapRole ;
	level : number ;
	star : number ;
}

declare interface ro3_YmirspaceMatchRole {
	uid : string ;
	nickname : string ;
	image_id : number ;
	power : number ;
	prepare : boolean ;
	owner : boolean ;
	fight_count : number ;
	node_name : string ;
}

declare interface ro3_YmirspaceMatchRoom {
	guid : number ;
	roles : ro3_YmirspaceMatchRole[] ;
	start_match : boolean ;
	start_fight : boolean ;
	level : number ;
	next_publishtime : number ;
}

declare interface ro3_YmirspaceMatchRoomSyncNotify {
	room : ro3_YmirspaceMatchRoom ;
}

declare interface ro3_YmirspaceMatchRoomSyncRemoveNotify {
}

declare interface ro3_YmirspaceMatchRoomSyncKickOutNotify {
}

declare interface ro3_YmirspaceMatchEnterReq {
	level : number ;
}

declare interface ro3_YmirspaceMatchEnterResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	room : ro3_YmirspaceMatchRoom ;
}

declare interface ro3_YmirspaceMatchSelectLevelReq {
	level : number ;
}

declare interface ro3_YmirspaceMatchSelectLevelResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	room : ro3_YmirspaceMatchRoom ;
}

declare interface ro3_YmirspaceMatchInviteReq {
	uid : string ;
}

declare interface ro3_YmirspaceMatchInviteResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceMatchInviteNotify {
	room : ro3_YmirspaceMatchRoom ;
}

declare interface ro3_YmirspaceMatchLeaveReq {
}

declare interface ro3_YmirspaceMatchLeaveResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceMatchJoinReq {
	guid : number ;
}

declare interface ro3_YmirspaceMatchJoinResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	room : ro3_YmirspaceMatchRoom ;
}

declare interface ro3_YmirspaceMatchPrepareReq {
	prepare : boolean ;
}

declare interface ro3_YmirspaceKickOutReq {
	uid : string ;
}

declare interface ro3_YmirspaceKickOutResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceMatchPrepareResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	prepare : boolean ;
}

declare interface ro3_YmirspaceMatchStartBattleReq {
}

declare interface ro3_YmirspaceMatchStartBattleResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceMatchStartMatchReq {
	cancel : boolean ;
	level : number ;
}

declare interface ro3_YmirspaceMatchStartMatchResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceFightRoleSnap {
	side : number ;
	uid : string ;
	nickname : string ;
	image_id : number ;
}

declare interface ro3_YmirspaceMatchJoinBattleNotify {
	room_id : number ;
	guid : string ;
	snaps : ro3_YmirspaceFightRoleSnap[] ;
}

declare interface ro3_YmirspaceGetInfoReq {
}

declare interface ro3_YmirspaceGetInfoResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	season : number ;
	like : number ;
	like_reward : number ;
	liked : number ;
	liked_reward : number ;
	total_challenge : number ;
	total_challenge_reward : number ;
	fight_count : number ;
	fight_count_extra : number ;
	fight_count_extra_max : number ;
}

declare interface ro3_YmirspaceGetMatchRoomInfosReq {
	guids : number[] ;
}

declare interface ro3_YmirspaceGetMatchRoomInfosResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rooms : ro3_YmirspaceMatchRoom[] ;
}

declare interface ro3_YmirspaceShopGetReq {
}

declare interface ro3_YmirspaceShopGetResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	items : ro3_YmirspaceShopItem[] ;
}

declare interface ro3_YmirspaceShopBuyReq {
	config_id : number ;
	count : number ;
}

declare interface ro3_YmirspaceShopBuyResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_YmirspaceLikeReq {
	guid : string ;
	uid : string ;
}

declare interface ro3_YmirspaceLikeResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspaceGetStageRewardReq {
	config_id : number ;
	type : number ;
}

declare interface ro3_YmirspaceGetStageRewardResp {
	result : ro3_GeneralRet ;
	error_code : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_YmirspacePublishRoomReq {
}

declare interface ro3_YmirspacePublishRoomResp {
	result : ro3_GeneralRet ;
	error_code : number ;
}

declare interface ro3_YmirspacePublishRoomNotify {
	room : ro3_YmirspaceMatchRoom ;
	snap : ro3_SnapRole ;
}

declare interface ro3_ActivityTimeListReq {
}

declare interface ro3_ActivityTimeListResp {
	result : ro3_GeneralRet ;
	error : number ;
	seize_info : ro3_SeizeResourceActivityInfo ;
}

declare interface ro3_SeizeResourceGetActivityInfoReq {
}

declare interface ro3_SeizeResourceGetActivityInfoResp {
	result : ro3_GeneralRet ;
	error : number ;
	seize_info : ro3_SeizeResourceActivityInfo ;
	gamer_data : ro3_SeizeResourceGamerData ;
}

declare interface ro3_SeizeResourceOccupyResourceReq {
	resource_id : number ;
}

declare interface ro3_SeizeResourceOccupyResourceResp {
	result : ro3_GeneralRet ;
	error : number ;
	activity_info : ro3_SeizeResourceActivityInfo ;
	gamer_data : ro3_SeizeResourceGamerData ;
}

declare interface ro3_SeizeResourceNewRobbedRecordNotify {
}

declare interface ro3_SeizeResourceRobRecordListReq {
}

declare interface ro3_SeizeResourceRobRecordListResp {
	result : ro3_GeneralRet ;
	error : number ;
	record_list : ro3_ResourceRobRecord[] ;
	has_new : number ;
}

declare interface ro3_SeizeResourceReadRobRecordReq {
}

declare interface ro3_SeizeResourceReadRobRecordResp {
	result : ro3_GeneralRet ;
	error : number ;
}

declare interface ro3_SeizeResourceBuyRevengeNumReq {
	num : number ;
}

declare interface ro3_SeizeResourceBuyRevengeNumResp {
	result : ro3_GeneralRet ;
	error : number ;
	gamer_data : ro3_SeizeResourceGamerData ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupEnterReq {
	shop_id : number ;
}

declare interface ro3_GroupEnterResp {
	result : ro3_GeneralRet ;
	snap_list : ro3_GroupSnap[] ;
	applygroupids : number[] ;
	group : ro3_Group ;
	data : ro3_GroupHuntData ;
	group_pvp_info : ro3_GroupPvpInfo ;
	stage_cnt1 : number ;
	stage_cnt2 : number ;
	group_list1 : ro3_GroupPvpData[] ;
	group_list2 : ro3_GroupPvpData[] ;
	group_winner1 : ro3_GroupPvpData ;
	group_winner2 : ro3_GroupPvpData ;
	shop : ro3_ShopCell ;
	pve_group_val : number ;
	self_group_pve_val : number ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
}

declare interface ro3_GroupDailyRankReq {
}

declare interface ro3_GroupDailyRankResp {
	result : ro3_GeneralRet ;
	daily_rank : ro3_GroupDailyRank ;
}

declare interface ro3_GroupDailyRankNotiFy {
	daily_rank : ro3_GroupDailyRank ;
}

declare interface ro3_GroupGetReq {
}

declare interface ro3_GroupGetResp {
	result : ro3_GeneralRet ;
	group : ro3_Group ;
	data : ro3_GroupHuntData ;
}

declare interface ro3_GroupListReq {
	type : number ;
}

declare interface ro3_GroupListResp {
	result : ro3_GeneralRet ;
	snap_list : ro3_GroupSnap[] ;
	applygroupids : number[] ;
}

declare interface ro3_GroupCreateReq {
	level : number ;
	name : string ;
}

declare interface ro3_GroupCreateResp {
	result : ro3_GeneralRet ;
	err_code : number ;
	rsync : ro3_GeneralRsync ;
	group : ro3_GroupRole ;
}

declare interface ro3_GroupApplyReq {
	groupid : number ;
}

declare interface ro3_GroupApplyResp {
	result : ro3_GeneralRet ;
	applygroupids : number[] ;
	group : ro3_GroupRole ;
	code : number ;
}

declare interface ro3_GroupApplyOneKeyReq {
	group_ids : number[] ;
}

declare interface ro3_GroupApplyOneKeyResp {
	result : ro3_GeneralRet ;
	applygroupids : number[] ;
	group : ro3_GroupRole ;
	code : number ;
}

declare interface ro3_GroupAcceptReq {
	username : string ;
	ttype : number ;
}

declare interface ro3_GroupAcceptResp {
	result : ro3_GeneralRet ;
	code : number ;
	apply_list : ro3_GroupApplyInfo[] ;
	role_list : ro3_GroupMember[] ;
	snap : ro3_GroupSnap ;
}

declare interface ro3_GroupKickReq {
	username : string ;
}

declare interface ro3_GroupKickResp {
	result : ro3_GeneralRet ;
	code : number ;
	role_list : ro3_GroupMember[] ;
	logs : ro3_GroupLog[] ;
}

declare interface ro3_GroupExitReq {
	groupid : number ;
}

declare interface ro3_GroupExitResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GroupNoticeReq {
	notice : string ;
}

declare interface ro3_GroupNoticeResp {
	result : ro3_GeneralRet ;
	code : number ;
	notice : string ;
}

declare interface ro3_GroupChangePosReq {
	uid : string ;
	pos : number ;
}

declare interface ro3_GroupChangePosResp {
	result : ro3_GeneralRet ;
	code : number ;
	role_list : ro3_GroupMember[] ;
	logs : ro3_GroupLog[] ;
}

declare interface ro3_GroupBuildReq {
	ttype : number ;
}

declare interface ro3_GroupBuildResp {
	result : ro3_GeneralRet ;
	code : number ;
	data : ro3_GroupCommonData ;
	snap : ro3_GroupSnap ;
	logs : ro3_GroupLog[] ;
}

declare interface ro3_GroupLimitReq {
	ttype : number ;
	power : number ;
}

declare interface ro3_GroupLimitResp {
	result : ro3_GeneralRet ;
	snap : ro3_GroupSnap ;
}

declare interface ro3_GroupContributeReq {
	id : number ;
}

declare interface ro3_GroupContributeResp {
	result : ro3_GeneralRet ;
	data : ro3_GroupCommonData ;
	role_list : ro3_GroupMember[] ;
	rsync : ro3_GeneralRsync ;
	group : ro3_GroupRole ;
	logs : ro3_GroupLog[] ;
}

declare interface ro3_GroupAttackLeaderReq {
}

declare interface ro3_GroupAttackLeaderResp {
	result : ro3_GeneralRet ;
	code : number ;
	role_list : ro3_GroupMember[] ;
}

declare interface ro3_GroupSkillLvupReq {
	heroid : number ;
	pos : number ;
	tar_level : number ;
}

declare interface ro3_GroupSkillLvupResp {
	result : ro3_GeneralRet ;
	hero : ro3_Hero ;
}

declare interface ro3_GroupTreeLvupReq {
	count : number ;
}

declare interface ro3_GroupTreeLvupResp {
	result : ro3_GeneralRet ;
	tree : ro3_GroupTree ;
	count : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupFeedBossReq {
	stage_id : number ;
	count : number ;
}

declare interface ro3_GroupFeedBossResp {
	result : ro3_GeneralRet ;
	boss_list : ro3_GroupBoss[] ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupSummonReq {
	stage_id : number ;
}

declare interface ro3_GroupSummonResp {
	result : ro3_GeneralRet ;
	code : number ;
	boss_list : ro3_GroupBoss[] ;
}

declare interface ro3_GroupPveDailyRankReq {
	stage_id : number ;
}

declare interface ro3_GroupPveDailyRankResp {
	result : ro3_GeneralRet ;
	daily_rank : ro3_GroupPveDailyRankData[] ;
	code : number ;
}

declare interface ro3_GroupPveRewardReq {
	stage_id : number ;
}

declare interface ro3_GroupPveRewardResp {
	result : ro3_GeneralRet ;
	group : ro3_GroupRole ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupPveSweepReq {
	stage_id : number ;
}

declare interface ro3_GroupPveSweepResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_GroupPveGroupRankReq {
	stage_id : number ;
}

declare interface ro3_GroupPveGroupRankResp {
	result : ro3_GeneralRet ;
	code : number ;
	ranks : ro3_GroupRankCell[] ;
	group_pve_rank : ro3_GroupPveRank[] ;
	rank_stageid : number ;
}

declare interface ro3_GroupBossDataReq {
}

declare interface ro3_GroupBossDataResp {
	result : ro3_GeneralRet ;
	code : number ;
	boss_list : ro3_GroupBoss[] ;
}

declare interface ro3_GroupBossDataNotify {
	groupid : number ;
	boss_list : ro3_GroupBoss[] ;
}

declare interface ro3_GroupRedFlagReq {
	red_flag : number ;
}

declare interface ro3_GroupRedFlagResp {
	result : ro3_GeneralRet ;
}

declare interface ro3_GroupAcceptNotify {
	code : number ;
	groupid : number ;
}

declare interface ro3_MedalLvUpReq {
}

declare interface ro3_MedalLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	medal_info : ro3_MedalInfo ;
}

declare interface ro3_MedalLvUpNewReq {
}

declare interface ro3_MedalLvUpNewResp {
	result : ro3_GeneralRet ;
	error : number ;
	medal_info : ro3_MedalInfoNew ;
}

declare interface ro3_ThingSkillInfo {
	thing_skill_list : ro3_ThingSkillInfo_ThingSkillCell[] ;
}

declare interface ro3_ThingSkillInfo_ThingSkillCell {
	index : number ;
	thing_skill_id : number ;
	level : number ;
}

declare interface ro3_ThingsMarkInfo {
	level : number ;
	exp : number ;
	skill_list : ro3_ThingsMarkInfo_ThingsMarkSkillCell[] ;
}

declare interface ro3_ThingsMarkInfo_ThingsMarkSkillCell {
	thing_mark_skill_id : number ;
	level : number ;
}

declare interface ro3_ThingsInfo {
	thing_list : number[] ;
	is_merged : number ;
	level : number ;
	is_shengliguanzhu : number ;
	skill_info : ro3_ThingSkillInfo ;
	mark_info : ro3_ThingsMarkInfo ;
}

declare interface ro3_ThingsStageInfo {
	last_challenge_time : number ;
	today_challenge_times : number ;
	can_get_reward : number ;
}

declare interface ro3_VIPGift {
	level : number ;
	time : number ;
}

declare interface ro3_DayidInfo {
	mlastddayid : number ;
	ylastdayid : number ;
	month_left_num : number ;
	year_left_num : number ;
}

declare interface ro3_CardBuytimes {
	week : number ;
	month : number ;
	year : number ;
}

declare interface ro3_CardInfo {
	is_month_end : number ;
	is_year_end : number ;
	month_start_time : number ;
	month_end_dayid : number ;
	month_left_day : number ;
	year_start_time : number ;
	year_end_dayid : number ;
	year_left_day : number ;
	month_add_bag : number ;
	year_add_bag : number ;
	buytimes : ro3_CardBuytimes ;
}

declare interface ro3_VipActData {
	begin_time : number ;
	reward1_time : number ;
	reward2_time : number ;
	reward3_time : number ;
	reward7 : number[] ;
	begin_time7 : number ;
}

declare interface ro3_XianShiInfo {
	productid : number ;
	num : number ;
}

declare interface ro3_XianShiRoleInfo {
	xspinfo : ro3_XianShiInfo[] ;
	timestamp : number ;
}

declare interface ro3_VIPInfo {
	vip_level : number ;
	vip_score : number ;
	first_time : number ;
	end_time : number ;
	total_day : number ;
	dayid : ro3_DayidInfo ;
	vip_no : string ;
	vip_gift : ro3_VIPGift[] ;
	card_info : ro3_CardInfo ;
	is_get_first : number ;
	doubletimes : number ;
	vip_act_data : ro3_VipActData ;
	show_time : number ;
	vip_level_extra : number ;
	vip_level_extra_gift : ro3_VIPGift[] ;
	vip_extra_score : number ;
	xsrinfo : ro3_XianShiRoleInfo ;
}

declare interface ro3_TaskCondition {
	ctype : number ;
	cvalue : number ;
	complete : number ;
}

declare interface ro3_TaskCell {
	task_id : number ;
	got_time : number ;
	open_cond_list : ro3_TaskCondition[] ;
	finish_cond_list : ro3_TaskCondition[] ;
	state : number ;
	finish_time : number ;
	param : number ;
	expired_time : number ;
	version : number ;
}

declare interface ro3_CanAcceptHideTaskInfo {
	task_id : number ;
	expired_time : number ;
}

declare interface ro3_HideTaskInfo {
	hide_list : ro3_TaskCell[] ;
	can_accept_list : ro3_CanAcceptHideTaskInfo[] ;
	last_trigger_time : number ;
	trigger_hide_task_times : number ;
	perday_hide_list : ro3_HideTaskInfo_PerdayHideTaskCell[] ;
}

declare interface ro3_HideTaskInfo_PerdayHideTaskCell {
	task_pool_id : number ;
	task_accept_time : number ;
}

declare interface ro3_TaskVersion {
	task_list_version : number ;
	function_list_version : number ;
	hide_task_version : number ;
	daily_list_version : number ;
	loop_list_version : number ;
	loop_reward_version : number ;
}

declare interface ro3_TaskInfo {
	task_list : ro3_TaskCell[] ;
	finished_list : ro3_TaskCell[] ;
	function_list : ro3_TaskCell[] ;
	hide_task : ro3_HideTaskInfo ;
	daily_list : ro3_TaskCell[] ;
	loop_list : ro3_TaskCell[] ;
	loop_reward : ro3_TaskCell[] ;
	last_loop_index : number ;
	last_refresh_loop_time : number ;
	trilogy_task_start_time : number ;
	last_refresh_trilogy_time : number ;
	trilogy_mini_flag : boolean ;
	trilogy_end_flag : boolean ;
	last_refresh_daily_time : number ;
	version : number ;
	taskversion : ro3_TaskVersion ;
	trilogy_part : number ;
}

declare interface ro3_Head {
	id : number ;
	type : number ;
	active : number ;
	active_end_time : number ;
}

declare interface ro3_BlessGiftBuyReq {
	config : number ;
}

declare interface ro3_BlessGiftBuyResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	config : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_DollSystemActivateReq {
}

declare interface ro3_DollSystemActivateResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	doll_info : ro3_GamerDollInfo ;
}

declare interface ro3_DollLvUpReq {
	ttype : number ;
	doll_id : number ;
	equip_id : number ;
	is_one_key : boolean ;
	is_diamond : boolean ;
}

declare interface ro3_DollLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	doll_info : ro3_GamerDollInfo ;
	activate_suit_id : number[] ;
}

declare interface ro3_DollAdLvUpReq {
	doll_id : number ;
	to_lv : number ;
}

declare interface ro3_DollAdLvUpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	doll_info : ro3_GamerDollInfo ;
}

declare interface ro3_DollAdLvUpPlusReq {
	entity_list : ro3_DollAdLvUpPlusReq_Entity[] ;
}

declare interface ro3_DollAdLvUpPlusReq_Entity {
	doll_id : number ;
	to_lv : number ;
}

declare interface ro3_DollAdLvUpPlusResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	doll_info : ro3_GamerDollInfo ;
}

declare interface ro3_DollFbDropReq {
	count : number ;
}

declare interface ro3_DollFbDropResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	rewards : ro3_Item[] ;
}

declare interface ro3_XinFa {
	guid : number ;
	id : number ;
	star : number ;
	num : number ;
}

declare interface ro3_XinFaPosi {
	posi : number ;
	xinfa : ro3_XinFa ;
}

declare interface ro3_XinFaData {
	lv : number ;
	data : ro3_XinFaPosi[] ;
}

declare interface ro3_XinFaList {
	xinfa1 : ro3_XinFaData ;
	xinfa2 : ro3_XinFaData ;
	xinfa3 : ro3_XinFaData ;
	xinfa4 : ro3_XinFaData ;
}

declare interface ro3_Xingzuo {
	id : number ;
	level : number ;
	skill_level : number ;
}

declare interface ro3_XingzuoInfo {
	xing_zuo_list : ro3_Xingzuo[] ;
	display_id : number ;
}

declare interface ro3_HeroPowerOpenReq {
}

declare interface ro3_HeroPowerOpenResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
}

declare interface ro3_HeroPowerActiveReq {
	id : number ;
}

declare interface ro3_HeroPowerActiveResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
	slots : ro3_HeroPowerSlot[] ;
}

declare interface ro3_HeroPowerStarReq {
	id : number ;
	op : number ;
}

declare interface ro3_HeroPowerStarResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
}

declare interface ro3_HeroPowerLevelReq {
	id : number ;
	op : number ;
}

declare interface ro3_HeroPowerLevelResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
}

declare interface ro3_HeroPowerBuzhenReq {
	slots : ro3_HeroPowerSlot[] ;
}

declare interface ro3_HeroPowerBuzhenResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_HeroPowerBuzhenActiveReq {
	slot_act_idx : number ;
}

declare interface ro3_HeroPowerBuzhenActiveResp {
	result : ro3_GeneralRet ;
	errcode : number ;
}

declare interface ro3_HeroPowerQianpanUnlockReq {
	hpid : number ;
	id : number ;
}

declare interface ro3_HeroPowerQianpanUnlockResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
}

declare interface ro3_HeroPowerQianpanLevelReq {
	hpid : number ;
	id : number ;
}

declare interface ro3_HeroPowerQianpanLevelResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
}

declare interface ro3_HeroPowerQianbanRewardReq {
	hpid : number ;
	id : number ;
}

declare interface ro3_HeroPowerQianbanRewardResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	hero_power : ro3_HeroPower ;
}

declare interface ro3_Notify {
	type : string ;
	buffer : string ;
}

declare interface ro3_NetMsg {
	cmd : number ;
	cmd_no : number ;
	uid : string ;
	buffer : string ;
	notifies : ro3_Notify[] ;
}

declare interface ro3_MiniGroupApplyInfo {
	uid : string ;
	nickname : string ;
	apply_time : number ;
	image : number ;
	vip_lv : number ;
	power : number ;
}

declare interface ro3_MiniGroupLog {
	log_type : number ;
	opr_uid : string ;
	opr_nickname : string ;
	opr_position : number ;
	int_param : number[] ;
	str_param : string[] ;
	opr_time : number ;
}

declare interface ro3_MiniGroupSnap {
	mini_group_uid : number ;
	mini_group_name : string ;
	leader : string ;
	level : number ;
	max_member : number ;
	cur_member : number ;
	min_power : number ;
	total_power : number ;
	last_update_time : number ;
	allow_flag : number ;
	create_time : number ;
}

declare interface ro3_MiniGroupStage {
	stage_id : number ;
	first_reward : number ;
	star : number ;
}

declare interface ro3_MiniGroupFortress {
	fortress_id : number ;
	stages : ro3_MiniGroupStage[] ;
	reward_got_ids : number ;
}

declare interface ro3_MiniGroupFight {
	fortress : ro3_MiniGroupFortress[] ;
	fight_count : number ;
	dayid : number ;
}

declare interface ro3_MiniGroupRole {
	mini_group_uid : number ;
	mini_group_name : string ;
	anti_time : number ;
	online : number ;
	apply_mini_group_ids : number[] ;
	addition_reward_next_time : number ;
	talent : ro3_MiniGroupRole_Talent[] ;
	help_cnt : number ;
	have_help_mem_uid : string[] ;
	bonus : ro3_MiniGroupRole_Bonus[] ;
	fight : ro3_MiniGroupFight ;
}

declare interface ro3_MiniGroupRole_Talent {
	id : number ;
	lv : number ;
}

declare interface ro3_MiniGroupRole_Bonus {
	id : number ;
	lv : number ;
}

declare interface ro3_MiniGroupMember {
	uid : string ;
	nickname : string ;
	pos : number ;
	image : number ;
	join_time : number ;
	vip_lv : number ;
	power : number ;
	last_login_time : number ;
	online : number ;
	risk_point : number ;
	outdoor_stage : number ;
	expedition_stage : number ;
	sky_arena_point : number ;
	login_days : number ;
	guild_uid : number ;
	guild_name : string ;
	last_power : number ;
	last_power_update_time : number ;
}

declare interface ro3_MiniGroup {
	uid : number ;
	name : string ;
	mems : ro3_MiniGroupMember[] ;
	snap : ro3_MiniGroupSnap ;
	apply_list : ro3_MiniGroupApplyInfo[] ;
	logs : ro3_MiniGroupLog[] ;
}

declare interface ro3_AutoPVE {
	outdoor_idx : number ;
	pve_reward : number ;
	pve_stage_idx : number ;
	pve_star_idx : number ;
	outdoor_boss_reduction_cnt : number ;
	outdoor_boss_fail_timestamp : number ;
	pve_star_version : number ;
}

declare interface ro3_PveZoneCell {
	stage_id : number ;
	pass_stamp : number ;
	reward_flag : number ;
	get_back : number ;
	count : number ;
	get_back_free : number ;
	star : number ;
	exp : number ;
}

declare interface ro3_PveZone {
	material_zone : ro3_PveZoneCell[] ;
}

declare interface ro3_PveShenjian {
	stage_id : number ;
	pass_stamp : number ;
	reward_flag : number ;
}

declare interface ro3_PveFlags {
	first_exp_zone : number ;
	first_boss_1 : number ;
	first_boss_2 : number ;
}

declare interface ro3_PveKid {
	stage_id : number ;
}

declare interface ro3_PveCorridor {
	cur_level : number ;
	stage_id : number ;
	hp : number[] ;
	attribs : ro3_PveCorridor_attrib_list[] ;
	attribs_once : ro3_PveCorridor_attrib_list[] ;
	relive_diamond : number ;
	relive_item : number ;
	reflesh_stamp : number ;
}

declare interface ro3_PveCorridor_attrib_list {
	id : number ;
	value : number ;
}

declare interface ro3_PVE {
	autopve : ro3_AutoPVE ;
	pve_zone : ro3_PveZone ;
	last_dayid : number ;
	shenjian : ro3_PveShenjian ;
	next_refresh_time : number ;
	last_stage_id : number ;
	flags : ro3_PveFlags ;
	kill_guaji_monster_total : number ;
	pve_kid_list : ro3_PveKid[] ;
	pve_corridor : ro3_PveCorridor ;
	reflesh_stamp : number ;
}

declare interface ro3_ZhuanShengLvupReq {
}

declare interface ro3_ZhuanShengLvupResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	zx_lv : number ;
	zx_exp : number ;
	hero_list : ro3_HeroData ;
}

declare interface ro3_ZhuanShengGenExpReq {
	tp : number ;
	zshengexp_itemid : number ;
}

declare interface ro3_ZhuanShengGenExpResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zx_exp : number ;
	level : number ;
	exp : number ;
	zhuansheng_info : ro3_ZhuanShengInfo ;
}

declare interface ro3_ZhuanShengBuyExpItemReq {
	tp : number ;
	num : number ;
}

declare interface ro3_ZhuanShengBuyExpItemResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zhuansheng_info : ro3_ZhuanShengInfo ;
}

declare interface ro3_ZhuanShengGuideReq {
}

declare interface ro3_ZhuanShengGuideResp {
	result : ro3_GeneralRet ;
	zhuansheng_guide : ro3_ZhuanShengGuideInfo ;
}

declare interface ro3_ZhuanShengGuideRewardReq {
	reward : number ;
}

declare interface ro3_ZhuanShengGuideRewardResp {
	result : ro3_GeneralRet ;
	errcode : number ;
	rsync : ro3_GeneralRsync ;
	zhuansheng_guide : ro3_ZhuanShengGuideInfo ;
}

declare interface ro3_PBVersion {
	number_value : number ;
}

declare interface ro3_BattleFront {
	conditions : number[] ;
	active : number ;
	dayid : number ;
	cur_stage_id : number ;
}

declare interface ro3_Mecha {
	id : number ;
	lv : number ;
	exp : number ;
}

declare interface ro3_MechaEquipmentDebris {
	id : number ;
	active : number ;
}

declare interface ro3_MechaEquipment {
	id : number ;
	mecha_equipment_debris : ro3_MechaEquipmentDebris[] ;
	active : number ;
}

declare interface ro3_CDKeyReq {
	cdkey : string ;
}

declare interface ro3_CDKeyResp {
	result : ro3_GeneralRet ;
	cdkey : string ;
	err : ro3_GeneralError ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_RedPacketCell {
	num : number ;
	uid : string ;
	nick : string ;
}

declare interface ro3_RedPacket {
	id : number ;
	groupid : number ;
	end_time : number ;
	cells : ro3_RedPacketCell[] ;
}

declare interface ro3_RedPacketList {
	list : ro3_RedPacket[] ;
}

declare enum ro3_ResourcePointType {
	S = 5 ,
	A = 4 ,
	B = 3 ,
	C = 2 ,
	D = 1 
}

declare interface ro3_ResourceRobRecord {
	guid : number ;
	rob_type : number ;
	uid : string ;
	nick : string ;
	resource_id : number ;
	time : number ;
	win : number ;
	item_list : ro3_Item[] ;
	is_revenge_win : number ;
	snap : ro3_SnapRole ;
}

declare interface ro3_ResourcePoint {
	id : number ;
	ttype : number ;
	total_number : number ;
	occupy_number : number ;
	produce_item : ro3_Item ;
	rob_item : ro3_Item ;
	rob_num : number ;
	occupiers : ro3_SnapRole[] ;
}

declare interface ro3_SeizeResourceActivityInfo {
	season_id : number ;
	start_time : number ;
	end_time : number ;
	step : number ;
	resource_points : ro3_ResourcePoint[] ;
}

declare interface ro3_SeizeResourceGamerData {
	season_id : number ;
	is_reward : boolean ;
	occupy_resource_id : number ;
	occupy_start_time : number ;
	rob_num : number ;
	robbed_num : number ;
	revenge_cnt : number ;
	buy_revenge_cnt : number ;
	rob_gamers_uid : string[] ;
	next_record_guid : number ;
	has_new : number ;
	record_list : ro3_ResourceRobRecord[] ;
}

declare interface ro3_BattleInfo {
	guid : number ;
	stage_id : number ;
}

declare interface ro3_UserRecord {
	uid : string ;
	timestamp : number ;
}

declare interface ro3_OpenInfo {
	ID : number ;
	opentime : number ;
	endtime : number ;
	weekday : number ;
	isend : number ;
}

declare interface ro3_HuntBoliReward {
	index : number ;
	percent : number ;
	issend : number ;
}

declare interface ro3_ActivityHuntBoli {
	info : ro3_OpenInfo ;
	partinfo : ro3_HuntBoliReward[] ;
	battleinfo : ro3_BattleInfo ;
	luckyinfo : ro3_HuntBoliReward[] ;
}

declare interface ro3_CrazyBoliUserinfo {
	stage_id : number ;
	userinfo : ro3_UserRecord[] ;
	isend : number ;
}

declare interface ro3_ActivityCrazyBoli {
	info : ro3_OpenInfo ;
	records : ro3_CrazyBoliUserinfo[] ;
}

declare interface ro3_ActivityTimeAll {
	huntboli : ro3_ActivityHuntBoli ;
	crazyboli : ro3_ActivityCrazyBoli ;
}

declare interface ro3_ActTimeUinfo {
	stage_id : number ;
	timestamp : number ;
	opentime : number ;
	isend : number ;
	records : ro3_CrazyBoliUserinfo[] ;
}

declare interface ro3_ActivityTimeUserInfo {
	crazyuinfo : ro3_ActTimeUinfo ;
	huntboliuinfo : ro3_ActTimeUinfo ;
	seize_resource : ro3_ActTimeUinfo ;
	monster_siege : ro3_ActTimeUinfo ;
	time_pvp : ro3_ActTimeUinfo ;
}

declare interface ro3_ActivityTimeUserJoinInfo {
	activity_type : number ;
	last_start_time : number ;
	num : number ;
}

declare interface ro3_ActivityTimeUserJoinInfos {
	join_infos : ro3_ActivityTimeUserJoinInfo[] ;
}

declare interface ro3_Move {
	dest : ro3_Move_Pos ;
	type : number ;
}

declare interface ro3_Move_Pos {
	x : number ;
	y : number ;
}

declare interface ro3_Buff {
	buff_id : number ;
	start_frame : number ;
	end_frame : number ;
}

declare interface ro3_Attack {
	hit_list : ro3_Attack_Hit[] ;
	skill_id : number ;
	point : number ;
	attack_guid : number ;
	x : number ;
	y : number ;
	speed_plus : number ;
	elf_cid : number ;
	pre_attack : number ;
	delay : number ;
}

declare interface ro3_Attack_Hit {
	target : number ;
	value : number ;
	hp : number ;
	point : number ;
	type : number ;
	shield : number ;
	x : number ;
	y : number ;
	buff_list : ro3_Buff[] ;
	ext_type : number ;
	l_kill : number ;
	diff_hp : number ;
	diff_shield : number ;
}

declare interface ro3_Join {
	relive : number ;
	x : number ;
	y : number ;
	buff_list : ro3_Buff[] ;
}

declare interface ro3_Drop {
	show_list : ro3_Drop_item[] ;
	item_list : ro3_Drop_item[] ;
}

declare interface ro3_Drop_item {
	guid : number ;
	id : number ;
	num : number ;
	x : number ;
	y : number ;
}

declare interface ro3_Pick {
	guid : number ;
	x : number ;
	y : number ;
}

declare interface ro3_PickFinished {
	x : number ;
	y : number ;
}

declare interface ro3_ShowData {
	equip : number[] ;
	avatar : number[] ;
	wings : number[] ;
	title : number ;
	avatar_outtime : number[] ;
}

declare interface ro3_FightRsync {
	frames : ro3_FightRsync_FightFrame[] ;
	team_list : ro3_FightRsync_TeamSnap[] ;
	debug_time : number ;
	shilian_data : ro3_FightRsync_Shilian ;
	emblem_data : ro3_FightRsync_Emblem ;
	frame_dt : number ;
	battle_idx : number ;
	need_rsync : number ;
	group_role_data : ro3_FightRsync_GroupPvpRoleData[] ;
	group_data : ro3_FightRsync_GroupPvpData[] ;
	stage_id : number ;
	boli_role_infos : ro3_FightRsync_GroupPvpRoleData[] ;
	monster_siege_role_data : ro3_FightRsync_GroupPvpRoleData[] ;
	monster_siege_monster_hp : number ;
	monster_siege_monster_maxhp : number ;
	time_pvp_role_data : ro3_FightRsync_GroupPvpRoleData[] ;
	monster_show : number ;
	limit_time : number ;
	create_stamp : number ;
	side_scores : number[] ;
	battle_statistics : ro3_FightRsync_GroupPvpRoleData[] ;
	finish_condition_state : number[] ;
}

declare interface ro3_FightRsync_FightFrame {
	units : ro3_FightRsync_FightFrame_Unit[] ;
	frame_idx : number ;
	finish_flag : number ;
	teams : ro3_FightRsync_FightFrame_Team[] ;
}

declare interface ro3_FightRsync_FightFrame_Unit {
	guid : number ;
	move : ro3_Move ;
	attack : ro3_Attack ;
	join : ro3_Join ;
	drop : ro3_Drop ;
	pick : ro3_Pick ;
	pickfinished : ro3_PickFinished ;
	cur_posi : ro3_Move ;
	exit : number ;
	buff : ro3_Buff ;
}

declare interface ro3_FightRsync_FightFrame_Team {
	uid : string ;
	hj_power : number ;
	belong : string ;
	exit : number ;
	target : string ;
	global_flag : number ;
}

declare interface ro3_FightRsync_TeamSnap {
	uid : string ;
	snap_list : ro3_FightRsync_TeamSnap_RoleSnap[] ;
	exit : number ;
	nickname : string ;
	group : ro3_FightRsync_TeamSnap_Group ;
	join_frame : number ;
	relive_dir : number ;
	helper : ro3_FightRsync_TeamSnap_Helper ;
	reduce_help : number ;
	total_hit : number ;
	total_kill : number ;
	relive_time : number ;
	belong : string ;
	status : number ;
	attack_list : string[] ;
	team_info : ro3_FightRsync_TeamSnap_TeamInfo ;
}

declare interface ro3_FightRsync_TeamSnap_RoleSnap {
	guid : number ;
	cid : number ;
	hp : number ;
	maxhp : number ;
	shield : number ;
	maxshield : number ;
	x : number ;
	y : number ;
	mid : number ;
	_guid : number ;
	equip : number[] ;
	avatar : number[] ;
	avatar_outtime : number[] ;
	wings : number[] ;
	buff_list : ro3_Buff[] ;
	die_count : number ;
	title : number ;
	standby : number ;
	master : number ;
	state : number ;
	exit : number ;
}

declare interface ro3_FightRsync_TeamSnap_Group {
	gid : number ;
	g_name : string ;
}

declare interface ro3_FightRsync_TeamSnap_Helper {
	uid : string ;
	nickname : string ;
	imageid : number ;
	type : number ;
}

declare interface ro3_FightRsync_TeamSnap_TeamInfo {
	team_id : number ;
	team_name : string ;
	kill_count : number ;
}

declare interface ro3_FightRsync_Shilian {
	last_stamp : number ;
	nickname : string ;
	num : number ;
	start_stamp : number ;
}

declare interface ro3_FightRsync_Emblem {
	score : number ;
	skills : number[] ;
}

declare interface ro3_FightRsync_GroupPvpRoleData {
	uid : string ;
	nickname : string ;
	image : number ;
	guild : number ;
	jifen : number ;
	t_kill : number ;
	l_kill : number ;
	time_stamp : number ;
	t_hit : number ;
	t_kill_gamer : number ;
	t_kill_monster : number ;
	t_hit_with_invincible : number ;
	camp : number ;
	t_things_hit : number ;
	t_things_hit_cnt : number ;
}

declare interface ro3_FightRsync_GroupPvpData {
	guild : number ;
	guild_name : string ;
	leader : string ;
	jifen : number ;
	time_stamp : number ;
	member_num : number ;
}

declare interface ro3_TrilogyRoleData {
	uid : string ;
	nickname : string ;
	t_hit : number ;
	time_stamp : number ;
	rank : number ;
}

declare interface ro3_TrilogyPart2BattleInfo {
	stage_id : number ;
	hp : number ;
	max_hp : number ;
	trilogy_part2_boss_role_data : ro3_TrilogyRoleData[] ;
}

declare interface ro3_Mail {
	ins_id : number ;
	type : number ;
	ttype : string ;
	tid : number ;
	sender : string ;
	title : string ;
	content : string ;
	gid : number ;
	reward_out : ro3_RsyncStruct[] ;
	read_flag : number ;
	reward_flag : number ;
	create_time : number ;
	read_time : number ;
	reward_time : number ;
	expiry_time : number ;
	active_time : number ;
	tempid : number ;
	content_params : ro3_Mail_ParamInfo[] ;
	where : number ;
	is_content1 : number ;
	fmt_title : string[] ;
	fmt_content : string[] ;
	fmt_foot : string[] ;
	reward : ro3_Mail_RewardInfo[] ;
	daily_limited_info : ro3_Mail_DailyLimitedInfo ;
}

declare interface ro3_Mail_ParamInfo {
	strvalue1 : string ;
	intvalue1 : number ;
}

declare interface ro3_Mail_RewardInfo {
	id_num : number[] ;
}

declare interface ro3_Mail_DailyLimitedInfo {
	type : number ;
	limit_value : number ;
}

declare interface ro3_MailList {
	mail : ro3_Mail[] ;
	global_id : number ;
	next_ins_id : number ;
	daily_limited_info : ro3_MailList_DailyLimitedInfo[] ;
}

declare interface ro3_MailList_DailyLimitedInfo {
	type : number ;
	day_id : number ;
	num : number ;
}

declare interface ro3_GlobalMail {
	mail : ro3_Mail ;
	begin_time : number ;
	end_time : number ;
	expiry_sec : number ;
	limit_level : number ;
	limit_reg_time : number ;
	limit_vip_level : number ;
	limit_achv : number[] ;
	limit_qudao : string ;
	qudao : string ;
	server_type : number ;
}

declare interface ro3_ZhuanShengInfo {
	reduce_lv_times : number ;
	normal_expitem_use_times : number ;
	senior_expitem_use_times : number ;
	last_operate_time : number ;
	is_get_reward : number ;
}

declare interface ro3_ZhuanShengGuideInfo {
	the_end_lv : number ;
	outdoor_flag : number ;
	reward_flag : number ;
	items_id : number ;
	the_end_time : number ;
	the_cd_end_time : number ;
	yinghun_count : number ;
}

declare interface ro3_RecommadInfo {
	id : number ;
	last_update_time : number ;
	buy : boolean ;
}

declare interface ro3_GoddessBressGift {
	gift_id : number ;
	buy : boolean ;
	type : number ;
	stage : number ;
	vip_level : number ;
	real_vip_level : number ;
}

declare interface ro3_GoddessBressStartGift {
	gift_id : number ;
	expiry_buy_time : number ;
	buy : boolean ;
	type : number ;
	stage : number ;
	vip_level : number ;
	real_vip_level : number ;
}

declare interface ro3_GoddessBressGiftInfo {
	gift_id : number ;
	last_update_time : number ;
	next_update_time : number ;
	expiry_buy_time : number ;
	recommad_info : ro3_RecommadInfo[] ;
	record_id : number ;
	start_gifts : ro3_GoddessBressStartGift[] ;
	front_gift : ro3_GoddessBressGift ;
}

declare interface ro3_RedpaperNotify {
	redpapers : ro3_Redpaper[] ;
}

declare interface ro3_RedpaperSnatchReq {
	rid : number ;
}

declare interface ro3_RedpaperSnatchResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	code : number ;
	money : number ;
	actual_money : number ;
	to_wallet_money : number ;
	records : ro3_RedpaperRecord[] ;
	redpaper : ro3_Redpaper ;
	data : ro3_RedpaperData ;
}

declare interface ro3_RedpaperWalletGetReq {
}

declare interface ro3_RedpaperWalletGetResp {
	result : ro3_GeneralRet ;
	rsync : ro3_GeneralRsync ;
	money : number ;
}

declare interface ro3_RedpaperListReq {
}

declare interface ro3_RedpaperListResp {
	result : ro3_GeneralRet ;
	redpapers : ro3_Redpaper[] ;
}

declare interface ro3_RedpaperQueryDataReq {
}

declare interface ro3_RedpaperQueryDataResp {
	result : ro3_GeneralRet ;
	data : ro3_RedpaperData ;
}

declare interface ro3_TaskListGetReq {
	type : number ;
}

declare interface ro3_TaskListGetResp {
	result : ro3_GeneralRet ;
	task_info : ro3_TaskInfo ;
}

declare interface ro3_TaskAcceptReq {
	task_id : number ;
}

declare interface ro3_TaskAcceptResp {
	result : ro3_GeneralRet ;
	new_task : ro3_TaskCell ;
	errcode : number ;
}

declare interface ro3_TaskRewardGetReq {
	task_id : number ;
	index : number ;
}

declare interface ro3_TaskRewardGetResp {
	result : ro3_GeneralRet ;
	task_cell : ro3_TaskCell ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	vip_info : ro3_VIPInfo ;
}

declare interface ro3_TaskNotify {
	ttype : number ;
	task_list : ro3_TaskCell[] ;
	can_accept_list : ro3_CanAcceptHideTaskInfo[] ;
}

declare interface ro3_TasksRewardGetReq {
	tasks : ro3_TasksRewardGetReq_TaskInfo[] ;
}

declare interface ro3_TasksRewardGetReq_TaskInfo {
	task_id : number ;
	index : number ;
}

declare interface ro3_TasksRewardGetResp {
	result : ro3_GeneralRet ;
	task_cell : ro3_TaskCell[] ;
	rsync : ro3_GeneralRsync ;
	errcode : number ;
	vip_info : ro3_VIPInfo ;
}

declare enum ro3_GeneralRet {
	OK = 0 ,
	FAIL = -1 ,
	ERROR = -2 ,
	EXIST = -3 ,
	DATA_LOCK = -4 
}

declare interface ro3_ItemRsync {
	item : ro3_Item ;
	cur_value : number ;
	xinfa : ro3_XinFa ;
	stigmata : ro3_GodWeaponStigmataCell ;
}

declare interface ro3_RsyncStruct {
	item : ro3_ItemRsync ;
	equip : ro3_Equip ;
	hero : ro3_Hero ;
	zhanwen : ro3_ZhanWen ;
	title : ro3_HeroTitle ;
	xinfa : ro3_XinFa ;
	elf_equip : ro3_ElfEquip ;
	equipcard : ro3_EquipCard ;
	expedition : ro3_Expedition ;
	head : ro3_Head ;
}

declare interface ro3_GeneralRsync {
	cost_list : ro3_RsyncStruct[] ;
	get_list : ro3_RsyncStruct[] ;
	show_list : ro3_Item[] ;
}

declare interface ro3_GeneralError {
	no : number ;
	msg : string ;
}

declare interface ro3_GeneralNotify {
	events : number[] ;
	guides : number[] ;
	heroskillopen : ro3_GeneralNotify_HeroSkillOpen ;
	lvup_notify : ro3_GeneralNotify_LevelUpNotify ;
	func_open : ro3_GeneralNotify_FunctionOpenNotify ;
	rsync : ro3_GeneralRsync ;
	attrib_info : ro3_AttribInfo ;
	simple_rsync : number ;
}

declare interface ro3_GeneralNotify_HeroSkillOpen {
	hero_id : number ;
	open_skill_list : ro3_SkillInfo[] ;
}

declare interface ro3_GeneralNotify_LevelUpNotify {
	old_level : number ;
	new_level : number ;
	exp : number ;
}

declare interface ro3_GeneralNotify_FunctionOpenNotify {
	medal_info : ro3_MedalInfo ;
	jw_data : ro3_HeroJueWei ;
	mark_info : ro3_ThingsMarkInfo ;
	material_zone : ro3_PveZoneCell[] ;
	tower : ro3_Tower ;
}

declare interface ro3_BattleInfoReq {
}

declare interface ro3_BattleInfoResp {
	result : ro3_GeneralRet ;
	fieldinfos : ro3_BattleFieldInfo[] ;
}

declare interface ro3_PlayerEnterReq {
	stage_id : number ;
}

declare interface ro3_PlayerEnterResp {
	result : ro3_GeneralRet ;
	errorcode : number ;
	rsync : ro3_GeneralRsync ;
}

declare interface ro3_BossInfo {
	ttype : number ;
	count : number ;
	next_refresh_time : number ;
	enter_cd : number ;
	guishu : number ;
	xiezhu : number ;
	buy_cnt : number ;
	hit_cnt : number ;
	hit_rewards : number[] ;
	next_hit_refresh_time : number ;
}

declare interface ro3_BossData {
	stage_id : number ;
	next_time : number ;
	hp : number ;
	max_hp : number ;
	owner : ro3_SnapRole ;
}

declare interface ro3_BossHide {
	clg_id : number ;
	end_time : number ;
	bd_time : number ;
}

declare interface ro3_RoleBoss {
	private_boss : number[] ;
	boss_list : ro3_BossInfo[] ;
	hide_boss : ro3_BossHide ;
	sweep_boss : number[] ;
	trilogy_boss : number[] ;
	trilogy_boss_reward : number[] ;
}

declare interface ro3_CrossBossInfo {
	stage_id : number ;
	limit_time : number ;
	hp : number ;
	max_hp : number ;
	uids : string[] ;
	teammate : number ;
}

declare interface ro3_HandbookCell {
	handbook_id : number ;
	star : number ;
	adlv : number ;
}

declare interface ro3_HandbookSuit {
	type : number ;
	handbook_list : ro3_HandbookCell[] ;
}

declare interface ro3_HandbookInfo {
	handbooksuit_list : ro3_HandbookSuit[] ;
}

declare interface ro3_FeatherPosi {
	posi : number ;
	featherid : number ;
	xl_lv : number ;
}

declare interface ro3_WingsSkillInfo {
	skillid : number ;
	lv : number ;
}

declare interface ro3_Wings {
	lv : number ;
	exp : number ;
	feather_list : ro3_FeatherPosi[] ;
	fs_lv : number ;
	zz_lv : number ;
	active : number ;
	skillinfo : ro3_WingsSkillInfo[] ;
}

declare interface ro3_ChatReq {
	chat : ro3_Chat ;
}

declare interface ro3_ChatResp {
	result : ro3_GeneralRet ;
	error : number ;
	is_offline : number ;
	rsync : ro3_GeneralRsync ;
	time : number ;
	gm_ret : string ;
}

declare interface ro3_ChatNotify {
	chats : ro3_Chat[] ;
}

declare interface ro3_ChatRecordReq {
	num : number ;
	channel : number ;
	min_guid : number ;
}

declare interface ro3_ChatRecordResp {
	result : ro3_GeneralRet ;
	chats : ro3_Chat[] ;
}

declare interface ro3_ChatSingleReadReq {
	username : string ;
}

declare interface ro3_ChatSingleReadResp {
	result : ro3_GeneralRet ;
	chats : ro3_Chat[] ;
}

declare interface ro3_Redpaper {
	rid : number ;
	nickname : string ;
	money : number ;
	size : number ;
	expire : number ;
	uid : string ;
}

declare interface ro3_RedpaperRecord {
	uid : string ;
	imageid : number ;
	nickname : string ;
	money : number ;
	best : number ;
}

declare interface ro3_RedpaperData {
	wallet_money : number ;
	records : ro3_RedpaperRecord[] ;
	snatch_count : number ;
	best_count : number ;
	snatch_count_nowday : number ;
	snatch_dayid : number ;
}


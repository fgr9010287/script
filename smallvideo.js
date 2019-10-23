const path1 = "/ucp/index?_t=";
//const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const path3 = "/getGlobalData?_t=";
//const path3 = "/getGlobalData"
var body = $response.body;
var url = $request.url;
if (url.indexOf(path1) != -1){
	let obj = JSON.parse(body);
	obj.data.uinfo["down_daily_remainders"] = "988";
	obj.data.uinfo["play_daily_remainders"] = "988";
	obj.data.uinfo["down_daily_remainders"] = "998";
	obj.data.uinfo["play_daily_remainders"] = "998";
	obj.data.uinfo["goldcoin"] = "999";
	obj.data.uinfo["next_upgrade_need"] = "0";
	obj.data.uinfo.curr_group["gicon"] = "V5";
	obj.data.uinfo.curr_group["gid"] = "5";
	obj.data.uinfo.curr_group["gname"] = "至尊VIP";
	obj.data.uinfo.curr_group["minup"] = "20";
	obj.data.uinfo.curr_group["gname"] = "尊贵VIP";
	obj.data.user["isvip"] = "1";
	obj.data.user["nickname"] = "Meeta_share";
	//obj.data.user["avatar_url"] = "https://img.sdxaly.com/C1/avatar/044/44414.jpeg?t=1563021092";
	//obj.data.user["avatar"] = "044/44414.jpeg?t=1563021092"
	obj.data.user["goldcicon"] = "998";
	obj.data.user["gicon"] = "V5";
	obj.data.user["gid"] = "5";
	body = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1){
	let obj = JSON.parse(body);
	//console.log(obj);
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
	body = JSON.stringify(obj);
}
if (url.indexOf(path3) != -1){
	let obj = JSON.parse(body);
	obj.data.adgroups.global_adgroup_ad1[0].countdown = "1";
	obj.data.adgroups.global_adgroup_ad1[0].pic = "";
	obj.data.adgroups.global_adgroup_ad1[0].url = "";
	body = JSON.stringify(obj);
}
$done({body});

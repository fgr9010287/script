const path = "SFitWeb/sfit/getUserBaseInfo";

var body = $response.body;
var url = $request.url;

if (url.indexOf(path) != -1){
    let obj = JSON.parse(body);
    if(obj.entRet.entUserBaseInfo.isVip)  obj.entRet.entUserBaseInfo.isVip=1;
	body = JSON.stringify(obj);
}

$done({body});
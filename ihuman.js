const path1 = "/v1/login";

const path2 = "/v1/get_purchase_list";

const path3 = "/v1/get_user_info";

var body = $response.body;
var path = $request.url;

function modify_userInfo() {
    let obj = JSON.parse(body);
    if(obj.result.code) obj.result.code=0;
    if(obj.result.userinfo.vip_status) obj.result.userinfo.vip_status= {"vip_type": 1,
   "last_product_id": "com.ihuman.book.sub.vip1y",
   "expire_time": 1893456731};
	body = JSON.stringify(obj);
}

function modify_purchase() {
    let obj = JSON.parse(body);
    if(obj.result.code) obj.result.code=0;
    if(obj.result.vip_status) obj.result.vip_status={"vip_type": 1,
   "last_product_id": "com.ihuman.book.sub.vip1y",
   "expire_time": 1893456731};
	body = JSON.stringify(obj);
}

if (path.indexOf(path1) != -1 || path.indexOf(path3) != -1){
   modify_userInfo();
}
if (path.indexOf(path2) != -1 ){
   modify_purchase();
}

$done({body});

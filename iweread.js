const path1 = "/pay/memberCardSummary";
const path2 = "/pay/balance";
var path = $request.url;
var body = $response.body;

function modify_card() {
  let obj = JSON.parse(body);
  obj["remainCoupon"] = 1;
  obj["expiredTime"] = 1594223999;
  obj["expired"] = 0;
  obj["remainTime"] = 1594223999;
  obj["permanent"] = 1;
  body = JSON.stringify(obj);
}

function modify_balance() {
  let obj = JSON.parse(body);
  obj["balance"] = 200;
  obj["giftBalance"] = 100;
  obj["peerBalance"] = 100;
  body = JSON.stringify(obj);
}
   
if (path.indexOf(path1) != -1){
  modify_card();
}
if (path.indexOf(path2) != -1 ){
 // modify_balance();
}

$done({body});
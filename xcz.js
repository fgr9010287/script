const path1 = "/1.1/user/";

var body = $response.body;
var url = $request.url;

function modify() {
      var obj = JSON.parse(body);
      obj.lifetimeMembership=true;
      obj.membership=true;
      obj.coins = 100;
      obj.tippedCoins = 100;
	body = JSON.stringify(obj);
}

if (1){
      modify();
}

$done({body});

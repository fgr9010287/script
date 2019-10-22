const path1 = "/api/1.0/pdfexpert6/subscription/refresh";

var body = $response.body;
var path = $request.url;

function modify() {
      var obj = JSON.parse(body);
      if(obj.subscriptionState) obj.subscriptionState="active";
      obj.isEligibleForIntroPeriod = true;
      obj.subscriptionExpirationDate = "03:50 15/08/2020";
	body = JSON.stringify(obj);
	  
}

if (path.indexOf(path1) != -1){
   modify();
}

$done({body});

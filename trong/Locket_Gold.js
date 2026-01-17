// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);
obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var trong={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2999-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2024-02-04T01:04:18Z",
  purchase_date:"2024-02-04T01:04:17Z",
  store:"app_store"
};
var trong_sub={
  grace_period_expires_date:null,
  purchase_date:"2024-02-04T01:04:17Z",
  product_identifier:"com.trong.premium.yearly",
  expires_date:"2999-12-18T01:04:17Z"
};
const match=Object.keys(mapping).find(e=>ua.includes(e));
if(match){
  let[e,s]=mapping[match];
  s?(trong_sub.product_identifier=s,obj.subscriber.subscriptions[s]=trong):obj.subscriber.subscriptions["com.trong.premium.yearly"]=trong,obj.subscriber.entitlements[e]=trong_sub
}else{
  obj.subscriber.subscriptions["com.trong.premium.yearly"]=trong;
  obj.subscriber.entitlements.pro=trong_sub
}
$done({body:JSON.stringify(obj)});
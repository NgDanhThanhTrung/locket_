// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);
obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var tron={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2999-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2024-02-03T01:04:18Z",
  purchase_date:"2024-02-03T01:04:17Z",
  store:"app_store"
};
var tron_sub={
  grace_period_expires_date:null,
  purchase_date:"2024-02-03T01:04:17Z",
  product_identifier:"com.tron.premium.yearly",
  expires_date:"2999-12-18T01:04:17Z"
};
const match=Object.keys(mapping).find(e=>ua.includes(e));
if(match){
  let[e,s]=mapping[match];
  s?(tron_sub.product_identifier=s,obj.subscriber.subscriptions[s]=tron):obj.subscriber.subscriptions["com.tron.premium.yearly"]=tron,obj.subscriber.entitlements[e]=tron_sub
}else{
  obj.subscriber.subscriptions["com.tron.premium.yearly"]=tron;
  obj.subscriber.entitlements.pro=tron_sub
}
$done({body:JSON.stringify(obj)});
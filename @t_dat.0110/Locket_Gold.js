// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],
obj=JSON.parse($response.body);
obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var @t_dat.0110={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2999-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2024-10-01T01:04:18Z",
  purchase_date:"2024-10-01T01:04:17Z",
  store:"app_store"
};
var @t_dat.0110_sub={
  grace_period_expires_date:null,
  purchase_date:"2024-10-01T01:04:17Z",
  product_identifier:"com.@t_dat.0110.premium.yearly",
  expires_date:"2999-12-18T01:04:17Z"
};
const match=Object.keys(mapping).find(e=>ua.includes(e));
if(match){
  let[e,s]=mapping[match];
  s?(@t_dat.0110_sub.product_identifier=s,obj.subscriber.subscriptions[s]=@t_dat.0110):obj.subscriber.subscriptions["com.@t_dat.0110.premium.yearly"]=@t_dat.0110,obj.subscriber.entitlements[e]=@t_dat.0110_sub
}else{
  obj.subscriber.subscriptions["com.@t_dat.0110.premium.yearly"]=@t_dat.0110;
  obj.subscriber.entitlements.pro=@t_dat.0110_sub
}
$done({body:JSON.stringify(obj)});
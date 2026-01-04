// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

// ========= Phần cố định ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);

obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

var baonguyen247={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2999-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2008-07-24T01:04:18Z", 
  purchase_date:"2008-07-24T01:04:17Z",          
  store:"app_store"
};

var baonguyen247_sub={
  grace_period_expires_date:null,
  purchase_date:"2008-07-24T01:04:17Z",         
  product_identifier:"com.baonguyen247.premium.yearly",
  expires_date:"2999-12-18T01:04:17Z"
};

const match=Object.keys(mapping).find(e=>ua.includes(e));

if(match){
  let[e,s]=mapping[match];
  s?(baonguyen247_sub.product_identifier=s,obj.subscriber.subscriptions[s]=baonguyen247):obj.subscriber.subscriptions["com.baonguyen247.premium.yearly"]=baonguyen247,obj.subscriber.entitlements[e]=baonguyen247_sub
}else{
  obj.subscriber.subscriptions["com.baonguyen247.premium.yearly"]=baonguyen247;
  obj.subscriber.entitlements.pro=baonguyen247_sub
}

$done({body:JSON.stringify(obj)});

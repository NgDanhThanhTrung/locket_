const mapping = { '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip', 'watch_vip'], 'Locket': ['Gold', 'com.nghia.premium.yearly'] };
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let obj = JSON.parse($response.body);
obj.subscriber = obj.subscriber || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
const pInfo = { is_sandbox: false, ownership_type: "PURCHASED", expires_date: "2999-12-18T01:04:17Z", purchase_date: "2024-01-01T01:04:17Z", store: "app_store" };
const eInfo = { purchase_date: "2024-01-01T01:04:17Z", product_identifier: "com.nghia.premium.yearly", expires_date: "2999-12-18T01:04:17Z" };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [entKey, subKey] = mapping[match];
  let finalSubKey = subKey || "com.nghia.premium.yearly";
  eInfo.product_identifier = finalSubKey;
  obj.subscriber.subscriptions[finalSubKey] = pInfo;
  obj.subscriber.entitlements[entKey] = eInfo;
} else {
  obj.subscriber.subscriptions["com.nghia.premium.yearly"] = pInfo;
  obj.subscriber.entitlements["Gold"] = eInfo;
}
$done({ body: JSON.stringify(obj) });
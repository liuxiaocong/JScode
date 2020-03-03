const webpush = require('web-push');
//VAPID keys should only be generated only once.
//const vapidKeys = webpush.generateVAPIDKeys();
//console.log(vapidKeys.publicKey, vapidKeys.privateKey);

//BBik0xoq5Y_r9FoX_cN2O9EBgpP8KzHoDwv_PFZF0R476_3i0K0glqMoVwxQWpr2ak9jvm8ibWN6_09lTgQD-_s J_Dhf4UVqYr09VIAB3_5DDddHcbxUHpk2h6GDFcpaiI
//BAJLHGT3n35CJLqRGbmtLT4rDHUcikvfpRLJ10X4nBFsBxaJ7-ucuXgXUKsCXV2V7QNtmGnwmS8F3tbOUb2tFXQ yIhtSu8RuFG--bKcZKKIXNHOLSq0ACKeb4h94A212VY

//const webpush = require('web-push');
// 从数据库取出用户的subsciption

webpush.setGCMAPIKey('AIzaSyB6fx3ImXMzu2MDIGdecMSvvczyDmFgT3I');
webpush.setVapidDetails(
  'mailto:evanliu.it@gmail.com',
  'BBik0xoq5Y_r9FoX_cN2O9EBgpP8KzHoDwv_PFZF0R476_3i0K0glqMoVwxQWpr2ak9jvm8ibWN6_09lTgQD-_s',
  'J_Dhf4UVqYr09VIAB3_5DDddHcbxUHpk2h6GDFcpaiI',
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  'endpoint': 'https://fcm.googleapis.com/fcm/send/fnnv_To8HFY:APA91bH0sV8f-Tdg0oIPyv3EJWaYnvuyS6xgG17ZGNjnkLIYL2AccTiUUXHGwN-WEZdIjO-S9V5sF05wC--Jr00G9wKpFp7XYHutqnfe8mzoTEUii3OPPHUq9s9ueLHub-2dTqEoRxyi',
  'expirationTime': null,
  'keys': {
    'p256dh': 'BDbzI-72cbh2i6-h2xLWwjru-hgN_wI5GtUo3k7Kdwl4_uMfmqpAdH4yzaN4_XrSL_47pL7d7acddDGop_svF1s',
    'auth': '7nXjQlIcteJw79LkcdKiHw',
  },
};

// push的数据
const payload = {
  title: '一篇新的文章',
  body: '点开看看吧',
  icon: '/html/app-manifest/logo_512.png',
  data: {url: 'https://www.rrfed.com'},
  //badge: '/html/app-manifest/logo_512.png'
};


//前端需要根据新的public key 和 private key获取新的subscription
webpush.sendNotification(pushSubscription, JSON.stringify(payload)).then(
  function(data) {
    return callback(null, data);
  },
  function(err) {
    return console.log(err);
  },
).catch(function(ex) {
    return console.log(ex);
  },
);
;
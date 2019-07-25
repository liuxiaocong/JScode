//const webpush = require('web-push');
//VAPID keys should only be generated only once.
//const vapidKeys = webpush.generateVAPIDKeys();
//console.log(vapidKeys.publicKey, vapidKeys.privateKey);

//BAJLHGT3n35CJLqRGbmtLT4rDHUcikvfpRLJ10X4nBFsBxaJ7-ucuXgXUKsCXV2V7QNtmGnwmS8F3tbOUb2tFXQ yIhtSu8RuFG--bKcZKKIXNHOLSq0ACKeb4h94A212VY

const webpush = require('web-push');
// 从数据库取出用户的subsciption

webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:evanliu.it@gmail.com',
  'BKWA-FE7PVg7LMAs38Z-NY8_YBC4JrdDlIxOIWLNbxecA387n5CO8aoqrtNSYn73prfh0zIzENUVBkpKowUlri8',
  'AAAAHZF2jso:APA91bF21q3SQAWI8M5geaRiI17RQfWel23zYx9FNHJQnYjxZTBcY2TRC3gfb5N2mJT09vg6g-R8trTpKKiw5dK2xcUnkHF5TX7nREDC78m482dXNevQmvW8yspGIF9I7kc7W-_93pv_'
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  'endpoint': 'https://fcm.googleapis.com/fcm/send/deuYRxSMO8Q:APA91bE-hKTeXP2slfomY6eqKA8_xvYwozwIABQ8kzrh7q_V6jv2YyPKrg6koGbD6dLtgEfgOngkV9UkQi5YtQ1k4hE3gttkf68kA1GuBYRorp2GdzPew_aE5wRiIxTm8nMhpq51ZjEf',
  'expirationTime': null,
  'keys': {
    'p256dh': 'BHCY2X8470-tPDM0E5W5uwto4dJMtQ9j9ZEhm_cBKWqRDD1fJKamz7HrDEF9Cg-8waqN_t-uqdARsqGd9du3Z2s',
    'auth': 'IK1cE6jQ2PaLfQY1ne81og',
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

webpush.sendNotification(pushSubscription, JSON.stringify(payload));
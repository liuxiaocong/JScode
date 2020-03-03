// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-messaging.js');
var firebaseConfig = {
  // ...
  apiKey: 'AIzaSyD3o-1ECW-uEEjODeS0eGu_0-vK4pMrHOw',
  authDomain: 'hashnest-2cc48.firebaseapp.com',
  databaseURL: 'https://hashnest-2cc48.firebaseio.com',
  projectId: 'hashnest-2cc48',
  storageBucket: 'hashnest-2cc48.appspot.com',
  messagingSenderId: '126994517706',
  appId: '1:126994517706:web:d5e3585805069f63',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messaging = firebase.messaging();

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
   'messagingSenderId': 'YOUR-SENDER-ID'
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 **/


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]

//self.registration.showNotification('来自sw', {
//  body: 'Buzz! Buzz!',
//  icon: 'firebase-logo.png',
//});
//
//self.onnotificationclick = function(event) {
//  clients.openWindow('test.html');
//};

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]

//curl -X POST -H "Authorization: key=YOUR-SERVER-KEY" -H "Content-Type: application/json" -d '{
//"notification": {
//  "title": "Portugal vs. Denmark",
//    "body": "5 to 1",
//    "icon": "firebase-logo.png",
//    "click_action": "http://localhost:8081"
//},
//"to": "fPHrTqDJZ-w:APA91bF7e1KBIywHwuGoqJppjWUYebbR_X9Vw5AcQSx7jl5xLYytoJb0D9Kod1gv7Iiu7olcNeC7XwGdDucniFKR-bOH_vYSQi_rca__XlUiWeIiaANg0rPoX8jXQnKNx_xInlzOWEQ8"
//}' "https://fcm.googleapis.com/fcm/send"
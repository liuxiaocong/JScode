console.log('sw-4');
this.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${ event.data.text() }"`);

  let notificationData = event.data.json();
  const title = notificationData.title;
  // 可以发个消息通知页面
  //util.postMessage(notificationData);
  // 弹消息框
  event.waitUntil(self.registration.showNotification(title, notificationData));
});

this.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  let notification = event.notification;
  notification.close();
  event.waitUntil(
    clients.openWindow(notification.data.url),
  );
});
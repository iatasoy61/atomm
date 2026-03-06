importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCpvX-GTUDY_VdsTBb84qpXG8vaE9KCU4I",
  authDomain: "atom-kumpir.firebaseapp.com",
  projectId: "atom-kumpir",
  storageBucket: "atom-kumpir.firebasestorage.app",
  messagingSenderId: "501395694480",
  appId: "1:501395694480:web:8bf847d1380740bdeb0915"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification || {};
  const data = payload.data || {};
  self.registration.showNotification(title || 'ATOM', {
    body: body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [300, 100, 300, 100, 300],
    tag: 'atom-' + (data.type || 'notification'),
    data: data,
    actions: [
      { action: 'ok', title: '✓ Tamam' }
    ]
  });
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  clients.openWindow('/garson.html');
});

// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7w0VSPp2z0Uq1nF56Ipqs3FatV2hNero",
  authDomain: "fir-multi-ccb70.firebaseapp.com",
  projectId: "fir-multi-ccb70",
  storageBucket: "fir-multi-ccb70.appspot.com",
  messagingSenderId: "607545678160",
  appId: "1:607545678160:web:0043d7354aca1db3d8f455"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
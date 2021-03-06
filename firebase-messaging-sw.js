// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAmmPANHkbigecLk-7P8LAZy2jS_0yNqQ",
    authDomain: "chatek-d34e8.firebaseapp.com",
    projectId: "chatek-d34e8",
    storageBucket: "chatek-d34e8.appspot.com",
    messagingSenderId: "579541472743",
    appId: "1:579541472743:web:ffd9619b57c46b4dc25942"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});




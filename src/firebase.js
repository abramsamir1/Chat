import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdnRfB6q63G73_27ufU5iJHYtOSVg0yMY",
    authDomain: "chat-ebf52.firebaseapp.com",
    databaseURL: "https://chat-ebf52.firebaseio.com",
    projectId: "chat-ebf52",
    storageBucket: "chat-ebf52.appspot.com",
    messagingSenderId: "1003709269211"
  };
  firebase.initializeApp(config);

export default firebase;

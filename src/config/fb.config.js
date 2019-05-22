import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFt-JYDFksZBLBD-WMDJBbKrkoIAPyN7I",
    authDomain: "tabletop-45dee.firebaseapp.com",
    databaseURL: "https://tabletop-45dee.firebaseio.com",
    projectId: "tabletop-45dee",
    storageBucket: "tabletop-45dee.appspot.com",
    messagingSenderId: "733047629114",
    appId: "1:733047629114:web:58abcf12159ccb0f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;
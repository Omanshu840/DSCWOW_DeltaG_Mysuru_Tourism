import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFN0Zr1xrB2kvszrD2Undm9vdmaS3VqYQ",
    authDomain: "mysuru-tourism-64846.firebaseapp.com",
    projectId: "mysuru-tourism-64846",
    storageBucket: "mysuru-tourism-64846.appspot.com",
    messagingSenderId: "36352142295",
    appId: "1:36352142295:web:dcc893d448fe435eedb992"
});
  // Initialize Firebase

var db = firebaseApp.firestore();

export {db};
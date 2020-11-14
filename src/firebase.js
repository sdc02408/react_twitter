import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD1MXzwlVmcKnjyWwdHdaGV4GzhzWl6uIw",
  authDomain: "twitter-clone-de7f8.firebaseapp.com",
  databaseURL: "https://twitter-clone-de7f8.firebaseio.com",
  projectId: "twitter-clone-de7f8",
  storageBucket: "twitter-clone-de7f8.appspot.com",
  messagingSenderId: "674730413967",
  appId: "1:674730413967:web:a37f721b1b075471fa45fa",
  measurementId: "G-MJVY2J3J90"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db;

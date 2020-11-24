import * as firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyD8Lp1QZfELIYQ6aVVObvFQDz9O1Y8bagY",
    authDomain: "storeapp-879fd.firebaseapp.com",
    databaseURL: "https://storeapp-879fd.firebaseio.com",
    projectId: "storeapp-879fd",
    storageBucket: "storeapp-879fd.appspot.com",
    messagingSenderId: "809961764277",
    appId: "1:809961764277:web:3d02f6fb057f5aa64495fc",
    measurementId: "G-KZVRSBGF1T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

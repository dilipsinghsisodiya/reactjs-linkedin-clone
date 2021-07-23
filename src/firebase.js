import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdKngGg5-fbePYVE52TtKsl-kzxI49_4U",
    authDomain: "linkedin-clone-dd-c7747.firebaseapp.com",
    projectId: "linkedin-clone-dd-c7747",
    storageBucket: "linkedin-clone-dd-c7747.appspot.com",
    messagingSenderId: "1037342286383",
    appId: "1:1037342286383:web:7c19e746fb02d797209cda",
    measurementId: "G-MHB64JFFMV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth};
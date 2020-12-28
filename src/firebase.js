import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQJo_UYYQtaM7JOXm1K79zCj8Tqwtwqzk",
  authDomain: "slack-clone-107c9.firebaseapp.com",
  projectId: "slack-clone-107c9",
  storageBucket: "slack-clone-107c9.appspot.com",
  messagingSenderId: "1026161966314",
  appId: "1:1026161966314:web:c0adec76337535ce3eab93",
  measurementId: "G-VMGWCY3GNG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

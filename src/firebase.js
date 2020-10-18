import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDox1S0dhUFujQfBLxoRnfIGeRTBFdiomw",
  authDomain: "instagram-clone-35cc3.firebaseapp.com",
  databaseURL: "https://instagram-clone-35cc3.firebaseio.com",
  projectId: "instagram-clone-35cc3",
  storageBucket: "instagram-clone-35cc3.appspot.com",
  messagingSenderId: "1086730772803",
  appId: "1:1086730772803:web:699781089e9560235c0ff6",
  measurementId: "G-FFZCXL4Y12",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

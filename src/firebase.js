import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARv-4tUbfJkBtI5YhMN2uUPdewgKUtUdg",
  authDomain: "shop-4293a.firebaseapp.com",
  databaseURL: "https://shop-4293a.firebaseio.com",
  projectId: "shop-4293a",
  storageBucket: "shop-4293a.appspot.com",
  messagingSenderId: "635699926624",
  appId: "1:635699926624:web:750499981135f026475505",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

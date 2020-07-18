import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  databaseURL:
    "https://" + process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".appspot.com",
  appId: process.env.REACT_APP_FIREBASE_ID,
};

const FirebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();

FirebaseApp.db = firestore;
FirebaseApp.db.enablePersistence({ synchronizeTabs: true });

export default FirebaseApp;

import firebase from "firebase/app";
import "firebase/firestore";

const initApp = () => {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
    databaseURL:
      "https://" +
      process.env.REACT_APP_FIREBASE_PROJECT_ID +
      ".firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".appspot.com",
    appId: process.env.REACT_APP_FIREBASE_ID,
  };

  const Firebase = firebase.initializeApp(config);
  const firestore = firebase.firestore();

  Firebase.db = firestore;
  Firebase.db.enablePersistence({ synchronizeTabs: true });
};

const FirebaseApp = process.env.REACT_APP_FIREBASE_API_KEY && initApp();

export default FirebaseApp;

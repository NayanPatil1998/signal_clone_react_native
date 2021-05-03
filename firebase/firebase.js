import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk1bWRu5w8DY7R-1USEDbFBcGPckYUMi0",
  authDomain: "signal-clone-rn-bee37.firebaseapp.com",
  projectId: "signal-clone-rn-bee37",
  storageBucket: "signal-clone-rn-bee37.appspot.com",
  messagingSenderId: "1069804476371",
  appId: "1:1069804476371:web:d7116cf30c157bfcc8c126",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };

import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6g_ThnyblSD_NKYNBAIN_pJ0_AIULRr4",
  authDomain: "expenses-efc4c.firebaseapp.com",
  projectId: "expenses-efc4c",
  storageBucket: "expenses-efc4c.appspot.com",
  messagingSenderId: "1047785932223",
  appId: "1:1047785932223:web:ff4a57f2fd1d63658d0d0a"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase;
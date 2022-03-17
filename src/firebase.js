import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqTRXkXHsw47ItU2OQlbfhY1RXv945few",
    authDomain: "expenses-5c73f.firebaseapp.com",
    projectId: "expenses-5c73f",
    storageBucket: "expenses-5c73f.appspot.com",
    messagingSenderId: "66979273422",
    appId: "1:66979273422:web:85c2ca343c6a7d0d1a0e9f"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase
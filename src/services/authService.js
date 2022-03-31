import firebase from "../firebase";
import { app } from "../firebase";

const auth = app.auth();
const db = app.firestore(); //db - reiskia database

const register = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password); //Sukuriamas vartotojas google cloude
    const user = res.user; //Pasiima sukurto vartotojo duomenis
    await db.collection("users").add({
      vid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
  }
};

const logout = () => {
  auth.signOut();
};

export default firebase;
export { auth, db, register, login, logout };

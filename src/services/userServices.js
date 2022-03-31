import firebase from "../firebase";

export const getUserData = (user, setUser) => {
  //Gauti info apie user'i
  try {
    firebase
      .firestore()
      .collection("users")
      .where("uid", "==", user?.uid) //uid yra Vartotojo id
      .get() //Gaunu duomenis apie vartotoja
      .then((userData) => setUser(userData.docs[0].data())); //Setinsiu i state
  } catch (err) {
    console.log(err);
  }
};

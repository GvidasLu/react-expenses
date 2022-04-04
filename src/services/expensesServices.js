import firebase from "../firebase";

export const addExpense = (data) => {
  firebase.firestore().collection("expenses").add(data);
};

export const getAllExpenses = (onExpenses, user) =>
  firebase
    .firestore()
    .collection("expenses")
    .where("uid", "==", user?.uid)
    .get()
    .then((snapshot) => {
      const newData = snapshot.docs.length
        ? snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        : null;
      onExpenses(newData);
    });

export const getExpenseById = (item, id) => {
  firebase
    .firestore()
    .collection("expenses")
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const updateExpense = (id, data) => {
  firebase.firestore().collection("expenses").doc(id).set(data);
};

export const deleteExpense = (id) => {
  firebase.firestore().collection("expenses").doc(id).delete();
};

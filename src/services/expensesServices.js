import firebase from "../firebase";

export const addExpense = (data)=>{
    firebase
        .firestore()
        .collection('expenses')
        .add(data)

}

export const getAllExpenses = (onTimesChanged, sortBy)=> firebase
    .firestore()
    .collection('expenses')
    .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data()
        }))
        onTimesChanged(newTimes)

    })

export const getExpenseById = (item,id)=>{
    firebase
        .firestore()
        .collection('expenses')
        .doc(id)
        .get()
        .then((docRef)=>{item(docRef.data())})
}

export const updateExpense = (id,data)=>{
    firebase
        .firestore()
        .collection('expenses')
        .doc(id)
        .set(data)
}
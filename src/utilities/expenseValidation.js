const expenseValidation = (values) =>{
    const errors ={};
    if(!values.date){
        errors.date = "Datą nurodyti privaloma"
    }
    if(!values.type){
        errors.type = "Išlaidų tipą nurodyti privaloma"
    }
    if(!values.description){
        errors.description = "Išlaidas aprašyti privaloma"
    }
    if(!values.amount){
        errors.amount = "Išlaidų sumą nurodyti privaloma"
    }

    return errors;

}

export default expenseValidation
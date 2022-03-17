import React, {useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap";
import ExpensesTable from "../expensesTable/ExpensesTable";
import AddExpense from "../addexpense/AddExpense";
import * as service from "../../services/expensesServices"
const Expenses = ()=>{
    const [addExpense, setAddExpense] = useState(false);
    const [expenses, setExpenses] = useState([])

    const saveExpenseHandler = (data)=>{
        service.addExpense(data);
        setAddExpense(false)
    }
    useEffect(()=>{
        service.getAllExpenses(expenses=>
            setExpenses(expenses)
        )
    }, [])
    console.log(expenses)
    return(
        <>
            {(addExpense) && <AddExpense onSave={saveExpenseHandler}/>}
            <Card>
                <Card.Header>
                    <Button className="btn btn-primary m-2" onClick={()=>setAddExpense(true)}>Pridėti išlaidas</Button>
                    <Button className="btn btn-danger" onClick={()=>{setAddExpense(false)}}>Atšaukti</Button>
                </Card.Header>
                <Card.Header>
                    <h3>Išlaidų sąrašas:</h3>
                </Card.Header>
                <Card.Body>
                 <ExpensesTable data={expenses} />
                </Card.Body>
            </Card>
        </>
    )
}

export default Expenses
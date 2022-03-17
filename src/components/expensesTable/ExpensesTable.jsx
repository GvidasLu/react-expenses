import {Table} from "react-bootstrap";
import Expense from "../expense/Expense";
import React from "react";


const ExpensesTable = (props)=>{
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Data</th>
                <th>Išlaidų tipas</th>
                <th>Aprašymas</th>
                <th>Suma</th>
                <th>Redagavimas</th>
                <th>Šalinimas</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((expense, i) => {
                console.log(i)
                return (<Expense
                    key={i}
                    id = {expense.id}
                    date={expense.date}
                    type={expense.type}
                    description={expense.description}
                    amount={expense.amount}
                />)
            })
            }
            </tbody>
        </Table>
    )
}

export default ExpensesTable
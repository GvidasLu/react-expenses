import { Table } from "react-bootstrap";
import Expense from "../expense/Expense";
import React, { useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as service from "../../services/expensesServices";
import * as services from "../../services/expensesServices";

const ExpensesTable = (props) => {
  const {id}=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    id && services.deleteExpense(id)
    navigate("/expenses")
  }, [id])

  return (
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
        {props.data && props.data.map((expense, i) => {
          return (
            <Expense
              key={i}
              id={expense.id}
              date={expense.date}
              type={expense.type}
              description={expense.description}
              amount={expense.amount}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default ExpensesTable;

import "./App.css";
import { Container } from "react-bootstrap";
import Header from "../header/Header";
import Expenses from "../expenses/Expenses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "../addexpense/AddExpense";
import Register from "../auth/register/Register";
import Login from "../auth/login/Login";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/expenses" element={<Expenses />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="expense/update/:id" element={<AddExpense />} />
          <Route exact path="expense/delete/:id" element={<Expenses />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

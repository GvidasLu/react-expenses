import './App.css';
import {Container} from "react-bootstrap";
import Header from "../header/Header";
import Expenses from "../expenses/Expenses";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddExpense from "../addexpense/AddExpense";
function App() {
  return (
    <Container>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Expenses/>}/>
                <Route path="expense/update/:id" element={<AddExpense/>}/>
            </Routes>
        </Router>
    </Container>
  );
}

export default App;

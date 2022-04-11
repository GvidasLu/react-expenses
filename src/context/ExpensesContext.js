import React, { useReducer, useContext } from 'react';
import ExpensesReducer from '../redicers/ExpensesReducer';
import {getAllExpenses} from '../actions/ExpensesActions';

const initialState = {
    expenses: [],
    expense:{
        date:'',
        type:'',
        description:'',
        amount:'' 
       },
       isOpen: false,
}

const ExpensesContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(ExpensesReducer, initialState)
    const allExpenses = (data) => {
        dispatch(getAllExpenses(data))
    }
    return(
        <ExpensesContext.Provider value={{
            ...state,
            allExpenses
            }}>
            {children}
        </ExpensesContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ExpensesContext)
}

export {ExpensesContext, AppProvider}
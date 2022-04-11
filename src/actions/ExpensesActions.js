
export function getAllExpenses (data){
    return{
        type: 'SET EXPENSES',
        payload: data
    }
  }
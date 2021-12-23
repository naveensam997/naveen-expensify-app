import {v4 as uuid} from 'uuid';
import {db,ref, remove, set, update,get,onValue,off,push, child} from '../firebase/Firebase'

// ADD_EXPENSE
export const addExpense = (expense) =>({
  type: 'ADD_EXPENSE',
  expense
  
});
export const startAddExpenses = (expensesData={}) => {
  return  (dispatch,getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0

    } = expensesData;
    const expense = { description,note,amount,createdAt };
    return push(ref(db,`users/${uid}/expenses`),expense)
    .then((ref) => {
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }))
    })

  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpenses = ({id}={}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return remove(ref(db,`users/${uid}/expenses/${id}`)).then(() => {
      dispatch(removeExpense({id}))
    })
    
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpese = (id,updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    update(ref(db,`users/${uid}/expenses/${id}`),updates).then(() => {
       dispatch(editExpense(id,updates))
    })
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});



export const startSetExpenses = () => {
  return (dispatch,getState) =>{
    const uid = getState().auth.uid;
    return get(ref(db,`users/${uid}/expenses`),'value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
        ...childSnapshot.val()
        })

      })
      dispatch(setExpenses(expenses));

    })
   

  }
}


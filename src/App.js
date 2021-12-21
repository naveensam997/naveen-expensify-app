import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
// import 'normalize.css/normalize.css';
import './styles/styles.scss';



const  App =()=> {
  const store = configureStore();
useEffect(() => {
store.dispatch(startSetExpenses())

},[])
  return (
    <Provider store={store}>
         <AppRouter/>
    </Provider>
    
    // <Redux/>
    // <Expensify/>
    
  )
}
export default App

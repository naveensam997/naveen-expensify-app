import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login,logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import { getAuth } from "firebase/auth";
// import 'normalize.css/normalize.css';
import './styles/styles.scss';



const  App =()=> {
  const store = configureStore();
useEffect(() => {
store.dispatch(startSetExpenses())

},[])
getAuth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses())
    if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
  }else{
    store.dispatch(startSetExpenses())
    store.dispatch(logout())
    history.push("/")
  }
})
  return (
    <Provider store={store}>
         <AppRouter/>
    </Provider>
    
    // <Redux/>
    // <Expensify/>
    
  )
}
export default App

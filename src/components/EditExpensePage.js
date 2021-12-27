import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpese, startRemoveExpenses } from '../actions/expenses';


const EditExpensePage = (props) => {
  return (
    <div >
      <div className='page-header'>
        <div className='containt_container'>
        <h1 className='page-header__title'>Edit Expense</h1>
        </div> 
        </div>
        <div className='containt_container'> 
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpese(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button className='button button--secondary' onClick={() => {
        props.dispatch(startRemoveExpenses({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove Expense</button>
      </div> 
    </div>
   
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);

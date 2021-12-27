import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import selectEpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expense-taotal';
import { Link } from "react-router-dom";


 const ExpensesSummary = ({expensesCount,expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? 'expense' :'expenses';
    const totoalExpenses = numeral(expensesTotal /100).format('$0,0.00')
    return(
        <div className="page-header">
            <div className="containt_container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{totoalExpenses}</span></h1>
            <div className="page-header-action">
            <Link to='/create' className="button">Add Expense</Link> 
            </div>
            </div >        
        </div>

    )
}
const mapStateToProps = (state) => {
       const visibleExpenses = selectEpenses(state.expenses,state.filters)
    return{
        expensesCount : visibleExpenses.length,
        expensesTotal :selectExpensesTotal(visibleExpenses)

    }
}

export default connect(mapStateToProps)(ExpensesSummary)
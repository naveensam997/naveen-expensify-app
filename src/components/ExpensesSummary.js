import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import selectEpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expense-taotal'


 const ExpensesSummary = ({expensesCount,expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? 'expense' :'expenses';
    const totoalExpenses = numeral(expensesTotal /100).format('$0,0.00')
    return(
        <div>
            <h1>Viewing {expensesCount} {expensesWord} totalling {totoalExpenses}</h1>
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
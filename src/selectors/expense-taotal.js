// eslint-disable-next-line import/no-anonymous-default-export
export default  (expenses) => {
        return expenses.map((expense) => expense.amount)
        .reduce((sum,val) =>  sum + val,0)

    }


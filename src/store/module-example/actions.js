/*
export function someAction (context) {
}
*/
export function updateText({commit}, newValue){
    console.log('Commited new Text value = ', newValue);
    commit('UPDATE_TEXT', newValue)
}

export function updatePaidMonthlyExpenses(context, newValue){
    console.log('Commited new Text value = ', newValue);
    console.log('Context, ', context.commit);
    context.commit('UPDATE_PAID_MONTHLY_EXPENSES', newValue)
}

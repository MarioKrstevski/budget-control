/*
export function someMutation (state) {
}
*/

export const UPDATE_TEXT = (state, newValue) => {
    state.test = newValue
  }

export function UPDATE_PAID_MONTHLY_EXPENSES(state , key){
    console.log("mutation log", key, state, state.state, state.state.paidMonthlyExpenses);
    // state.paidMonthlyExpenses = [...state.paidMonthlyExpenses, key];
}  

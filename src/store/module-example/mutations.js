/*
export function someMutation (state) {
}
*/

export function UPDATE_PAID_MONTHLY_EXPENSES(state, key) {
    if (state.state.paidMonthlyExpenses.includes(key)) {
    } else {
        state.state.paidMonthlyExpenses = [
            ...state.state.paidMonthlyExpenses,
            key
        ];
    }
}

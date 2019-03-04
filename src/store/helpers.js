import { mapState, mapActions } from 'vuex';

export const testGetters = {
    ...mapState({
        test: store => store.example.state.test,
        monthlyExpenses: store => store.example.state.monthlyExpenses,
        paidMonthlyExpenses: store => store.example.state.paidMonthlyExpenses,
    })
}
export const testActions = mapActions([
        'updateText',
        'updatePaidMonthlyExpenses',
        'testtest'
    ]);
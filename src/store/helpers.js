import { mapState, mapActions } from 'vuex';

export const storeGetters = {
    ...mapState({
        monthlyExpenses: store => store.example.state.monthlyExpenses,
        paidMonthlyExpenses: store => store.example.state.paidMonthlyExpenses,
        categoryOptions: store => store.example.state.categoryOptions,
        transactions: store => store.example.state.transactions,
        tableColumns: store => store.example.state.tableColumns,

    })
}
export const storeActions = mapActions('example',[
        'updatePaidMonthlyExpenses',
    ]);
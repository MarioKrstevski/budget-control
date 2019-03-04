<template>
  <q-page class="flex justify-center">
    <div class="transactions">
      <q-table
        :data="transactions"
        :columns="tableColumns"
        selection="multiple"
        :selected.sync="selectedFromTable"
        row-key="title"
        color="secondary"
        title="Transactions"
        table-class="tabletrans"
      >
        <template slot="top-selection" slot-scope="props">
          <p class="table-title">Your Transactions</p>
          <div class="col"/>
          <q-select class="month-selection" v-model="defaultSelectedMonth" :options="monthOptions"/>
          <q-btn
            color="secondary"
            size="md"
            @click="showTransactionModal = true"
            label="Add Transaction"
          />
        </template>
      </q-table>
    </div>
    <q-modal
      v-model="showTransactionModal"
      :content-css="{borderRadius: '6px',minWidth: '40vw', minHeight: '60vh'}"
    >
      <q-modal-layout>
        <div class="layout-padding">
          <q-input v-model="tTitle" float-label="Title"/>
          <p class="caption">Category</p>
          <q-select
            class="category-selection"
            v-model="defaultSelectedCategory"
            :options="categoryOptions"
          />
          <q-input v-model="tNewCategory" float-label="New Category"/>
          <q-input v-model="tAmount" float-label="Amount"/>
          <br>
          <q-radio color="secondary" v-model="tType" val="expense" label="Expense"/>
          <q-radio color="secondary" v-model="tType" val="income" label="Income"/>
          <q-collapsible group="datePicker" label="Date is set for Today (Click to change)">
            <q-datetime-picker minimal color="orange" v-model="tDate" type="date"/>
          </q-collapsible>
          <br>
          <br>
          <q-btn
            style="float:right"
            color="secondary"
            @click="showTransactionModal = false"
            label="Save"
          />
        </div>
      </q-modal-layout>
    </q-modal>
  </q-page>
</template>

<style scoped>
.transactions {
  display: grid;
  margin-top: 20px;
  width: 90%;
  /* border: 1px solid black; */
  height: fit-content;
}
.month-selection {
  min-width: 100px;
  width: 10vw;
  margin-right: 30px;
  border: 1px solid gray;
  padding-left: 20px;
}
.table-title {
  font-size: 32px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.caption {
  padding: 0;
  margin: 0;
  margin-top: 10px;
}
.q-radio {
  margin-right: 8px;
}
.q-collapsible{
  margin-top: 10px;
}
</style>

<script>
import { storeGetters, storeActions } from '../store/helpers'

export default {
  name: "PageTransactions",
  data() {
    return {
      tDate: new Date(),
      tTitle: '',
      tNewCategory: '',
      tAmount: undefined,
      tType: "expense",

      showTransactionModal: false,

      defaultSelectedMonth: "1",
      defaultSelectedCategory: "0",
      monthOptions: [
        {
          label: "All",
          value: "0"
        },
        {
          label: "January",
          value: "1"
        },
        {
          label: "February",
          value: "2"
        },
        {
          label: "March",
          value: "3"
        },
        {
          label: "April",
          value: "4"
        },
        {
          label: "May",
          value: "5"
        }
      ],
      selectedFromTable: [{}]
    };
  },
  computed: {
    ...storeGetters,
  },
  methods: {
   ...storeActions,
  }
};
</script>

<template>
  <q-page class="grid">
    <div class="status-today">
      <q-card inline class="q-ma-sm qcard">
        <q-card-title>
          Spent Today 
          <span slot="subtitle">Activity on February 13, 2019</span>
        </q-card-title>
        <q-card-main>
          <div>
            <p>$55.00</p>
            <p>You haven't spend too much today</p>
          </div>
        </q-card-main>
      </q-card>
    </div>
    <div class="status-month">
      <q-card inline class="q-ma-sm qcard">
        <q-card-title>
          Spent this Month
          <span slot="subtitle">Activity on February 2019</span>
        </q-card-title>
        <q-card-main>
          <div>
            <p>$1588.00</p>
            <p>This is within budget boundries</p>
          </div>
        </q-card-main>
      </q-card>
    </div>
    <div class="status-remaining">
      <q-card inline class="q-ma-sm qcard">
        <q-card-title>
          Remaining Budget
          <span slot="subtitle">For February 2019</span>
        </q-card-title>
        <q-card-main>
          <div>
            <p>-$1588.00</p>
            <p>You have exceeded 4 budgets this month</p>
          </div>
        </q-card-main>
      </q-card>
    </div>

    <div class="add-transaction">
      <q-btn
        color="secondary"
        style="width:100%; height: 100%; margin-top: 0;"
        size="md"
        label="Add Transaction"
        @click="addTransactionModal = true"
      />
    </div>

    <div class="todo-payments">
      <q-card>
        <q-collapsible group="todo" label="To-Do's">
          <div>
            <q-list>
               <q-item v-for="item in monthlyExpenses" :key="item.value">
                <q-item-side>
                  <q-checkbox v-model="paidMonthlyExpenses" :val="item.value" color="secondary"/>
                </q-item-side>
                <q-item-main :label="`${item.label} $${item.cost}`"/>
                <q-item-side right>
                  <q-btn @click="updatePaidMonthlyExpenses(item.value)" dense size="md" color="negative" label="Delete"/>
                </q-item-side>
              </q-item>
            </q-list>
          </div>
        </q-collapsible>
        <span>{{paidMonthlyExpenses}}</span>
      </q-card>
    </div>
    <div class="line-graph">
      <money-chart :data="data"></money-chart>
    </div>

    <q-modal
      v-model="addTransactionModal"
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
            @click="addTransactionModal = false"
            label="Save"
          />
        </div>
      </q-modal-layout>
    </q-modal>
  </q-page>
</template>

<style>
.status-today {
  grid-area: today;
}
.status-month {
  grid-area: month;
}
.status-remaining {
  grid-area: remaining;
}
.add-transaction {
  grid-area: addnew;
}
.todo-payments {
  /* overflow: hidden; */
  grid-area: todo;
}
.line-graph {
  border: 1px solid black;
  max-height: 445px;
  overflow: scroll;
  grid-area: graph;
}
.grid {
  display: grid;
  margin: 10px;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 50px 1fr 1fr;

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  grid-template-areas:
    "today   month   remaining"
    "addnew  graph   graph    "
    "todo    graph   graph    "
    "todo    graph   graph    ";
  box-sizing: border-box;
}

.grid > div {
  /* background-color: paleturquoise; */
  /* border: 1px solid black; */
  box-sizing: border-box;

  text-align: center;
}
.qcard {
  margin: 0;
  width: 100%;
  height: 100%;
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
import MoneyChart from "../components/MoneyChart.js";
import { testGetters, testActions } from '../store/helpers'

export default {
  name: "PageDashboard",
  components: {
    MoneyChart
  },
  data() {
    return {
      tTitle: '',
      tNewCateogry: '',
      tAmount: undefined,
      tNewCategory: undefined,
      tDate: new Date(),
      tType: "expense",
      addTransactionModal: false,
      defaultSelectedCategory: "0",
      categoryOptions: [
        {
          label: "Select",
          value: "0"
        },
        {
          label: "Food",
          value: "1"
        },
        {
          label: "Drinks",
          value: "2"
        },
        {
          label: "Bills",
          value: "3"
        },
        {
          label: "Other",
          value: "4"
        }
      ],
      data: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: ["One", "Two", "Three"],
            backgroundColor: ["#020202", "#b2b2b2", "#c1c1c1"],
            data: [10, 20, 30]
          }
        ],
        option: {
          height: 130
        }
      },
    };
  },
  computed:{
    ...testGetters,
    printString(){
        // return this.$store.state;
    },
    testString(){
        // return this.$store.dispatch('example/testtest')
      },

      },
  methods:{
    ...testActions,
    updatePaidMonthlyExpenses(item){
      this.$store.dispatch('example/updatePaidMonthlyExpenses', item)
    },
    

    
  }
};
</script>

<template>
  <q-page class="budgets-grid">
    <div class="budgets-title">Your Budgets</div>
    <div class="new-budget">
      <q-btn color="secondary" size="md" label="Add New Budget" @click="addBudgetModal = true"/>
    </div>
    <div class="budgets">
      <div class="row gutter-sm">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="budget no-margin">
            <q-card-title>
              <span>
                <span>Coffee</span>
                <span class="percentage">$0.00 / $0.80</span>
              </span>
            </q-card-title>
            <q-card-main>
              <div class="progress">
                <q-progress :percentage="progressBuffer" height="13px"/>
              </div>
              <div class="buttons">
                <q-btn round color="negative" icon="delete"/>
                <q-btn round color="positive" icon="edit"/>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="budget q-ma-sm no-margin">
            <q-card-title>
              <span>
                <span>Entertainment</span>
                <span class="percentage">$0.00 / $0.80</span>
              </span>
            </q-card-title>
            <q-card-main>
              <div class="progress">
                <q-progress :percentage="progressBuffer" height="13px"/>
              </div>
              <div class="buttons">
                <q-btn round color="negative" icon="delete"/>
                <q-btn round color="positive" icon="edit"/>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="budget q-ma-sm no-margin">
            <q-card-title>
              <span>
                <span>Food</span>
                <span class="percentage">$0.00 / $0.80</span>
              </span>
            </q-card-title>
            <q-card-main>
              <div class="progress">
                <q-progress :percentage="progressBuffer" height="13px"/>
              </div>
              <div class="buttons">
                <q-btn round color="negative" icon="delete"/>
                <q-btn round color="positive" icon="edit"/>
              </div>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="budget q-ma-sm no-margin">
            <q-card-title>
              <span>
                <span>Total</span>
                <span class="percentage">$0.00 / $0.80</span>
              </span>
            </q-card-title>
            <q-card-main>
              <div class="progress">
                <q-progress :percentage="progressBuffer" height="13px"/>
              </div>
              <div class="buttons">
                <q-btn round color="negative" icon="delete"/>
                <q-btn round color="positive" icon="edit"/>
              </div>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
    <q-modal
      v-model="addBudgetModal"
      :content-css="{borderRadius: '6px',minWidth: '40vw', minHeight: '60vh'}"
    >
      <q-modal-layout>
        <div class="layout-padding">
          <q-input v-model="newCategory" float-label="New Category"/>
           <p class="caption">Category</p>
          <q-select
            class="category-selection"
            v-model="defaultSelectedCategory"
            :options="categoryOptions"
          />
          <q-input v-model="chosenAmount" float-label="Amount"/>
          <br>
          <br>
          <q-btn style="float:right" color="secondary" @click="addBudgetModal = false" label="Save"/>
        </div>
      </q-modal-layout>
    </q-modal>
  </q-page>
</template>

<style>
.budgets-title {
  width: 100%;
  padding-left: 35px;
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 110px;
  grid-area: title;
  justify-self: end;
}
.new-budget {
  align-self: center;
  grid-area: addBudget;
  justify-self: center;
}
.budgets {
  grid-area: budgets;
}
.budgets-grid {
  display: grid;
  margin: 10px;

  grid-template-rows: 110px 1fr;
  grid-template-columns: repeat(3, 1fr);

  grid-row-gap: 20px;

  grid-template-areas:
    "title   title   addBudget"
    "budgets budgets budgets";

  box-sizing: border-box;
}
.budgets-grid > div {
  /* background-color: paleturquoise; */
  /* border: 1px solid black; */
}
.budget {
  height: 145px;
}
.budgets-row {
  /* max-height: 130px !important; */
}
.percentage {
  float: right;
}
.q-card-main {
  max-height: 55%;
  clear: both;
}
.buttons {
  display: none;
  margin-top: 8px;
  padding: 2px;
  overflow: auto;
}
.buttons .q-btn {
  float: right;
  margin-left: 10px;
}
.budget:hover .buttons {
  display: block;
}
.progress {
  width: 300px;
}
.q-progress {
  border-radius: 7px;
}
.caption{
  padding: 0;
  margin: 0;
  margin-top: 9px;
}
</style>

<script>
export default {
  name: "PageBudgets",
  data() {
    return {
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
      progressBuffer: 15,
      addBudgetModal: false,
      newCategory: "",
      chosenCategory: "",
      chosenAmount: 0
    };
  }
};
</script>

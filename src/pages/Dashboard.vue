<template>
  <q-page class="grid">

    <div class="status-today">
      <q-card inline class="q-ma-sm">
        <q-card-title >
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
      <q-card inline class="q-ma-sm">
        <q-card-title>
          Spent this Month
          <span slot="subtitle">Activity on February 2019</span>
        </q-card-title>
        <q-card-main>
            <div>
            <p >$1588.00</p>
            <p>This is within budget boundries</p>
            </div>
        </q-card-main>
       </q-card>
    </div>
    <div class="status-remaining">
      <q-card inline class="q-ma-sm">
        <q-card-title>
          Remaining Budget
          <span slot="subtitle">Activity on February 2019</span>
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
      <q-btn color="secondary" style="width:100%; height: 100%; margin-top: 0;"
       size="sm" label="Add Transaction" />
    </div>

    <div class="todo-payments">
        <q-collapsible group="todo" label="To-Do's">
        <div>
          <q-list>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="one" color="secondary"  />
              </q-item-side>
              <q-item-main label="Internet $500" />
              <q-item-side right>
               <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="two" color="secondary"  />
              </q-item-side>
              <q-item-main label="Water $53" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="three" color="secondary"  />
              </q-item-side>
              <q-item-main label="Food $5500" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="four" color="secondary"  />
              </q-item-side>
              <q-item-main label="Gym $320" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="five" color="secondary"  />
              </q-item-side>
              <q-item-main label="Gas $125" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="six" color="secondary"  />
              </q-item-side>
              <q-item-main label="Partying $220" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side>
                <q-checkbox v-model="selection" val="seven" color="secondary"  />
              </q-item-side>
              <q-item-main label="Donation $15" />
              <q-item-side right>
                <q-btn dense size="md" color="negative" label="Delete" />
              </q-item-side>
            </q-item>
          </q-list>
        </div>
      </q-collapsible>
    </div>
    <div class="line-graph">
      <money-chart :data="data"></money-chart>
    </div>

  </q-page>
</template>

<style>
.status-today{
  grid-area: today;
}
.status-month{
  grid-area: month;
}
.status-remaining{
  grid-area: remaining;
}
.add-transaction{
  grid-area: addnew;
}
.todo-payments{
  /* overflow: hidden; */
  grid-area: todo;
}
.line-graph{
  border: 1px solid black;
  max-height: 445px;
  overflow: hidden;
  grid-area: graph;
}
.grid{
  display: grid;
  margin: 10px;

  grid-template-columns: repeat(3, 1fr) ;
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

.grid>div{
  /* background-color: paleturquoise; */
  /* border: 1px solid black; */
  box-sizing: border-box;

  text-align: center;
}
.q-card{
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
import MoneyChart from '../components/MoneyChart.js';

export default {
  name: 'PageDashboard',
  components: {
    MoneyChart,
  },
  data() {
    return {
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: ['One', 'Two', 'Three'],
          backgroundColor: ['#020202', '#b2b2b2', '#c1c1c1'],
          data: [10, 20, 30],
        }],
        option: {
          height: 130,
        },
      },
      selection: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
    };
  },
};
</script>

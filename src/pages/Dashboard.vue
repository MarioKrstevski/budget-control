<template>
  <q-page class="grid">

    <div class="status-today">
      <q-card color="light-blue-9">
        <q-card-title>
            <p>Spent Today</p>
             <q-card-separator />

            <span slot="subtitle">Activity on February 12, 2019</span>
        </q-card-title>
         <q-card-separator />
        <q-card-main>
         <p>$0.00</p>
         <span>That's the same as yesterday</span>
        </q-card-main>
      </q-card>
    </div>
    <div class="status-month">
      <q-card color="light-blue-9">
        <q-card-title>
            <p>Spent this Month</p>
             <q-card-separator />

            <span slot="subtitle">Activity in February 2019</span>
        </q-card-title>
         <q-card-separator />
        <q-card-main>
         <p>$55.00</p>
         <span>That's in budget boundries</span>
        </q-card-main>
      </q-card>
    </div>
    <div class="status-remaining">
      <q-card color="light-blue-9">
        <q-card-title>
            <p>Remaining Budget</p>
             <q-card-separator />

            <span slot="subtitle">For February, 2019</span>
        </q-card-title>
         <q-card-separator />
        <q-card-main>
         <p>-$30.00</p>
         <span>You've exceeded 4 budgets this month</span>
        </q-card-main>
      </q-card>
    </div>

    <div class="add-transaction">
      <q-btn color="secondary" style="width:100%; height: 100%; margin-top: 0;"
       size="sm" label="Add Transaction" />
    </div>

    <div class="todo-payments">Todo</div>
    <div class="line-graph">Graph</div>

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
  grid-area: todo;
}
.line-graph{
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
  border: 1px solid black;
  box-sizing: border-box;

  text-align: center;
}
</style>

<script>
export default {
  name: 'PageDashboard',
};
</script>

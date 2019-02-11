<template>
  <q-page class="grid">

    <div class="status-today">Today</div>
    <div class="status-month">Month</div>
    <div class="status-remaining">Remaining</div>

    <div class="add-transaction">
      <q-btn color="secondary" label="Add Transaction" />
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

.grid div{
  background-color: paleturquoise;
  box-sizing: border-box;

  text-align: center;
  padding-top: 10px;
}
</style>

<script>
export default {
  name: 'PageDashboard',
};
</script>

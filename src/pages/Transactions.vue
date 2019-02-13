<template>
  <q-page class="flex justify-center">
    <div class="transactions">
      <q-table
        :data="tableData"
        :columns="columns"
        selection="multiple"
        :selected.sync="selectedSecond"
        row-key="title"
        color="secondary"
        title="Transactions"
        table-class="tabletrans"
      >text
        <template slot="top-selection" slot-scope="props">
          <p class="table-title">Your Transactions</p>
          <div class="col"/>
          <q-select class="month-selection" v-model="select" :options="options" /> 
          <q-btn color="secondary" size="md" label="Add Transaction"/>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<style>
.transactions {
  display: grid;
  margin-top: 20px;
  width: 90%;
  /* border: 1px solid black; */
  height: fit-content;
}
.month-selection{
  min-width: 100px;
  width: 10vw;
  margin-right: 30px;
  border: 1px solid gray;
  padding-left: 20px;

}
.table-title{
  font-size: 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
export default {
  name: "PageTransactions",
  data() {
    return {
      select: '1',
      options: [
        {
          label: 'All',
          value: '0'
        },
        {
          label: 'January',
          value: '1'
        },
        {
          label: 'February',
          value: '2'
        },
        {
          label: 'March',
          value: '3'
        },
        {
          label: 'April',
          value: '4'
        },
        {
          label: 'May',
          value: '5'
        }
      ],
      tableData: [
        {
          title: "Pizza",
          date: "08.01.2019",
          category: "Food",
          amount: 55
        },
        {
          title: "Milk",
          date: "08.01.2019",
          category: "Food",
          amount: 24
        },
        {
          title: "Chips",
          date: "08.01.2019",
          category: "Food",
          amount: 10
        },
        {
          title: "Burger",
          date: "09.01.2019",
          category: "Food",
          amount: 85
        },
        {
          title: "Skopsko",
          date: "03.01.2019",
          category: "Drinks",
          amount: 23
        },
        {
          title: "Coca Cola",
          date: "18.01.2019",
          category: "Drinks",
          amount: 523
        },
        {
          title: "Electricity",
          date: "01.01.2019",
          category: "Bills",
          amount: 255
        },
        {
          title: "Water",
          date: "01.01.2019",
          category: "Bills",
          amount: 155
        },
        {
          title: "Internet",
          date: "01.01.2019",
          category: "Bills",
          amount: 35
        },
        {
          title: "Gym",
          date: "04.01.2019",
          category: "Other",
          amount: 200
        }
      ],
      columns: [
        {
          name: "date",
          required: true,
          label: "Date (created)",
          align: "left",
          field: "date",
          sortable: true,
          style: "min-width: 85px; width:9vw;"
        },
        {
          name: "title",
          label: "Title",
          field: "title",
          sortable: true,
          align: "left",
          style: "min-width: 125px; width:16vw;"
        },
        {
          name: "category",
          label: "Category",
          field: "category",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          align: "left",
          style: "min-width: 125px; width:10vw;"
        },
        {
          name: "amount",
          label: "Amount",
          field: "amount",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          align: "center",
          style: "min-width:55px; width:8vw; border:"
        }
      ],
      filter: "",
      visibleColumns: ["date", "title", "category", "amount"],
      separator: "horizontal",
      selection: "multiple",
      selected: [
        // initial selection
        { name: "Ice cream sandwich" }
      ],
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      selectedSecond: [{ name: "Eclair" }]
    };
  },
  watch: {
    "paginationControl.page"(page) {
      this.$q.notify({
        color: "secondary",
        message: `Navigated to page ${page}`,
        actions:
          page < 4
            ? [
                {
                  label: "Go to last page",
                  handler: () => {
                    this.paginationControl.page = 4;
                  }
                }
              ]
            : null
      });
    }
  },
  computed: {
    tableClass() {
      if (this.dark) {
        return "bg-black";
      }
    }
  },
  methods: {
    deleteRow() {
      this.$q.notify({
        color: "secondary",
        icon: "delete",
        message: `Will delete the selected row${
          this.selectedSecond.length > 1 ? "s" : ""
        } later, ok?`
      });
    }
  }
};
</script>

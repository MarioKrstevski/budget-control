<template>
  <q-page class="flex flex-center">
    <div class="transactions">
      <q-table
        :data="tableData"
        :columns="columns"
        selection="multiple"
        :selected.sync="selectedSecond"
        row-key="name"
        color="secondary"
        title="Transactions"
      >text
        <template slot="top-selection" slot-scope="props">
          <q-btn color="secondary" flat label="Action 1" class="q-mr-sm"/>
          <q-btn color="secondary" flat label="Action 2"/>
          <div class="col"/>
          <q-btn color="negative" flat round icon="delete" @click="deleteRow"/>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<style>
.transactions {
  display: grid;
}
</style>

<script>
export default {
  name: "PageTransactions",
  data() {
    return {
      tableData: [
        {
          title: 'Pizza',
          date: '08.01.2019',
          category: 'Food',
          amount: 55
        },
        {
          title: 'Milk',
          date: '08.01.2019',
          category: 'Food',
          amount: 24
        },
        {
          title: 'Chips',
          date: '08.01.2019',
          category: 'Food',
          amount: 10
        },
        {
          title: 'Burger',
          date: '09.01.2019',
          category: 'Food',
          amount: 85
        },
        {
           title: 'Skopsko',
          date: '03.01.2019',
          category: 'Drinks',
          amount: 23
        },
        {
           title: 'Coca Cola',
          date: '18.01.2019',
          category: 'Drinks',
          amount: 523
        },
        {
          title: 'Electricity',
          date: '01.01.2019',
          category: 'Bills',
          amount: 255
        },
        {
          title: 'Water',
          date: '01.01.2019',
          category: 'Bills',
          amount: 155
        },
        {
         title: 'Internet',
          date: '01.01.2019',
          category: 'Bills',
          amount: 35
        },
        {
          title: 'Gym',
          date: '04.01.2019',
          category: 'Other',
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
          sortable: true
        },
        {
          name: "title",
          label: "Title",
          field: "title",
          sortable: true
        },
        {
          name: "category",
          label: "Category",
          field: "category",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "amount",
          label: "Amount",
          field: "amount",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
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
      dark: true,
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

export default {
  state: {
    monthlyExpenses: [
      {
        value: 1,
        label:'Internet',
        cost:500
      },
      {
        value: 2,
        label:'Water',
        cost:53
      },
      {
        value: 3,
        label:'Food',
        cost:5500
      },
      {
        value: 4,
        label:'Gym',
        cost:320
      },
      {
        value: 6,
        label:'Gas',
        cost:125
      },
      {
        value: 7,
        label:'Donation',
        cost:15
      },
    ],
    paidMonthlyExpenses: [],
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
    transactions: [
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
    tableColumns: [
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
    
  },
};

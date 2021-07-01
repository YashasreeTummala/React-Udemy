import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "Stocks", price: 1000, date: new Date(2021, 6, 1) },
    { id: 1, title: "IPO", price: 500, date: new Date(2021, 6, 2) },
    { id: 1, title: "SIP", price: 100, date: new Date(2021, 6, 3) },
    { id: 1, title: "FD", price: 5000, date: new Date(2021, 6, 4) },
  ];

  return (
    <div>
      <ExpenseItem
        name={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        name={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        name={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        name={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

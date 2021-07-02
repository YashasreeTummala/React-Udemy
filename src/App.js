import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "Stocks", price: 1000, date: new Date(2021, 6, 1) },
    { id: 1, title: "IPO", price: 500, date: new Date(2021, 6, 2) },
    { id: 1, title: "SIP", price: 100, date: new Date(2021, 6, 3) },
    { id: 1, title: "FD", price: 5000, date: new Date(2021, 6, 4) },
  ];

  return (
    <Expenses items ={expenses} />
  );
}

export default App;

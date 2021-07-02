import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        name={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      />
      <ExpenseItem
        name={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpenseItem
        name={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      />
      <ExpenseItem
        name={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;

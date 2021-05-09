import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeSelect={filterYearChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expense;

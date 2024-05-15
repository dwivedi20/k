import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 50000,
    },
    {
      id: 2,
      text: "Rent",
      amount: -15000,
    },
    {
      id: 3,
      text: "Food",
      amount: -5000,
    },
    {
      id: 4,
      text: "Freelancing",
      amount: 10000,
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="container px-3 py-5">
        <BalanceSection transactions={transactions} />
        <Form />
        <ListGroup transactions={transactions} />
      </div>
    </>
  );
};

export default App;

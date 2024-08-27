// App.js
import React, { useEffect, useState } from "react";
import { fetchTransactionData } from "./api";
import { groupByMonth } from "./utils";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const transactions = await fetchTransactionData();
      const groupedData = groupByMonth(transactions);
      setData(transactions);
      setSummary(groupedData);
    };

    fetchData();
  }, []);

  const renderSummary = () => {
    return Object.entries(summary).map(([customerId, months]) => (
      <div key={customerId}>
        <h2>Customer {customerId}</h2>
        <ul>
          {Object.entries(months).map(([month, { points }]) => (
            <li key={month}>
              {month}: {points} points
            </li>
          ))}
        </ul>
        <p>
          Total Points:{" "}
          {Object.values(months).reduce((acc, { points }) => acc + points, 0)}
        </p>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Reward Points Summary</h1>
      {data ? renderSummary() : <p>Loading...</p>}
    </div>
  );
};

export default App;

//Data set created for customer 

export const fetchTransactionData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customerId: 1, date: "2024-06-15", amount: 120 },
          { customerId: 1, date: "2024-07-01", amount: 80 },
          { customerId: 1, date: "2024-08-05", amount: 60 },
          { customerId: 2, date: "2024-06-20", amount: 150 },
          { customerId: 2, date: "2024-07-10", amount: 40 },
          { customerId: 2, date: "2024-08-25", amount: 90 },
        ]);
      }, 1000);
    });
  };

// utils.js

//helper function created for calculation purpose

export const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
      points += 50; // for the first $50 (between $50 and $100)
    } else if (amount > 50) {
      points += amount - 50; // for the amount between $50 and $100
    }
    return points;
  };
  
  export const groupByMonth = (transactions) => {
    return transactions.reduce((acc, { customerId, date, amount }) => {
      const [year, month] = date.split("-");
      const key = `${year}-${month}`;
      if (!acc[customerId]) acc[customerId] = {};
      if (!acc[customerId][key])
        acc[customerId][key] = { points: 0, totalPoints: 0 };
  
      acc[customerId][key].points += calculatePoints(amount);
      acc[customerId][key].totalPoints += calculatePoints(amount);
  
      return acc;
    }, {});
  };

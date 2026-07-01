import React, { useMemo, useState } from "react";

const ExpensiveCard = () => {
  let [vals, setVals] = useState(10);

  const expensiveVaule = useMemo(() => {
    console.log("Started....");
    let total = 0;

    for (let i = 0; i < 1000; i++) {
      total += i;
      console.log(total)
    }

    return total + vals;
  },[vals]);

  return (
    <>
      <p>Counter Component</p>

      <p>{vals}</p>

      <p>{expensiveVaule}</p>

      <button
        onClick={() => {
          setVals(vals + 1);
          console.log(vals);
        }}>
        +
      </button>

      <button
        onClick={() => {
          setVals(vals - 1);
          console.log(vals);
        }}>
        -
      </button>
    </>
  );
};

export default ExpensiveCard;

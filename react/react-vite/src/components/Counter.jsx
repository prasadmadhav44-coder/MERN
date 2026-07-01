import { useState } from "react";

const Counter = () => {
  // let val = 0;

  let [vals, setVals] = useState(10);

  return (
    <>
      <p>Counter Component</p>

      <p>{vals}</p>

      <button
        onClick={() => {
          // val = val + 1;
          setVals(vals + 1);
          console.log(vals);
        }}>
        +
      </button>

      <button
        onClick={() => {
          // val = val + 1;
          setVals(vals - 1);
          console.log(vals);
        }}>
        -
      </button>
    </>
  );
};

export default Counter

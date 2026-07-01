import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [data, setData] = useState("Ram");

  const handleChange = (newData) => {
    setData(newData);
  };

  return (
    <>
      <div className="border border-red-400 py-5">
        <div>ComponentA</div>
        <p>ComponentA:{data}</p>

        <button onClick={() => setData("Sam")}>update Data</button>

        <ComponentB data={data} handleChange={handleChange} />
      </div>
    </>
  );
};

export default ComponentA;

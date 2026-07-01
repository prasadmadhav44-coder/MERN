import ComponentC from "./ComponentC";

const ComponentB = ({ data, handleChange }) => {
  return (
    <>
      <div className="border border-red-400 py-5">
        <div>ComponentB</div>
        <p>ComponentB:{data}</p>

        <button onClick={() => handleChange("Byeee")}>Update</button>

        <ComponentC data={data} />
      </div>
    </>
  );
};

export default ComponentB;

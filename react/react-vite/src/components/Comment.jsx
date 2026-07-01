import { useState } from "react";

const Comment = () => {
  let [name, setName] = useState();
  let [message, setMessage] = useState();

  // Object --> {name:"",message:""} - 1
  const [data, setData] = useState({ name: "", message: "" });

  const [val, setVal] = useState([]); // [{},{}]

  return (
    <>
      <p>Comment Components</p>

      <label>Name</label>
      <input
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />

      <label>Message</label>
      <textarea
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, message: e.target.value };
          })
        }
      />

      <button
        onClick={() =>
          setVal((prev) => {
            return [...prev, data];
          })
        }>
        Submit
      </button>

      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(val)}</p>
    </>
  );
};

export default Comment
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  //function syntax
  const [objectData, setObjectData] = useState([]);
  const [count, setCount] = useState(0);

  const searchText = () => 3 + 4;

  useEffect(() => {
    console.log("run 2");
  }, []);
  useEffect(() => {
    console.log("run 3");
  }, [objectData]);

  return (
    <div className="container p-3">
      <h1>{count}</h1>

      {objectData.map((item) => (
        <h2>{item}</h2>
      ))}
      <span
        onClick={() => {
          // const newArr = [...objectData];
          // newArr.push("B");
          // setObjectData(newArr);

          setObjectData([...objectData, "B"]);
        }}
      >
        Add
      </span>

      <h3
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add count
      </h3>
    </div>
  );
}

export default App;

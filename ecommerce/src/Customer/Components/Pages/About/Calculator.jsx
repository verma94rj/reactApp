import React, { useState } from "react";

function Calculator() {
  const [inputValue, setInputValue] = useState(1);
  const [inputValue2, setinputValue2] = useState(0);
  let [outvalue, setOutvalue] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleChange2 = (event) => {
    console.log("handleChange2:", event.target.value);
    setinputValue2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value
    console.log("Submitted 1st value:", inputValue);
    console.log("Submitted 2nd value:", inputValue2);
    // Reset the input value
    setInputValue(0);
    setinputValue2(0);
  };
  let addnum = () => {
    setOutvalue(parseInt(inputValue) + parseInt(inputValue2));
    console.log("added value :", outvalue);
  };
  let subnum = () => {
    setOutvalue(parseInt(inputValue) - parseInt(inputValue2));
    console.log(outvalue);
  };
  let mulnum = () => {
    setOutvalue(parseInt(inputValue) * parseInt(inputValue2));
    console.log(outvalue);
  };
  let divnum = () => {
    setOutvalue(parseInt(inputValue) / parseInt(inputValue2));
    console.log(outvalue);
  };
  return (
    <div>
      <h1> Calulator ------------- {outvalue}</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: "2px solid black" }}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a first value"
        />
        <p></p>
        <input
          style={{ border: "2px solid black" }}
          type="text"
          value={inputValue2}
          onChange={handleChange2}
          placeholder="Enter a second value"
        />
        <p> </p>
        <button onClick={addnum}> Add </button>
        <p></p>
        <button onClick={subnum}> Minus </button>
        <p></p>
        <button onClick={mulnum}> Multiply </button>
        <p></p>
        <button onClick={divnum}> Divide </button>
      </form>
    </div>
  );
}

export default Calculator;

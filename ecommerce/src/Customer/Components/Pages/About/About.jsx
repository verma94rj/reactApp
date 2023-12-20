import React from "react";
import Calculator from "./Calculator";
import { useEffect, useRef, useState } from "react";

const About = () => {
  // const activateLasers = () => {
  //   console.log("hello");
  // };

  // // const addingNum = () => {
  // //   console.log("hello");
  // // };
  // return (
  //   <div>
  //     <Calculator></Calculator>
  //     <button className="btn" onClick={activateLasers}>
  //       Activate Lasers
  //     </button>
  //     <input
  //       id="text"
  //       type="text"
  //       style={{ border: "2px solid black" }}
  //     ></input>

  //   </div>
  // );

  const [counter, setCounter] = useState(0);
  const [prevCounter, setPrevCounter] = useState(0);

  const prevValueRef = useRef(0);
  const inputRef = useRef();

  // let prevValue = 0;

  // useEffect(callbackFunction, dependencyARRAY);
  useEffect(() => {
    console.log("everytime");
  });

  useEffect(() => {
    console.log("first time");
  }, []);

  useEffect(() => {
    console.log("execute :: ", prevCounter);
  }, [prevCounter]);

  const handleIncrement = () => {
    // prevValueRef.current = counter;
    let value = counter + 1;
    setCounter(value);

    if (value % 2 === 0) {
      setPrevCounter(value);
    }
    // prevValueRef.current = value;
    // inputRef.current.focus();
    // inputRef.current.value = "My value";
    // inputRef.current.style.backgroundColor = "red";
  };

  return (
    <div className="">
      <h1></h1>
      <div>Prev value: {prevValueRef.current}</div>
      <div>Counter: {counter}</div>
      <span>Email</span>
      <textarea
        className="form-control"
        placeholder="Enter a value"
        type="text"
        ref={(node) => {
          inputRef.current = node;
        }}
      />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>
      {/* <button onClick={handleIncrement}>Increment</button> */}
    </div>
  );
};

export default About;

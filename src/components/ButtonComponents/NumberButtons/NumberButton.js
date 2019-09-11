import React from "react";
import './../../../App.css';

const NumberButton = (props) => {
  console.log(props)
  return (
    <button className="numbers_buttons">{props.numbers}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;

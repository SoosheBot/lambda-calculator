import React from "react";
import "./Numbers.css";

const NumberButton = (props) => {
  console.log(props);
  return (
    <button className="number_buttons">{props.numbers}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;

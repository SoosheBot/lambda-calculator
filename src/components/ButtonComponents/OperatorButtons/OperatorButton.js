import React, {useState} from "react";
import './../../../App.css';

const OperatorButton = (props) => {
  console.log("OP", props.operators);
  return (
    <button className="operators_buttons">{props.operators.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
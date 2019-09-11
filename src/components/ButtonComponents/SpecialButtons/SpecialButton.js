import React from "react";
import './../../../App.css';

const SpecialButton = (props) => {
  return (
    <button className="special_buttons">{props.specials}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
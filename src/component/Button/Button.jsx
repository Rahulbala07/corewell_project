import "./button.css";
import React from "react";

function Button({ text, shape, className = '', onClick }) {
  const buttonClass = shape === "round" ? "round" : "square";
  const isLearnMore = className.includes("learnmore");

  return (
    <button onClick={onClick} className={`${className} ${buttonClass} button`}>
      <span>
        {text}
        {isLearnMore && <i className="fas fa-arrow-right ms-2"></i>}
      </span>
    </button>
  );
}


export default Button;

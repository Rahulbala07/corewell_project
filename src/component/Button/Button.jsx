import "./button.css";
import React from "react";

function Button({ text, shape, className, onClick }) {
	const buttonclass = shape === "round" ? "round" : "square";
	return (
		<button onClick={onClick} className={`${className} ${buttonclass} button`}>
			<span>{text}</span>
		</button>
	);
}

export default Button;

import React from "react";
import "./CustomButton.css"; 

function CustomButton({ text }) {
    return (
        <button className="button">
            {text}
        </button>
    );
}

export default CustomButton;

import React from 'react';
import './Button.css'



function Button({text, type, onClick}) {

    const btnType = ["positive", "negative"].includes(type) ? type : "default";

    return (
        <button className={["Button", `Button_${btnType}`].join(" ")} 
        onClick={onClick}>
            {text}
        </button>
    );
}

Button.defaultProps = 
{
    type : "default"
}

export default Button;
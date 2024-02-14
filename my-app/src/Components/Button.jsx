import React from "react";

function Button (props) {
    const {text, className, onClick, disabled} = props
    return (
        <div  >
            <button type="submit"
                    className={className}
                    disabled={disabled}
                    onClick={onClick}
            >{text}</button>
        </div>
    );
}

export default Button;
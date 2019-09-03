import React from 'react';

const Button = ({ className, type, value, onClick }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}>
                {value}
        </button>
    );
};

export default Button;
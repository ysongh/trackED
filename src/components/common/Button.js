import React from 'react';

const Button = ({ id, type, value, onClick }) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}>
                {value}
        </button>
    );
};

export default Button;
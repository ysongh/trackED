import React from 'react';

const TextField = ({ id, name, value, type, placeholder, onChange }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
    );
};

export default TextField;
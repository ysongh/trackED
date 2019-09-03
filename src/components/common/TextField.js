import React from 'react';

const TextField = ({ className, name, value, type, placeholder, onChange }) => {
    return (
        <input
            className={className}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
    );
};

export default TextField;
import React from 'react';

function CustomInput({ type, placeholder, onChange }) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange}/>
  );
}

export default CustomInput;

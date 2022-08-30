import React from "react";
import "./index.css";

const Input = ({
   label,
   type,
   placeholder,
   value,
   onChange,
   errorMessage,
   error,
}) => {
   return (
      <div className="input">
         <label>{label}</label>
         <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         {error && <p className="error-message">{errorMessage}</p>}
      </div>
   );
};

export default Input;

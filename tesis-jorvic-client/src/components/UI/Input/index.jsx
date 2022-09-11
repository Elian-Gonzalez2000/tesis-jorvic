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
   className,
}) => {
   return (
      <div className={`input ${className ? className : ""}`}>
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

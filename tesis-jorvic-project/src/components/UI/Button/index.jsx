import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Button({ children, url, className, onClick }) {
   return (
      <>
         <button className={className && className} onClick={onClick}>
            {url ? <Link to={url}>{children}</Link> : children}
         </button>
      </>
   );
}

export default Button;

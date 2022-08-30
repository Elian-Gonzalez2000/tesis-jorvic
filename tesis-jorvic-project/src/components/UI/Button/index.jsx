import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Button({ children, url }) {
   return (
      <>
         <button>{url ? <Link to={url}>{children}</Link> : children}</button>
      </>
   );
}

export default Button;

import React from "react";
import "./index.css";

function Container(props) {
   return (
      <div className={`container ${props.className ? props.className : ""}`}>
         {props.children}
      </div>
   );
}

export default Container;

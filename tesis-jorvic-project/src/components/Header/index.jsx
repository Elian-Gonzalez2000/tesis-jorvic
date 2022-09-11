import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
   const token = window.localStorage.getItem("user");

   return (
      <nav className="nav-bar">
         <ul>
            {!token ? (
               <li>
                  <Link to="/login">Iniciar sesion</Link>
               </li>
            ) : (
               <li>
                  <Link to="/login" onClick={(e) => localStorage.clear()}>
                     Cerrar sesion
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default Header;

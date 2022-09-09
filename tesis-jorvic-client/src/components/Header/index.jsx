import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
   return (
      <nav className="nav-bar">
         <ul>
            <li>
               <Link to="/">Inicio</Link>
            </li>
            <li>
               <Link to="/actividades">Actividades</Link>
            </li>
            <li>
               <Link to="/timeline">Cronogramas</Link>
            </li>
            <li>
               <Link to="/login">Iniciar sesion</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Header;

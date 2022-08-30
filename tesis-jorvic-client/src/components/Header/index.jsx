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
               <Link to="/crear-actividad">Crear Actividad</Link>
            </li>
            <li>
               <Link to="/login">Iniciar sesion</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Header;

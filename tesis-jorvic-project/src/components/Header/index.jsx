import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
   const [sesion, setSesion] = useState(false);
   return (
      <nav className="nav-bar">
         <ul>
            {!sesion ? (
               <li>
                  <Link to="/login" onClick={(e) => setSesion(!sesion)}>
                     Iniciar sesion
                  </Link>
               </li>
            ) : (
               <li>
                  <Link to="/" onClick={(e) => setSesion(!sesion)}>
                     Cerrar sesion
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default Header;

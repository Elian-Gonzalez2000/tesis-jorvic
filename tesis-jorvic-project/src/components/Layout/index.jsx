import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Container from "../UI/Container/index";
import "./index.css";
/* import MenuHeader from "../MenuHeader";
 */
const Layout = (props) => {
   return (
      <>
         <Header />

         <Container>
            <div>
               <div className="sidebar">
                  <ul>
                     <li>
                        {" "}
                        <NavLink to={"/"}>Inicio</NavLink>{" "}
                     </li>
                     <li>
                        {" "}
                        <NavLink to={"/usuarios-registrados"}>
                           Usuarios
                        </NavLink>{" "}
                     </li>
                     <li>
                        {" "}
                        <NavLink to={"/actividades"}>Actividades</NavLink>{" "}
                     </li>
                  </ul>
               </div>
               <div style={{ marginLeft: "2rem", paddingTop: "20px" }}>
                  {props.children}
               </div>
            </div>
         </Container>
      </>
   );
};

export default Layout;

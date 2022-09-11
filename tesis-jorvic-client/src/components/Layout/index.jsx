import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
   return (
      <>
         <Header />
         {/* <MenuHeader /> */}
         {props.children}
         <Footer></Footer>
      </>
   );
};

export default Layout;

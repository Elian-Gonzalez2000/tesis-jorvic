import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "./index.css";
import axios from "../../helpers/axios";
import { useEffect } from "react";
import Header from "../../components/Header";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   let token = window.localStorage.getItem("user");

   const userLogin = (e) => {
      e.preventDefault();
      const user = {
         email,
         password,
         role: "admin",
      };

      axios
         .post("http://localhost:3001/api/admin/signin", { ...user })
         .then((res) => {
            //console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser({ ...token });
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };
   if (token) {
      console.log(user);
      return <Navigate to={"/"} replace={true} />;
   }

   return (
      <>
         <Header />
         <Container>
            <form onSubmit={userLogin}>
               <Input
                  label={"Usuario"}
                  type={"text"}
                  placeholder={"Ingresa tu Usuario"}
                  errorMessage={"Usuario incorrecto"}
                  value={email}
                  error={false}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Input
                  label={"Contraseña"}
                  type={"text"}
                  placeholder={"Ingresa tu Contraseña"}
                  errorMessage={"Contraseña incorrecta"}
                  value={password}
                  error={false}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Button>Ingresar</Button>
            </form>
         </Container>
      </>
   );
}

export default Login;

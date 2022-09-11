import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import "./index.css";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState(userData);
   const [error, setError] = useState("");

   const userLogin = (e) => {
      e.preventDefault();
      const user = {
         email,
         password,
      };
      useEffect(() => {
         /* axios.post() */
      }, []);
   };
   return (
      <Layout>
         <Container>
            <form>
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
               <button type="submit">Ingresar</button>
            </form>
         </Container>
      </Layout>
   );
}

export default Login;

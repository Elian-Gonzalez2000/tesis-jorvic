import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "./index.css";

function Login() {
   return (
      <Layout>
         <Container>
            <form>
               <Input
                  label={"Usuario"}
                  type={"text"}
                  placeholder={"Ingresa tu Usuario"}
                  errorMessage={"Usuario incorrecto"}
                  value={""}
                  error={false}
               />
               <Input
                  label={"Contraseña"}
                  type={"text"}
                  placeholder={"Ingresa tu Contraseña"}
                  errorMessage={"Contraseña incorrecta"}
                  value={""}
                  error={false}
               />
               <Button>Ingresar</Button>
            </form>
         </Container>
      </Layout>
   );
}

export default Login;

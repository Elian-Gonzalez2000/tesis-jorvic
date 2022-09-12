import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { useParams } from "react-router-dom";
import "./index.css";

function DeleteUsers() {
   const { useremail } = useParams();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [identificationCard, setIdentificationCard] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");
   const [user, setUser] = useState({});

   useEffect(() => {}, []);

   const handleClose = (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("firstName", firstName);
      form.append("lastName", lastName);
      form.append("email", email);
      form.append("identificationCard", identificationCard);
      form.append("username", `${firstName} ${lastName}`);
      form.append("password", password);
      form.append("role", role);
      //console.log(user.user.email);

      /* console.log([
         firstName,
         lastName,
         identificationCard,
         email,
         password,
         role,
      ]); */
      axios
         .delete(`/admin/user/${useremail}`, {
            firstName,
            lastName,
            identificationCard,
            username: `${firstName} ${lastName}`,
            email,
            password,
            role,
         })
         .then((res) => {
            console.log(res.data);
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };

   /*  useEffect(() => {
      axios
         .get(`/admin/user/${useremail}`)
         .then((res) => {
            setUser({ ...res.data[0] });
            setFirstName(res.data[0].firstName);
            setLastName(res.data[0].lastName);
            setIdentificationCard(res.data[0].identificationCard);
            setEmail(res.data[0].email);
            setPassword(res.data[0].hash_password);
            setRole(res.data[0].role);
            console.log([...res.data]);
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   }, []); */

   return (
      <Layout>
         <Container className={"create-users"}>
            <Button url={"/usuarios-registrados"} className={"return"}>
               Regresar
            </Button>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
               Editar Actividad
            </h2>
            <form onSubmit={handleClose}>
               <Input
                  label={"Primer nombre: "}
                  type={"text"}
                  placeholder={"Ingresa el primer nombre del usuario"}
                  errorMessage={"Nombre no valido"}
                  value={firstName}
                  error={false}
                  onChange={(e) => setFirstName(e.target.value)}
               />
               <Input
                  label={"Apellido: "}
                  type={"text"}
                  placeholder={"Ingresa el apellido del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={lastName}
                  error={false}
                  onChange={(e) => setLastName(e.target.value)}
               />
               <Input
                  label={"Numero de cedula: "}
                  type={"text"}
                  placeholder={"Ingresa el numero de cedula del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={identificationCard}
                  error={false}
                  onChange={(e) => setIdentificationCard(e.target.value)}
               />
               <Input
                  label={"Correo electronico: "}
                  type={"text"}
                  placeholder={"Ingresa el correo electronico del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={email}
                  error={false}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Input
                  label={"Password: "}
                  type={"text"}
                  placeholder={"Ingresa la contraseña del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={password}
                  error={false}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <div className="input" style={{ marginBottom: "2rem" }}>
                  <label>Rol del usuario:</label>
                  <select
                     className="form-control"
                     value={role}
                     onChange={(e) => setRole(e.target.value)}
                  >
                     <option>Selecciona el rol</option>
                     <option value="user">Usuario</option>
                     <option value="admin">Admin</option>
                  </select>
               </div>

               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default DeleteUsers;

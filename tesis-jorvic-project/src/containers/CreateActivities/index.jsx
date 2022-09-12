import React, { useState } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { Link } from "react-router-dom";
import "./index.css";

function CreateActivities() {
   const [name, setName] = useState("");
   const [date, setDate] = useState("");
   const [description, setDescription] = useState("");
   const [productPictures, setProductPictures] = useState([]);
   const user = JSON.parse(window.localStorage.getItem("user"));

   const handleProductPictures = (e) => {
      setProductPictures([...productPictures, e.target.files[0]]);
      //console.log(productPictures);
   };

   const handleClose = (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("name", name);
      form.append("date", date);
      form.append("description", description);
      console.log(user.user.email);
      form.append("createdByUser", user.user.email);

      for (let pic of productPictures) {
         form.append("productPicture", pic);
      }
      console.log(form);
      axios
         .post("activities", form)
         .then((res) => {
            console.log(res.data);
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };

   return (
      <Layout>
         <Container className={"create-activities"}>
            <Link to="/actividades" className="return">
               Regresar
            </Link>
            <h2>Crear Actividades</h2>
            <form onSubmit={handleClose}>
               <Input
                  label={"Nombre de Actividad: "}
                  type={"text"}
                  placeholder={"Ingresa el nombre de la actividad"}
                  errorMessage={"Nombre no valido"}
                  value={name}
                  error={false}
                  onChange={(e) => setName(e.target.value)}
               />
               <Input
                  label={"Fecha: "}
                  type={"text"}
                  placeholder={"Ingresa la fecha de la activdad: dd-mm-aa"}
                  errorMessage={"Fecha no valida"}
                  value={date}
                  error={false}
                  onChange={(e) => setDate(e.target.value)}
               />
               <div className="input">
                  <label>Ingresa tus imagenes: </label>
                  <input
                     type="file"
                     name="productPicture"
                     onChange={handleProductPictures}
                  />
               </div>
               <label style={{ marginTop: "1rem" }}>
                  Descripcion de la Actividad:{" "}
               </label>
               <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  onChange={(e) => setDescription(e.target.value)}
               >
                  {description}
               </textarea>
               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default CreateActivities;

import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import "./index.css";

function CreateActivities() {
   return (
      <Layout>
         <Container>
            <form>
               <Input
                  label={"Nombre de Actividad: "}
                  type={"text"}
                  placeholder={"Ingresa el nombre de la actividad"}
                  errorMessage={"Nombre no valido"}
                  value={""}
                  error={false}
               />
               <Input
                  label={"Area de Actividad: "}
                  type={"text"}
                  placeholder={"Ingresa el area de la actividad"}
                  errorMessage={"Nombre de area invalido"}
                  value={""}
                  error={false}
               />
               <Input
                  label={"Area de Actividad: "}
                  type={"text"}
                  placeholder={"Ingresa el area de la actividad"}
                  errorMessage={"Nombre de area invalido"}
                  value={""}
                  error={false}
               />
               <p style={{ marginTop: "1rem" }}>Descripcion de la Actividad</p>
               <textarea name="description" cols="30" rows="10"></textarea>
               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default CreateActivities;

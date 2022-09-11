import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import "./index.css";

function CreateTimeline() {
   return (
      <Layout>
         <Container>
            <h2>Crear Cronogramas</h2>
            <form className="create-timeline">
               <div>
                  <h4>Dia Lunes</h4>
                  <Input
                     label={"Dia: "}
                     type={"text"}
                     placeholder={"Ingresa el nombre de la actividad"}
                     errorMessage={"Nombre no valido"}
                     value={"Lunes"}
                     error={false}
                  />
                  <Input
                     label={"Contenido: "}
                     type={"text"}
                     placeholder={"Ingresa el contenido de la activadad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Estrategia: "}
                     type={"text"}
                     placeholder={"Ingresa las estrategias de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Recurso: "}
                     type={"text"}
                     placeholder={
                        "Ingresa los recursos utilizados para la actividad"
                     }
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Observaciones: "}
                     type={"text"}
                     placeholder={"Ingresa las observaciones de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Fecha: "}
                     type={"text"}
                     placeholder={"Ingresa la fecha la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
               </div>
               <div>
                  <h4>Dia Martes</h4>
                  <Input
                     label={"Dia: "}
                     type={"text"}
                     placeholder={"Ingresa el nombre de la actividad"}
                     errorMessage={"Nombre no valido"}
                     value={"Martes"}
                     error={false}
                  />
                  <Input
                     label={"Contenido: "}
                     type={"text"}
                     placeholder={"Ingresa el contenido de la activadad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Estrategia: "}
                     type={"text"}
                     placeholder={"Ingresa las estrategias de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Recurso: "}
                     type={"text"}
                     placeholder={
                        "Ingresa los recursos utilizados para la actividad"
                     }
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Observaciones: "}
                     type={"text"}
                     placeholder={"Ingresa las observaciones de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Fecha: "}
                     type={"text"}
                     placeholder={"Ingresa la fecha la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
               </div>
               <div>
                  <h4>Dia Miercoles</h4>
                  <Input
                     label={"Dia: "}
                     type={"text"}
                     placeholder={"Ingresa el nombre de la actividad"}
                     errorMessage={"Nombre no valido"}
                     value={"Miercoles"}
                     error={false}
                  />
                  <Input
                     label={"Contenido: "}
                     type={"text"}
                     placeholder={"Ingresa el contenido de la activadad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Estrategia: "}
                     type={"text"}
                     placeholder={"Ingresa las estrategias de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Recurso: "}
                     type={"text"}
                     placeholder={
                        "Ingresa los recursos utilizados para la actividad"
                     }
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Observaciones: "}
                     type={"text"}
                     placeholder={"Ingresa las observaciones de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Fecha: "}
                     type={"text"}
                     placeholder={"Ingresa la fecha la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
               </div>
               <div>
                  <h4>Dia Jueves</h4>
                  <Input
                     label={"Dia: "}
                     type={"text"}
                     placeholder={"Ingresa el nombre de la actividad"}
                     errorMessage={"Nombre no valido"}
                     value={"Jueves"}
                     error={false}
                  />
                  <Input
                     label={"Contenido: "}
                     type={"text"}
                     placeholder={"Ingresa el contenido de la activadad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Estrategia: "}
                     type={"text"}
                     placeholder={"Ingresa las estrategias de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Recurso: "}
                     type={"text"}
                     placeholder={
                        "Ingresa los recursos utilizados para la actividad"
                     }
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Observaciones: "}
                     type={"text"}
                     placeholder={"Ingresa las observaciones de la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
                  <Input
                     label={"Fecha: "}
                     type={"text"}
                     placeholder={"Ingresa la fecha la actividad"}
                     errorMessage={"Nombre de area invalido"}
                     value={""}
                     error={false}
                  />
               </div>
               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default CreateTimeline;

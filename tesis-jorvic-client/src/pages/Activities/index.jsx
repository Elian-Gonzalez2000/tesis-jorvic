import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import evidencias1 from "../../assets/evidencias1.jpg";
import "./index.css";

function Activities() {
   return (
      <Layout>
         <Container>
            <h2>Avtividades</h2>
            <Button url={"/actividades/crear-actividades"}>
               Crear actividad
            </Button>
            <section className="activities-section">
               <div className="activities-container">
                  <div className="activity-card">
                     <h4>Name</h4>
                     <p>fecha</p>
                     <p>Area</p>
                     <p>descripcion</p>
                     <img src={evidencias1} className="activity-img" />
                  </div>
                  <div className="activity-card">
                     <h4>Name</h4>
                     <p>fecha</p>
                     <p>Area</p>
                     <p>descripcion</p>
                     <img src={evidencias1} className="activity-img" />
                  </div>
                  <div className="activity-card">
                     <h4>Name</h4>
                     <p>fecha</p>
                     <p>Area</p>
                     <p>descripcion</p>
                     <img src={evidencias1} className="activity-img" />
                  </div>
               </div>
            </section>
         </Container>
      </Layout>
   );
}

export default Activities;

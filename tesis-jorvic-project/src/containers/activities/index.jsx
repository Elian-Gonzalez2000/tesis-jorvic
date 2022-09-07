import React from "react";
import Layout from "../../components/Layout";
import evidencias1 from "../../assets/evidencias1.jpg";
import "./index.css";

function Activities() {
   return (
      <Layout>
         <section className="activities-section">
            <div className="activities-container">
               <div className="activity-card">
                  <h4>Name</h4>
                  <p>fecha</p>
                  <p>Area</p>
                  <p>descripcion</p>
                  <p>creado por:</p>
                  <img src={evidencias1} className="activity-img" />
               </div>
               <div className="activity-card">
                  <h4>Name</h4>
                  <p>fecha</p>
                  <p>Area</p>
                  <p>descripcion</p>
                  <p>creado por:</p>
                  <img src={evidencias1} className="activity-img" />
               </div>
               <div className="activity-card">
                  <h4>Name</h4>
                  <p>fecha</p>
                  <p>Area</p>
                  <p>descripcion</p>
                  <p>creado por:</p>
                  <img src={evidencias1} className="activity-img" />
               </div>
            </div>
         </section>
      </Layout>
   );
}

export default Activities;

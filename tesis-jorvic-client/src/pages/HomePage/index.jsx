import React from "react";
import Layout from "../../components/Layout";
import logo from "../../assets/WhatsApp Image 2022-08-26 at 6.50.45 AM.jpeg";
import "./index.css";
import Container from "../../components/UI/Container";
import Button from "../../components/UI/Button";

const Home = () => {
   return (
      <Layout>
         <div className="hero-image">
            <aside className="hero-image-opacity">
               <div className="school-info">
                  <h3>Escuela Básica Nacional "Don Simón Rodríguez"</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Fuga facilis corrupti ut. Vel, aperiam eligendi!
                  </p>
                  <Button url={"/login"}>Iniciar sesion</Button>
               </div>
               <div className="school-logo">
                  <img src={logo} alt="logo" style={{ width: "400px" }} />
               </div>
            </aside>
         </div>
         <Container>
            <section className="about">
               <div>
                  <h2>Proposito de esta pagina</h2>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Quibusdam eius impedit molestias quod omnis optio amet
                     laudantium dolorum quam repudiandae. Quos minus nulla quas
                     assumenda fuga beatae obcaecati ducimus quia?
                  </p>
                  <button>Iniciar Sesion</button>
               </div>
            </section>
            <section className="activities">
               <h2>Actividades principales</h2>
               <div className="activities-container">
                  <div>
                     <h4>Coordinación del Centro de Recursos (CRA)</h4>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, eligendi!
                     </p>
                  </div>
                  <div>
                     <h4>Coordinación de Cultura</h4>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sed, veritatis.
                  </div>
                  <div>
                     <h4>
                        Coordinación de Corporación Nacional de Alimento Escolar
                        (CENAE)
                     </h4>
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vero, deserunt.
                     </p>
                  </div>
                  <div>
                     <h4>Coordinación manos a la siembra</h4>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad, vitae.
                     </p>
                  </div>
               </div>
            </section>
         </Container>
      </Layout>
   );
};

export default Home;

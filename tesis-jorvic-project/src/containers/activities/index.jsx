import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./index.css";
import Button from "../../components/UI/Button";
import axios from "../../helpers/axios";
import { urlImages } from "../../urlConfig";
import { Link } from "react-router-dom";

function Activities() {
   const [activitiesData, setActivitiesData] = useState([]);
   useEffect(() => {
      axios
         .get("/activities")
         .then((res) => {
            console.log(res.data);
            setActivitiesData([...res.data]);
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   }, []);
   return (
      <Layout>
         <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Actividades
         </h2>
         <Button url={"/actividades/crear-actividades"}>Crear actividad</Button>
         <section className="activities-section">
            <div className="activities-cards-container">
               {activitiesData &&
                  activitiesData.map((el, index) => {
                     //console.log(el.images);
                     return (
                        <Link key={index} to={`/actividades/${el.id}`}>
                           <div className="activity-card">
                              <h4>{el.name}</h4>
                              <p>{el.date}</p>
                              <p>{el.description}</p>
                              <img
                                 key={"image" + index}
                                 src={`${urlImages}${el.images.split(";")[1]}`}
                                 className="activity-img"
                                 alt={el.name}
                              />

                              {/* {el.images.split(";").map((image, indexImage) => {
                                 //console.log(image);
                                 return (
                                    image && (
                                       <>
                                          <img
                                             key={"image" + indexImage}
                                             src={`${urlImages}${image}`}
                                             className="activity-img"
                                             alt={el.name}
                                          />
                                       </>
                                    )
                                 );
                              })} */}
                           </div>
                        </Link>
                     );
                  })}
            </div>
         </section>
      </Layout>
   );
}

export default Activities;

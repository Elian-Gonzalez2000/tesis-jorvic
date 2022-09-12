import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import axios from "../../helpers/axios";
import { urlImages } from "../../urlConfig";
import "./index.css";

function ActivitiesDetails() {
   const { id } = useParams();
   const [details, setDetails] = useState({});
   useEffect(() => {
      axios.post(`activities/${id}`).then((res) => {
         setDetails({ ...res.data });
      });
   }, []);
   console.log(details);
   return (
      <Layout>
         <Container className={"activities-details-container"}>
            <h2>{details.name}</h2>
            <section>
               <div>
                  <span>Fecha:</span>
                  <p>{details.date}</p>
                  <span>Creado por:</span>
                  <p>{details.createdByUser}</p>
                  <span>Descripcion:</span>
                  <p>{details.description}</p>
               </div>

               {details !== {}
                  ? details?.images?.split(";").map((el, index) => {
                       return (
                          el && (
                             <div
                                className="details-images"
                                key={"image" + index}
                             >
                                <img
                                   src={`${urlImages}${el}`}
                                   className="activity-img"
                                   alt={details.name}
                                />
                             </div>
                          )
                       );
                    })
                  : null}

               {}
            </section>
         </Container>
      </Layout>
   );
}

export default ActivitiesDetails;

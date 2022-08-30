import React from "react";
import Layout from "../../components/Layout";
import "./index.css";

function HomePage() {
   return (
      <main>
         <Layout>
            <table>
               <tr>
                  <th>Actividad</th>
                  <th>Lugar</th>
                  <th>Fecha</th>
               </tr>
               <tr>
                  <td>Baile tradiconal</td>
                  <td>Patio</td>
                  <td>04/05/22</td>
               </tr>
            </table>
         </Layout>
      </main>
   );
}

export default HomePage;

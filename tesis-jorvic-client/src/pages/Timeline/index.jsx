import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import { useTable } from "react-table";
import useRows from "../../hooks/useRows";
import useColumns from "../../hooks/useColumns";
import "./index.css";
import Button from "../../components/UI/Button";

function Timeline() {
   const columns = useColumns();
   const data = useRows([
      {
         dias: "Lunes",
         contenido: "Brigada Bilivariana",
         actividades: "Himno nacional, pensamiento de  Bolivar  y efemerides.",
         estrategia: "Resultado de los estudiantes (exposicion)",
         recurso:
            "Docentes de Aula, Representantes, personal admnistrativo.  Materiales didacticos laminas, parabanes, Musica, todo tipo de decoracio, vistuario.",
         observaciones:
            "Cada actividad van comprendidas dependiendo el mes, se ajusta a las fechas de la efemirides para llevar dichos eventos culturales.",
         fechas: "1-06-2022 / 30-01-2022",
      },
      {
         dias: "Martes",
         contenido: "C.R.P de pintura",
         actividades:
            "Manualidades de crear y diseñar arte, dibujar,construir juegos didacticos",
         estrategia: "Dibujo, Poemas creados por los estudiantes",
         recurso:
            "Docentes de Aula, Representantes, personal admnistrativo.  Materiales didacticos laminas, parabanes, Musica, todo tipo de decoracio, vistuario.",
         observaciones:
            "Cada actividad van comprendidas dependiendo el mes, se ajusta a las fechas de la efemirides para llevar dichos eventos culturales.",
         fechas: "1-06-2022 / 30-01-2022",
      },
      {
         dias: "Miercoles",
         contenido: "Danza",
         actividades:
            "Practicar las danzas forcloricas, trabalenguas, poemas monologos exclamacion  ",
         estrategia: "Baliles y Obras teatrales par homenaje a los docentes",
         recurso:
            "Docentes de Aula, Representantes, personal admnistrativo.  Materiales didacticos laminas, parabanes, Musica, todo tipo de decoracio, vistuario.",
         observaciones:
            "Cada actividad van comprendidas dependiendo el mes, se ajusta a las fechas de la efemirides para llevar dichos eventos culturales.",
         fechas: "1-06-2022 / 30-01-2022",
      },
      {
         dias: "Jueves",
         contenido: "Teatro",
         actividades:
            "Obras teatrales de los Heroes de Venezuela, musica, nuestro patrimonio audio visual y cine foro",
         estrategia: "Cine foro (pelicula sobre los maestros ",
         recurso:
            "Docentes de Aula, Representantes, personal admnistrativo.  Materiales didacticos laminas, parabanes, Musica, todo tipo de decoracio, vistuario.",
         observaciones:
            "Cada actividad van comprendidas dependiendo el mes, se ajusta a las fechas de la efemirides para llevar dichos eventos culturales.",
         fechas: "1-06-2022 / 30-01-2022",
      },
      {
         dias: "Viernes",
         contenido: "Planificacion",
         actividades: "Planificacion",
         estrategia: "Planificacion",
         recurso: "Planificacion",
         observaciones: "Planificacion",
         fechas: "Planificacion",
      },
   ]);
   const table = useTable({ columns, data });
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      table;
   return (
      <Layout>
         <Container className={"timeline-container"}>
            <h2>Cronogramas de actividades</h2>
            <Button url="./crear-cronograma">Crear cronograma</Button>
            {/* Añadimos las propiedades a nuestra tabla nativa */}
            <table {...getTableProps()}>
               <thead>
                  {
                     // Recorremos las columnas que previamente definimos
                     headerGroups.map((headerGroup) => (
                        // Añadimos las propiedades al conjunto de columnas
                        <tr {...headerGroup.getHeaderGroupProps()}>
                           {
                              // Recorremos cada columna del conjunto para acceder a su información
                              headerGroup.headers.map((column) => (
                                 // Añadimos las propiedades a cada celda de la cabecera
                                 <th {...column.getHeaderProps()}>
                                    {
                                       // Pintamos el título de nuestra columna (propiedad "Header")
                                       column.render("Header")
                                    }
                                 </th>
                              ))
                           }
                        </tr>
                     ))
                  }
               </thead>
               {/* Añadimos las propiedades al cuerpo de la tabla */}
               <tbody {...getTableBodyProps()}>
                  {
                     // Recorremos las filas
                     rows.map((row) => {
                        // Llamamos a la función que prepara la fila previo renderizado
                        prepareRow(row);
                        return (
                           // Añadimos las propiedades a la fila
                           <tr {...row.getRowProps()}>
                              {console.log(row)}
                              {row.original.dias === "viernes"
                                 ? console.log(row)
                                 : // Recorremos cada celda de la fila
                                   row.cells.map((cell) => {
                                      // Añadimos las propiedades a cada celda de la fila
                                      return (
                                         <td {...cell.getCellProps()}>
                                            {
                                               // Pintamos el contenido de la celda
                                               cell.render("Cell")
                                            }
                                         </td>
                                      );
                                   })}
                           </tr>
                        );
                     })
                  }
               </tbody>
            </table>
         </Container>
      </Layout>
   );
}

export default Timeline;

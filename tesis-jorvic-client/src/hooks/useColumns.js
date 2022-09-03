import { useMemo } from "react";

export default function useColumns() {
   const columns = useMemo(
      () => [
         {
            Header: "Dias",
            accessor: "dias",
         },
         {
            Header: "Contenido",
            accessor: "contenido",
         },
         {
            Header: "Actividades",
            accessor: "actividades",
         },
         {
            Header: "Estrategia",
            accessor: "estrategia",
         },
         {
            Header: "Recurso",
            accessor: "recurso",
         },
         {
            Header: "Observaciones",
            accessor: "observaciones",
         },
         {
            Header: "Fechas",
            accessor: "fechas",
         },
      ],
      []
   );

   return columns;
}

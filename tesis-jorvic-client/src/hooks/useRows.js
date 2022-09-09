import { useMemo } from "react";

export default function useRows(data) {
   const rows = useMemo(
      () =>
         data.map((el, index) => {
            return {
               dias: el.dias,
               contenido: el.contenido,
               actividades: el.actividades,
               estrategia: el.estrategia,
               recurso: el.recurso,
               observaciones: el.observaciones,
               fechas: el.fechas,
            };
         }),
      []
   );

   return rows;
}

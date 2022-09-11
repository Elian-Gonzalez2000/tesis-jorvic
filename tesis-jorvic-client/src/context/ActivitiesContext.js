import { createContext } from "react";

const ActivitiesContext = createContext();

const ActivitiesProvider = ({ children }) => {
   const data = {};
   return <ActivitiesContext value={data}>{children}</ActivitiesContext>;
};

export { ActivitiesProvider };
export default ActivitiesContext;

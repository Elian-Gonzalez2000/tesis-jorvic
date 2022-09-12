import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import "./App.css";
import Users from "./containers/Users";
import Activities from "./containers/Activities";
import Login from "./containers/Login";
import PrivateRoute from "./components/HOC/PrivateRoute";
import CreateActivities from "./containers/CreateActivities";
import ActivitiesDetails from "./containers/ActivitiesDetails";
import CreateUsers from "./containers/CreateUsers";
import EditUsers from "./containers/EditUsers";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route
                  path="/"
                  exact
                  element={<PrivateRoute component={HomePage} />}
               />
               <Route
                  path="/actividades/crear-actividades"
                  exact
                  element={<CreateActivities />}
               />
               <Route
                  path="/actividades/:id"
                  exact
                  element={<ActivitiesDetails />}
               />
               <Route path="/actividades" exact element={<Activities />} />
               <Route
                  path="/usuarios-registrados/crear-usuarios"
                  exact
                  element={<CreateUsers />}
               />
               <Route
                  path="/usuarios-registrados/editar-usuario/:useremail"
                  exact
                  element={<EditUsers />}
               />
               <Route path="/usuarios-registrados" exact element={<Users />} />
               <Route path="/login" exact element={<Login />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;

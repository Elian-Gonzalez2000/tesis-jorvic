import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import "./App.css";
import Users from "./containers/Users";
import Activities from "./containers/Activities";
import Login from "./containers/Login";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" exact element={<HomePage />} />
               <Route path="/usuarios-registrados" exact element={<Users />} />
               <Route path="/actividades" exact element={<Activities />} />
               <Route path="/login" exact element={<Login />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;

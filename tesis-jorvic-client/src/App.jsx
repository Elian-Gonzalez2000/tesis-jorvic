import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreateActivities from "./pages/CreateActivities";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/login" exact element={<Login />} />
               <Route
                  path="/crear-actividad"
                  exact
                  element={<CreateActivities />}
               />
               <Route path="/" exact element={<HomePage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;

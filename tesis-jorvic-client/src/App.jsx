import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import CreateActivities from "./pages/CreateActivities";
import CreateTimeline from "./pages/CreateTimeline";
import Activities from "./pages/Activities";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/login" exact element={<Login />} />
               <Route path="/actividades" exact element={<Activities />} />
               <Route
                  path="/actividades/crear-actividades"
                  exact
                  element={<CreateActivities />}
               />
               <Route path="/timeline" exact element={<Timeline />} />
               <Route
                  path="/timeline/crear-cronograma"
                  exact
                  element={<CreateTimeline />}
               />
               <Route path="/" exact element={<HomePage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;

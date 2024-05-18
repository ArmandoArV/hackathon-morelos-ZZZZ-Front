import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/landing/Home";
import Registro from "./Pages/cuenta/Registro";
import Login from "./Pages/cuenta/Login";
import PersonalInfo from "./Pages/bot/PersonalInfo";
import Dashboard from "./Containers/Dashboard";
import Assistant from "./Pages/assistant/Assistant";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/informacion-personal" element={<PersonalInfo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;

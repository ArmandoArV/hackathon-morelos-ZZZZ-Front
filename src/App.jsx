import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/landing/Home";
import Registro from './Pages/cuenta/Registro';
import Login from "./Pages/cuenta/Login";
import InicioBot from "./Pages/bot/InicioBot";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/ >} />
            <Route path="/registro" element={<Registro/ >} />
            <Route path="/iniciar-sesion" element={<Login/ >} />
            <Route path="/informacion-personal" element={<InicioBot/ >} />
          </Routes>
        </Router>
      </>
    </div>
  );

}

export default App;

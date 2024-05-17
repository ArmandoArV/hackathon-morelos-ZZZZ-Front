import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/landing/Home";
import Registro from './Pages/cuenta/Registro'
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/ >} />
            <Route path="/registro" element={<Registro/ >} />
          </Routes>
        </Router>
      </>
    </div>
  );

}

export default App;

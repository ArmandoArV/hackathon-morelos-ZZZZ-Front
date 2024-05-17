import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Main/Main";
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;

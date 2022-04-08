import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Departments from "./components/Departments";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">React FrontEnd</h3>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/employees" element={<Employees />} exact />
          <Route path="/departments" element={<Departments />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

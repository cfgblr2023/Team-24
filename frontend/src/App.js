import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Missions from "./Components/Missions/Missions";
import { useState } from "react"
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [isInternAuthenticated, setIsInternAuthenticated] = useState(false)
  const [currentIntern, setCurrentIntern] = useState({});
  return (
    <Router>
      <Navbar isInternAuthenticated={isInternAuthenticated} setIsInternAuthenticated={setIsInternAuthenticated}/>
      <div>
        <Routes>
          <Route exact path="/" element={<h1>Homepage</h1>}></Route>
          <Route exact path="/about-us" element={<h1>About</h1>}></Route>
          <Route exact path="/missions" element={<Missions />}></Route>
          <Route exact path="/login" element={<Login setIsInternAuthenticated={setIsInternAuthenticated} setCurrentIntern={setCurrentIntern} />}></Route>
          <Route exact path="/dashboard" element={<Dashboard isInternAuthenticated={isInternAuthenticated} currentIntern={currentIntern} setCurrentIntern={setCurrentIntern} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

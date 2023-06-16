import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<h1>Homepage</h1>}></Route>
          <Route exact path="/about-us" element={<h1>About</h1>}></Route>
          <Route exact path="/missions" element={<h1>Missions</h1>}></Route>
          <Route exact path="/login" element={<h1>Login</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

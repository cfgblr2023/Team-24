import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import CreateResource from "./components/CreateResource";
import LearningPortal from "./Components/LearningPortal/LearningPortal";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* endpoints about and createResource created */}
          <Route path="/about" element={<About />} />
          {/* check authentication authenticated user can fill this form */}
          <Route path="/createResource" element={<CreateResource />} />
          <Route exact path="/learning-portal" element={<LearningPortal />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

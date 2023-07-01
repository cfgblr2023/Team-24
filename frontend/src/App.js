import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Authentication from "./components/ChatApplication/Authentication"
import ChatsPage from "./components/ChatApplication/ChatsPage"
import FundRaiser from "./components/FundRaiser";
import About from "./components/About";
import CreateResource from "./components/CreateResource";
import LearningPortal from "./Components/LearningPortal/LearningPortal";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/fund" element={<FundRaiser />} />

          
          {/* endpoints about and createResource created */}
          <Route path="/about" element={<About />} />
          {/* check authentication authenticated user can fill this form */}
          <Route path="/createResource" element={<CreateResource />} />
          <Route exact path="/learning-portal" element={<LearningPortal />}></Route>
        </Routes>
      
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Authentication from "./Components/ChatApplication/Authentication"
import ChatsPage from "./Components/ChatApplication/ChatsPage"
import FundRaiser from "./Components/FundRaiser";
import About from "./Components/About";
import CreateResource from "./Components/CreateResource";
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

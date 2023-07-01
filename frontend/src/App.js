import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Authentication from "./components/ChatApplication/Authentication"
import ChatsPage from "./components/ChatApplication/ChatsPage"
import FundRaiser from "./components/FundRaiser";

import Speech from "./components/Speech/Speech";
import "./components/Navbar.css"


import About from "./components/About";
import CreateResource from "./components/CreateResource";


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/fund" element={<FundRaiser />} />
          <Route path="/speech" element={<Speech />} />

          
          {/* endpoints about and createResource created */}
          <Route path="/about" element={<About />} />
          {/* check authentication authenticated user can fill this form */}
          <Route path="/createResource" element={<CreateResource />} />
        </Routes>
      
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Authentication from "./components/ChatApplication/Authentication"
import ChatsPage from "./components/ChatApplication/ChatsPage"
import FundRaiser from "./components/FundRaiser";


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/fund" element={<FundRaiser />} />

          
        </Routes>
      
    </Router>
  );
}

export default App;

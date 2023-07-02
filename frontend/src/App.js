import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Speech from "./Components/Speech/Speech";
import "./Components/Navbar.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Authentication from "./Components/ChatApplication/Authentication"
import ChatsPage from "./Components/ChatApplication/ChatsPage"
import FundRaiser from "./Components/FundRaiser";
import About from "./Components/About";
import CreateResource from "./Components/CreateResource";
import LearningPortal from "./Components/LearningPortal/LearningPortal";
import LearningPortalVolunteer from "./Components/LearningPortal/LearningPortalVolunteer";
import Contact from "./Components/Contact";
import Volunteer_offline from "./Components/Volunteer_offline";
import Women from "./Components/Women";
import Student_offline from "./Components/Student_offline";
import StudentLogin from "./Components/StudentLogin";
import Admin from "./Components/VideoRoom/Admin";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/offline" element={<Volunteer_offline />} />
          <Route path="/women" element={<Women />} />
          <Route path="/studentoffine" element={<Student_offline />} />
          <Route path="/studentLogin" element={<StudentLogin/>} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/about" element={<About />} />
          {/* check authentication authenticated user can fill this form */}
          <Route path="/createResource" element={<CreateResource />} />
          <Route exact path="/learning-portal" element={<LearningPortal />}></Route>
          <Route exact path="/learning-portal-volunteer" element={<LearningPortalVolunteer />}></Route>
        </Routes>
      
    </Router>
  );
}

export default App;

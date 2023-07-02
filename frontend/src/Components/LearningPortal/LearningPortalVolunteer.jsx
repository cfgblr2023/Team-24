/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import "./LearningPortal.css";
import VideoRoom from "../VideoRoom/VideoRoom";
import axios from "axios"
import Student_offline from "../Student_offline";

function LearningPortal() {
  const [currentView, setCurrentView] = useState("student");
  const [joined, setJoined] = useState(false);
  const [currentStudentView, setCurrentStudentView] = useState("list");
  const [courses, setCourses] = useState([]);
  const [classView, toggleClassView] = useState("online")
  const [currentUser, setCurrentUser] = useState({
    name: "Yash Seth",
    id: "1001",
  });
  const data = [
    { courseName: "abc", courseID: "123" },
    { courseName: "xyz", courseID: "124" },
    { courseName: "ijk", courseID: "125" },
    { courseName: "pqr", courseID: "126" },
  ];

  const fetchFiles = async (e) => {
    // e.preventDefault();
    await axios.get("http://127.0.0.1:8000/api/get-files")
    .then((courses) => {console.log(courses.data);setCourses(courses.data)})
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log("I was here")
    fetchFiles()
  }, [])
  

  const [currentCourse, setCurrentCourse] = useState();

  const toggleView = (view) => {
    setCurrentStudentView(view);
  };
  return (
    <div className="learning-portal-main">
        <>
          <div><h4>Volunteer View</h4></div>
          {!joined && (
                  <button className="button-3" onClick={() => setJoined(true)}>Connect to Student</button>
                )}

                {joined && (
                  <>
                    <button className="button-3" onClick={() => setJoined(false)}>Leave call</button>
                    <VideoRoom />
                  </>
                )}
                <a href="http://localhost:3000/createResource"><button className="button-3">Create Course Resource</button></a>
        </>
    </div>
  );
}

export default LearningPortal;

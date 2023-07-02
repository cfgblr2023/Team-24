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
      {currentView === "student" && (
        <>
          <h4>Welcome {currentUser.name}</h4>
          <div className="view-btns">
            <button className="button-3" onClick={() => toggleView("enrolled")}>
              Enrolled Courses
            </button>
            <button className="button-3" onClick={() => toggleView("list")}>View Courses</button>
          </div>
          {currentStudentView === "list" && 
          <div className="class-btn">
            <button className="button-13" onClick={() => toggleClassView("offline")}>Offline</button>
            <button className="button-13" onClick={() => toggleClassView("online")}>Online</button>
          </div>
          }
          <div className="course-list">
            {currentStudentView === "list" && classView === "online" && (
              <>
                {courses.map((course, index) => {
                  return (
                    <div className="course-details" key={index}>
                      <p>
                        <b>Course ID:</b>
                        {course._id}
                      </p>
                      <p>
                        <b>Course Name:</b>
                        {course.name}
                      </p>
                      <p>
                        <button
                          onClick={() => {
                            setCurrentCourse(course.courseName);
                          }}
                        >
                          Enroll
                        </button>
                      </p>
                      <iframe
                        width="400"
                        height="200"
                        src={course.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  );
                })}
              </>
            )}
            {currentStudentView === "list" && classView === "offline" && 
            (<div>
                <Student_offline />
              </div>
              )}
          </div>
          {currentStudentView === "enrolled" && (
            <>
              <div className="course-resources">
                <h4>
                  You are currently enrolled to course: <b>{currentCourse}</b>
                </h4>
                {!joined && (
                  <>
                    <button onClick={() => setJoined(true)}>Connect with Teacher</button>
                    <button><a href="https://meet.google.com/fwr-watn-cvo" target="_blank" rel="noreferrer">Join Live Session</a></button>
                  </>
                )}

                {joined && (
                  <>
                    <button onClick={() => setJoined(false)}>Leave Call</button>
                    <VideoRoom />
                  </>
                )}
                <p>
                  <b>Resources</b>
                </p>
                {courses.map((course, index) => {
                  return (
                    <iframe
                      key = {index}
                      width="400"
                      height="200"
                      src={course.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  )
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default LearningPortal;

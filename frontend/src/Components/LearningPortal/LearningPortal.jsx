import React from "react";
import { useState, useRef } from "react";
import "./LearningPortal.css";
import VideoRoom from "../VideoRoom/VideoRoom";

function LearningPortal() {
  const [currentView, setCurrentView] = useState("student");
  const [joined, setJoined] = useState(false);
  const [currentStudentView, setCurrentStudentView] = useState("list");
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

  const [currentCourse, setCurrentCourse] = useState();

  const toggleView = (view) => {
    setCurrentStudentView(view);
  };
  return (
    <div className="learning-portal-main">
    {<>
        <button onClick={() => setCurrentView("volunteer")}>Volunteer</button>
        <button onClick={() => setCurrentView("student")}>Student</button>
    </>}
      {currentView === "student" && (
        <>
          <p>Welcome {currentUser.name}</p>
          <button onClick={() => toggleView("enrolled")}>
            Enrolled Courses
          </button>
          <button onClick={() => toggleView("list")}>View Courses</button>
          <button onClick={() => toggleView("compelted")}>Completed</button>
          <div className="course-list">
            {currentStudentView === "list" && (
              <>
                {data.map((course, index) => {
                  return (
                    <div className="course-details" key={index}>
                      <p>
                        <b>Course ID:</b>
                        {course.courseID}
                      </p>
                      <p>
                        <b>Course Name:</b>
                        {course.courseName}
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
                        src={`https://www.youtube.com/embed/UGFZcD7NYZk`}
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
          </div>
          {currentStudentView === "enrolled" && (
            <>
              <div className="course-resources">
                <p>
                  You are currently enrolled to course: <b>{currentCourse}</b>
                </p>
                {!joined && (
                  <button onClick={() => setJoined(true)}>Connect with Teacher</button>
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
                <ul>
                  <li>
                    <iframe
                      width="400"
                      height="200"
                      src={`https://www.youtube.com/embed/UGFZcD7NYZk`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </li>
                  <li>
                    <iframe
                      width="400"
                      height="200"
                      src={`https://www.youtube.com/embed/UGFZcD7NYZk`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </li>
                  <li>
                    <iframe
                      width="400"
                      height="200"
                      src={`https://www.youtube.com/embed/UGFZcD7NYZk`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </li>
                  <li>
                    <iframe
                      width="400"
                      height="200"
                      src={`https://www.youtube.com/embed/UGFZcD7NYZk`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      )}
      {currentView === "volunteer" && (
        <>
          <div>Volunteer View</div>
          {!joined && (
                  <button onClick={() => setJoined(true)}>Connect to Student</button>
                )}

                {joined && (
                  <>
                    <button onClick={() => setJoined(false)}>Leave call</button>
                    <VideoRoom />
                  </>
                )}
        </>
      )}
    </div>
  );
}

export default LearningPortal;
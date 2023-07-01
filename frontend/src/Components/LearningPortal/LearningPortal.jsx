import React from 'react'
import { useState } from 'react'
import "./LearningPortal.css"

function LearningPortal() {
    const [currentView, setCurrentView] = useState("volunteer")
    const [currentStudentView, setCurrentStudentView] = useState("list")
    const [currentUser, setCurrentUser] = useState({name: "Yash Seth", id: "1001"})
    const data = [
        {courseName: "abc", courseID: "123"},
        {courseName: "xyz", courseID: "124"},
        {courseName: "ijk", courseID: "125"},
        {courseName: "pqr", courseID: "126"},
    ]

    const [currentCourse, setCurrentCourse] = useState()

    const toggleView = (view) => {
        setCurrentStudentView(view)
    }
  return (
    <div className='learning-portal-main'>
        <p>Welcome {currentUser.name}</p>
                <button onClick={() => toggleView("enrolled")}>Enrolled Courses</button>
                <button onClick={() => toggleView("list")}>View Courses</button>
                <button onClick={() => toggleView("compelted")}>Completed</button>
        {currentView === "volunteer" && currentStudentView === "list" && <>
            <div>
                <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Mission Name</th>
                      </tr>
                    </thead>
                    <tbody>
                        {data.map((course, index) => {
                            return (
                                <tr key={index}>
                                    <td>{course.courseID}</td>
                                    <td>{course.courseName}</td>
                                    <td><button onClick={() => {setCurrentCourse(course.courseName)}}>Enroll</button></td>
                                </tr>
                            )
                        })}
                  </tbody>
                </table>
            </div>
        </>}
        {currentView === "volunteer" && currentStudentView === "enrolled" && <>
            <div>
                <p>You are currently enrolled {currentCourse}</p>{}
            </div>
        </>}
    </div>
  )
}

export default LearningPortal
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Circles } from "react-loader-spinner";

function Dashboard() {
  const [adminView, setAdminView] = useState("create");
  const [internView, setInternView] = useState("current");
  const [update, setUpdate] = useState(false);
  const [currentMission, setCurrentMission] = useState({});
  const [missions, setMissions] = useState([]);
  const [currentIntern, setCurrentIntern] = useState({
    id: "1001",
    name: "Yash Seth",
  });
  const [internships, setInternships] = useState([]);
  const [newMission, setNewMission] = useState({
    name: "",
    about: "",
    type: "",
    vacancy: "",
    status: "ongoing",
  });

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    fetchMissions();
    fetchInternships("ongoing");
  }, []);

  const addMission = async () => {
    if (
      newMission.name === "" ||
      newMission.about === "" ||
      newMission.type === ""
    ) {
      alert("Please enter valid data htmlFor the mission!");
      setNewMission({
        name: "",
        about: "",
        type: "",
        vacancy: "",
        status: "ongoing",
      });
      return;
    } else {
      await axios
        .post("http://127.0.0.1:5000/api/add-mission", newMission)
        .then(alert("New Mission successfully added!"))
        .catch((e) =>
          console.log(
            "There is an error with the backend. Please refresh or try again later if the problem persists."
          )
        );
      setNewMission({
        name: "",
        about: "",
        type: "",
        vacancy: "",
        status: "ongoing",
      });
      fetchMissions();
    }
  };

  const fetchMissions = async (missionState) => {
    await axios
      .post("http://127.0.0.1:5000/api/get-missions", {
        missionState: missionState
      })
      .then((missionsList) => setMissions(missionsList.data))
      .catch((e) =>
        console.log(
          "There is an error with the backend. Please refresh or try again later if the problem persists."
        )
      );
  };

  const deleteMission = async (e) => {
    await axios
      .post("http://127.0.0.1:5000/api/delete-mission", {
        missionID: missions[e.target.value]._id,
      })
      .then(alert("Mission was deleted"))
      .catch((err) => alert(err));
    fetchMissions();
  };

  const handleFormChange = (e) => {
    if (e.target.name === "name")
      setNewMission({ ...newMission, name: e.target.value });
    else if (e.target.name === "about")
      setNewMission({ ...newMission, about: e.target.value });
    else if (e.target.name === "type")
      setNewMission({ ...newMission, type: e.target.value });
    else if (e.target.name === "vacancy")
      setNewMission({ ...newMission, vacancy: e.target.value });
  };

  const handleUpdateOperation = (e) => {
    setCurrentMission(missions[e.target.value]);
    setUpdate(true);
  };

  const updateMission = async (e) => {
    await axios
      .post("http://127.0.0.1:5000/api/update-mission", currentMission)
      .then(alert("Update was successful"))
      .catch((e) => alert(e));
    setUpdate(false);
    setCurrentMission({});
    fetchMissions();
  };

  const handleUpdateFormChange = (e) => {
    if (e.target.name === "name")
      setCurrentMission({ ...currentMission, name: e.target.value });
    else if (e.target.name === "about")
      setCurrentMission({ ...currentMission, about: e.target.value });
    else if (e.target.name === "type")
      setCurrentMission({ ...currentMission, type: e.target.value });
    else if (e.target.name === "vacancy")
      setCurrentMission({ ...currentMission, vacancy: e.target.value });
  };

  const applyInternship = async (e) => {
    if (internships.length === 1) {
      alert("You may only have one internship at any point of time!");
      return;
    }
    await axios
      .post("http://127.0.0.1:5000/api/apply", {
        internID: currentIntern.id,
        missionID: missions[e.target.value]._id,
        currentVacancy: missions[e.target.value].vacancy
      })
      .then(alert("You have successfully applied for the internship."))
      .catch((e) => alert(e));
      fetchMissions("ongoing")
  };

  const fetchInternships = async (type) => {
    await axios
      .post("http://127.0.0.1:5000/api/get-internships", {
        internID: currentIntern.id,
        type: type,
      })
      .then((internships) => setInternships(internships.data))
      .catch((e) => alert(e));
  };

  const completeInternship = async () => {
    await axios
      .post("http://127.0.0.1:5000/api/complete-internship", {
        internshipID: internships[0]._id,
      })
      .then(() => alert("Internship Complete"))
      .catch((e) => alert(e));
    fetchInternships("ongoing");
  };

  return (
    <>
      {isLoading && (
        <div className="content-loader">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      {!isLoading && (
        <div className="dashboard-main">
          {localStorage.getItem("auth-role") === "admin" && isAuthenticated ? (
            <>
              <div className="admin-controls">
                <button
                  className="admin-view-controls"
                  onClick={() => {
                    setAdminView("create");
                    fetchMissions();
                  }}
                >
                  Create Missions
                </button>
                <button
                  className="admin-view-controls"
                  onClick={() => {
                    setAdminView("missions");
                    fetchMissions();
                  }}
                >
                  Manage Missions
                </button>
                <button
                  className="admin-view-controls"
                  onClick={() => {
                    setAdminView("interns");
                    fetchMissions();
                  }}
                >
                  Manage Interns
                </button>
              </div>
              <div className="admin-content">
                {update && (
                  <div className="update-form">
                    <h2>Update Mission</h2>
                    <label htmlFor="mission-id">
                      Mission ID: {currentMission._id}
                    </label>
                    <label htmlFor="mission-name">Mission Name</label>
                    <input
                      id="mission-name"
                      value={currentMission.name}
                      name="name"
                      onChange={(e) => handleUpdateFormChange(e)}
                    />
                    <label htmlFor="mission-about">About</label>
                    <input
                      id="mission-about"
                      value={currentMission.about}
                      name="about"
                      onChange={(e) => handleUpdateFormChange(e)}
                    />
                    <label htmlFor="mission-type">Type</label>
                    <input
                      id="mission-type"
                      value={currentMission.type}
                      name="type"
                      onChange={(e) => handleUpdateFormChange(e)}
                    />
                    <label htmlFor="mission-vacancy">Vacancy</label>
                    <input
                      id="mission-vacancy"
                      value={currentMission.vacancy}
                      name="vacancy"
                      onChange={(e) => handleUpdateFormChange(e)}
                    />
                    <button id="add-mission" onClick={(e) => updateMission(e)}>
                      Update
                    </button>
                  </div>
                )}
                {adminView === "create" && (
                  <div className="add-mission-form">
                    <label htmlFor="mission-name">Mission Name</label>
                    <input
                      id="mission-name"
                      value={newMission.name}
                      name="name"
                      onChange={(e) => handleFormChange(e)}
                    />
                    <label htmlFor="mission-about">About</label>
                    <input
                      id="mission-about"
                      value={newMission.about}
                      name="about"
                      onChange={(e) => handleFormChange(e)}
                    />
                    <label htmlFor="mission-type">Type</label>
                    <input
                      id="mission-type"
                      value={newMission.type}
                      name="type"
                      onChange={(e) => handleFormChange(e)}
                    />
                    <label htmlFor="mission-vacancy">Vacancy</label>
                    <input
                      id="mission-vacancy"
                      value={newMission.vacancy}
                      name="vacancy"
                      onChange={(e) => handleFormChange(e)}
                    />
                    <button id="add-mission" onClick={() => addMission()}>
                      Add
                    </button>
                  </div>
                )}
                {adminView === "missions" && (
                  <div className="missions-list-admin">
                    <table>
                      <tr>
                        <th>ID</th>
                        <th>Mission Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Vacancy</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                      {missions.map((mission, index) => {
                        return (
                          <tr key={index}>
                            <td>{mission._id}</td>
                            <td>{mission.name}</td>
                            <td>{mission.about}</td>
                            <td>{mission.type}</td>
                            <td>{mission.vacancy}</td>
                            <td>{mission.status}</td>
                            <td>
                              <button
                                value={index}
                                onClick={(e) => deleteMission(e)}
                              >
                                Delete
                              </button>
                              <button
                                value={index}
                                onClick={(e) => handleUpdateOperation(e)}
                              >
                                Update
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                )}
                {adminView === "interns" && <div>Interns View</div>}
              </div>
            </>
          ) : localStorage.getItem("auth-role") === "intern" &&
            isAuthenticated ? (
            <div className="intern-main">
              <div className="intern-header">
                <h2>Dashboard</h2>
                <h3>Hi {currentIntern.name}</h3>
              </div>
              <div className="intern-controls">
                <button
                  className="intern-control-btn"
                  onClick={() => {
                    setInternView("current");
                    fetchInternships("ongoing");
                  }}
                >
                  Current Internship
                </button>
                <button
                  className="intern-control-btn"
                  onClick={() => {setInternView("apply"); fetchMissions("ongoing")}}
                >
                  Apply for internship
                </button>
                <button
                  className="intern-control-btn"
                  onClick={() => {
                    setInternView("history");
                    fetchInternships("complete");
                  }}
                >
                  History
                </button>
              </div>
              <div className="intern-content">
                {internView === "current" && (
                  <div className="current-internship">
                    <div className="current-internship-header">
                      <h4>Internship Details</h4>
                    </div>
                    <div className="current-internship-details">
                      {internships.length === 1 ? (
                        <>
                          <p>{internships[0]._id}</p>
                          <button onClick={() => completeInternship()}>
                            Complete
                          </button>
                        </>
                      ) : (
                        <p>Please apply for an internship first!</p>
                      )}
                    </div>
                  </div>
                )}
                {internView === "apply" && (
                  <div className="intern-apply-view">
                    <table>
                      <tr>
                        <th>ID</th>
                        <th>Mission Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Vacancy</th>
                        <th>Actions</th>
                      </tr>
                      {missions.map((mission, index) => {
                        return (
                          mission.vacancy !== 0 && <tr key={index}>
                            <td>{mission._id}</td>
                            <td>{mission.name}</td>
                            <td>{mission.about}</td>
                            <td>{mission.type}</td>
                            <td>{mission.vacancy}</td>
                            <td>
                              <button
                                value={index}
                                onClick={(e) => applyInternship(e)}
                              >
                                Apply
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                )}
                {internView === "history" && (
                  <div className="intern-history">
                    <table>
                      <th>Internship ID</th>
                    </table>
                    {internships.map((internship, index) => {
                      return (
                        <tr key={index}>
                          <td>{internship._id}</td>
                        </tr>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div id="login-error-message">
              Please login to get access to the dashboard!
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;

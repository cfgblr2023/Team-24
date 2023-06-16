import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Missions.css"
import { useAuth0 } from "@auth0/auth0-react";

function Missions({ role }) {
    const [newMission, setNewMission] = useState({name: "", about: "", type: "", vacancy: 0, status: "ongoing"})
    const [missions, setMissions] = useState([])
    const { logout, user, isAuthenticated, isLoading } = useAuth0();

    const getMissions = async () => {
        await axios.get("http://127.0.0.1:5000/api/get-missions")
        .then((missionsList) => setMissions(missionsList.data))
        .catch((e) => console.log("There is an error with the backend. Please refresh or try again later if the problem persists."))
    }

    const addMission = async () => {
        if(newMission.name === "" || newMission.about === "" || newMission.type === "") {
            alert("Please enter valid data for the mission!")
            return
        }
        else {
            await axios.post("http://127.0.0.1:5000/api/add-mission", newMission)
            .catch((e) => console.log("There is an error with the backend. Please refresh or try again later if the problem persists."))
            getMissions()
        }
    }

    const handleFormChange = (e) => {
        if(e.target.name === "name") setNewMission({...newMission, name: e.target.value})
        else if(e.target.name === "about") setNewMission({...newMission, about: e.target.value})
        else if(e.target.name === "type") setNewMission({...newMission, type: e.target.value})
        else if(e.target.name === "vacancy") setNewMission({...newMission, vacancy: e.target.value})
    }

    //on first render
    useEffect(() => {
        getMissions()
    }, [])
    
  return (
    <div className='missions-main'>
        {isAuthenticated && <div className='add-mission-form'>
                <label for="mission-name">Mission Name</label>
                <input id="mission-name" value={newMission.name} name="name" onChange={(e) => handleFormChange(e)}/>
                <label for="mission-about">About</label>    
                <input id="mission-about" value={newMission.about} name="about" onChange={(e) => handleFormChange(e)} />
                <label for="mission-type">Type</label>
                <input id="mission-type" value={newMission.type} name="type" onChange={(e) => handleFormChange(e)} />
                <label for="mission-vacancy">Vacancy</label>
                <input id="mission-vacancy" value={newMission.vacancy} name="vacancy" onChange={(e) => handleFormChange(e)} />
                <button id="add-mission" onClick={() => addMission()}>Add</button>
            </div>}
        <div className='missions-list'>
        <h3>Missions List</h3>
        {missions.map((mission, index) => {
            return(
            <div key={index} className='mission'>
                <div>
                    <b>Mission Name: </b>{mission.name}
                </div>
                <div>
                    <b>About: </b>{mission.about}
                </div>
                <div>
                    <b>Type: </b>{mission.type}
                </div>
                <div>
                    <b>Vacancy: </b>{mission.vacancy}
                </div>
            </div>
        )})}
        </div>
    </div>
  )
}

export default Missions
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Missions.css"
import { useAuth0 } from "@auth0/auth0-react";

function Missions() {
    const [newMission, setNewMission] = useState({name: "", about: "", type: "", vacancy: 0, status: "ongoing"})
    const [missions, setMissions] = useState([])
    const { logout, user, isAuthenticated, isLoading } = useAuth0();

    const getMissions = async () => {
        await axios.get("http://127.0.0.1:5000/api/get-missions")
        .then((missionsList) => {console.log(missionsList);setMissions(missionsList.data)})
        .catch((e) => console.log("There is an error with the backend. Please refresh or try again later if the problem persists."))
    }

    const addMission = async () => {
        await axios.post("http://127.0.0.1:5000/api/add-mission", newMission)
        .then((response) => console.log(response))
        .catch((e) => console.log("There is an error with the backend. Please refresh or try again later if the problem persists."))
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
        {isAuthenticated && <div className='add-mission'>
                <label for="mission-name">Mission Name</label>
                <input id="mission-name" value={newMission.name} name="name" onChange={(e) => handleFormChange(e)}/>
                <label for="mission-about">About</label>    
                <input id="mission-about" value={newMission.about} name="about" onChange={(e) => handleFormChange(e)} />
                <label for="mission-type">Type</label>
                <input id="mission-type" value={newMission.type} name="type" onChange={(e) => handleFormChange(e)} />
                <label for="mission-vacancy">Vacancy</label>
                <input id="mission-vacancy" value={newMission.vacancy} name="vacancy" onChange={(e) => handleFormChange(e)} />
                <button onClick={() => addMission()}>Add</button>
            </div>}
        <div className='missions-list'>
        {missions.map((mission, index) => {
            return(
            <div key={index} className='mission'>{mission.name}</div>
        )})}
        </div>
    </div>
  )
}

export default Missions
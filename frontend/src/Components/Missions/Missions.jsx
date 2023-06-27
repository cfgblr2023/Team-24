import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Missions.css"
import Switch from '@mui/material/Switch';

function Missions() {
    const [missions, setMissions] = useState([])
    const [missionState, setMissionState] = useState("all")

    const getMissions = async (missionState) => {
        await axios.post("http://127.0.0.1:5000/api/get-missions",{missionState: missionState})
        .then((missionsList) => setMissions(missionsList.data))
        .catch((e) => console.log("There is an error with the backend. Please refresh or try again later if the problem persists."))
    }

    //on first render
    useEffect(() => {
        getMissions()
    }, [])

    const [searchField, setSearchField] = useState("");
    const filteredMissions = missions.filter(
        mission => {
          return (
            mission
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            mission
            .about
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );

      const handleChange = e => {
        setSearchField(e.target.value);
      };
    
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleToggle = () => {
        if(missionState === "all") {
            getMissions("ongoing");
            setMissionState("ongoing")
        } else {
            getMissions();
            setMissionState("all")
        }
    }
  return (
    <div className='missions-main'>
        <div className='missions-list'>
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search Mission" 
          onChange = {handleChange}
        />
        <h3>Missions List</h3>
        <div className='toggle-switch'>
            <p>Ongoing</p>
            <Switch {...label} onClick={() => handleToggle()}/>
        </div>
        {filteredMissions.map((mission, index) => {
            return (
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
            )
        })}
        {/* <h3>Missions List</h3>
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
        )})} */}
        </div>
    </div>
  )
}

export default Missions
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Missions.css"

function Missions() {
    const [missions, setMissions] = useState([])

    const getMissions = async (missionState) => {
        await axios.post("http://127.0.0.1:5000/api/get-missions",{missionState: "ongoing"})
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
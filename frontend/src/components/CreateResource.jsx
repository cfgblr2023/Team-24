/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import axios from 'axios'
import { useState } from 'react'
import "./CreateResource.css"

const CreateResource = () => {
    const [fileName, setFileName] = useState("")
    const [fileDesc, setFileDesc] = useState("")
    const [fileURL, setFileURL] = useState("")

    const handleFormNameChange = (e) => {
        console.log(e.target.value)
        setFileName(e.target.value)
    }

    const handleFormDescChange = (e) => {
        setFileDesc(e.target.value)
    }

    const handleFormURLChange = (e) => {
        setFileURL(e.target.value)
    }
    const uploadFile = async (e) => {
        e.preventDefault()
        await axios.post("http://127.0.0.1:8000/api/add-file", {
            url: fileURL,
            name: fileName,
            desc: fileDesc})
        .then(() => alert("File was uploaded"))
        .catch(() => alert("There was an error, please try again!"))
    }
  return (
    <>
    <div id="cr_index" className="mx-2">
        <div className="container-fluid bg-success my-2 p-3 d-flex justify-content-center border rounded-3"> <h1>Create a resource</h1> </div>
    <div className="resource-main">
    <form method="post" encType="multipart/form-data">
     <table>
            <tr >
                <td>
                    <label htmlFor="name">
                        Volunteer Name
                    </label>
                </td>
                <td><input disabled="true" type="text" id="name" required value="Name from backend"/>
                </td>
            </tr>
            <tr >
                <td><label htmlFor="email">
                        Email
                    </label>
                </td>
                <td><input disabled="true" type="email" id="email" required value="email from backend "/>
                </td>
            </tr>
            <tr >
                <td>
                    <label htmlFor="tut_title">
                        Title of Tutorial
                    </label>
                </td>
                <td><input type="text" id="tut_title" value={fileName} name ="tut_title" required placeholder="Title " onChange={handleFormNameChange}/>
                </td>
            </tr>
            <tr >
                <td>
                    <label htmlFor="tut_desc">
                        Desc. of Video
                    </label>
                </td>
                <td><input type="text" id="tut_desc"  value={fileDesc} name="tut_desc" required placeholder="Description " onChange={handleFormDescChange}/>
                </td>
            </tr>
            <tr >
                <td><label for="url">
                        Upload the recording URL
                    </label>
                </td>
                <td>
                    <tr>
                    <input placeholder="Upload the recording URL" id="url" type="url" value={fileURL} onChange={handleFormURLChange}/>
                    </tr>
                    <tr>
                {/* <video id="up_video" style={{height: "180px", width: "320px"}}></video> */}
                    </tr>
                </td>
            </tr>
            <tr >
                <button className="btn btn-primary" onClick={(e) => uploadFile(e)}> Create</button>
            </tr>
    </table>

    </form>
    </div>
    </div>
    </>
  );
};

export default CreateResource;

/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import axios from 'axios'
import { useState } from 'react'

const CreateResource = () => {
    const [file, setFile] = useState("")

    const handleFormChange = (e) => {
        setFile(e.target.value)
    }
    const uploadFile = async () => {
        await axios.post("http://127.0.0.1:6000/api/add-file", JSON.stringify({"url": file}))
        .then(() => alert("File was uploaded"))
        .catch(() => alert("There was an error, please try again!"))
    }
  return (
    <>
    <div id="cr_index" className="mx-2">
        <div className="container-fluid bg-success my-2 p-3 d-flex justify-content-center border rounded-3"> <h1>Create a resource</h1> </div>
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
                <td><input type="text" id="tut_title" name ="tut_title" required placeholder="Title "/>
                </td>
            </tr>
            <tr >
                <td>
                    <label htmlFor="tut_desc">
                        Desc. of Video
                    </label>
                </td>
                <td><input type="text" id="tut_desc"  name="tut_desc" required placeholder="Description "/>
                </td>
            </tr>
            <tr >
                <td><label for="url">
                        Upload the recording
                    </label>
                </td>
                <td>
                    <tr>
                    <input id="url" type="url" value={file} onChange={handleFormChange}/>
                    </tr>
                    <tr>
                <video id="up_video" style={{height: "180px", width: "320px"}}></video>
                    </tr>
                </td>
            </tr>
            <tr >
                <button className="btn btn-primary" onClick={() => uploadFile()}> Create</button>
            </tr>
    </table>

    </form>
    </div>
    </>
  );
};

export default CreateResource;

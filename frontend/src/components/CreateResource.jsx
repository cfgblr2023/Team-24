import React from "react";

const About = () => {
    
    React.useEffect(() => {
        const inputFile = document.getElementById("file");
        const video = document.getElementById("up_video");

        inputFile.addEventListener("change", function(){
            const file = inputFile.files[0];
            const videourl = URL.createObjectURL(file);
            video.setAttribute("src", videourl);
        })
    });
  return (
    <>
    <div id="cr_index" className="mx-2">
        <div className="container-fluid bg-success my-2 p-3 d-flex justify-content-center border rounded-3"> <h1>Create a resource</h1> </div>
    <form>
     <table>
            <tr >
                <td>
                    <label for="name">
                        Volunteer Name
                    </label>
                </td>
                <td><input disabled="true" type="text" id="name" required value="Name from backend "/>
                </td>
            </tr>
            <tr >
                <td><label for="email">
                        Email
                    </label>
                </td>
                <td><input disabled="true" type="email" id="email" required value="email from backend "/>
                </td>
            </tr>
            <tr >
                <td><label for="file">
                        Upload the recording
                    </label>
                </td>
                <td>
                    <tr>
                    <input id="file" type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*"/>
                    </tr>
                    <tr>
                <video id="up_video"></video>
                    </tr>
                </td>
            </tr>
            <tr >
                <button className="btn btn-primary"> Create</button>
            </tr>
    </table>

    </form>
    </div>
    </>
  );
};

export default About;

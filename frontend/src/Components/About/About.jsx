import React from 'react'
import { useState } from 'react'
import "./About.css"
import axios from "axios"

function About() {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState({
        name: "",
        desc: "",

    })

    const handleFormChange = (e) => {
        if(e.target.name === "name") {
            setCurrentImage({...currentImage, name:e.target.value})
        } else {
            setCurrentImage({...currentImage, desc:e.target.value})
        }
    }

    const handleUpload = async () => {
        await axios.post("http://127.0.0.1:5000/api/upload", {...currentImage})
        .then()
        .catch((e) => console.log(e))
    }

    const getImages = async () => {
        await axios.get("http://127.0.0.1:5000/api/fetch-images")
        .then((images) => {setImages(images.data);})
        .catch((e) => console.log(e))
    }

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

  return (
    <>
    <div className='about-main'>
    <hr />
    <div>
        <h1>To Upload Image on mongoDB</h1>
        <div>
          <label for="name">Image Title</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={currentImage.name}
            name="name"
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label for="desc">Image Description</label>
          <textarea
            id="desc"
            name="desc"
            value={currentImage.desc}
            rows="2"
            placeholder="Description"
            onChange={handleFormChange}
            required
          >
          </textarea>
        </div>
        <div>
          <label for="image">Upload Image</label>
          <input type="file" id="image" name="image" value="" required />
        </div>
        <div>
          <button type="submit" onClick={() => {handleUpload();getImages()}}>Submit</button>
        </div>
    </div>
 
    <hr />
 
    <div>
    <h1>Uploaded Images</h1>
        {images.map((image, index) => {
            return (
            <div key={index}>
                <div>
                  <img
                    src={`data:image/jpeg;base64,${arrayBufferToBase64(image.img.data.data)}`}
                    alt="uploads"
                    className="image"
                  />
                  {/* src="data:image/<%=image.img.contentType%>;base64,
                    <%=image.img.data.toString('base64')%>" */}
                  <div>
                    <h5>{image.name}</h5>
         
                    <p>{image.desc}</p>
                  </div>
                </div>
              </div>)
        })}
    </div>
    </div>
    </>
  )
}

export default About
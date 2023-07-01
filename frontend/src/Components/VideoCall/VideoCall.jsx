import React from "react";
import { useState } from "react"
import VideoRoom from '../VideoRoom/VideoRoom';
import "./VideoCall.css"

function VideoCall() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="video-call-main">
      <h1>Video Call</h1>

      {!joined && <button onClick={() => setJoined(true)}>Join Room</button>}

      {joined && (
        <>
          <button onClick={() => setJoined(false)}>To Lobby</button>
          <VideoRoom />
        </>
      )}
    </div>
  );
}

export default VideoCall;

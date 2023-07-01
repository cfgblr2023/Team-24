import React from "react";
import PropTypes from "prop-types";
import "./VideoEmbedder.css"

const VideoEmbedder = ({ embedId }) => (
  <div className="video-responsive">
    <h2>Youtube Video Embedder</h2>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

VideoEmbedder.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoEmbedder;
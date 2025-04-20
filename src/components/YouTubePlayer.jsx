import React from "react";
import ReactPlayer from "react-player";

const YouTubePlayer = ({ videoUrl }) => {
  return (
    <div style={{ maxWidth: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer
        url={videoUrl}
        controls={false}
        loop
        playing
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default YouTubePlayer;

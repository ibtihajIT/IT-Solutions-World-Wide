import React from "react";
import videoSource from "../../assets/header.mp4"; // Update with your video file path

function Welcome() {
  return (
    <div className="relative">
      <style jsx>{`
        @media (max-width: 425px) {
          .background-video {
            max-height: calc(100vh - 80px); /* Adjust this value as needed */
          }
        }

        @media (max-width: 375px) {
          .background-video {
            max-height: calc(100vh - 60px); /* Adjust this value as needed */
          }
        }

        @media (max-width: 320px) {
          .background-video {
            max-height: calc(100vh - 40px); /* Adjust this value as needed */
          }
        }
      `}</style>
      <video
        autoPlay
        muted
        loop
        className="background-video w-full h-auto object-cover"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Welcome;

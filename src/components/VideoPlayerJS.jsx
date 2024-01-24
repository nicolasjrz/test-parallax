/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export const VideoPlayerJS = ({ videoUrl }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.src = videoUrl;
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.preload = "auto";
      videoElement.controls = true;

      // Puedes agregar más configuraciones y manejar eventos según tus necesidades

      return () => {
        // Limpia los recursos cuando el componente se desmonta
        videoElement.src = "";
        videoElement.autoplay = true;
        videoElement.loop = false;
        videoElement.preload = "";
        videoElement.controls = false;
      };
    }
  }, [videoUrl]);

  return (
    <div>
      <video ref={videoRef} className="video-js">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

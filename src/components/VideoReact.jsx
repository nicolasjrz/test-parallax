/* eslint-disable react/prop-types */
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // Asegúrate de importar los estilos

export const VideoReact = ({ videoUrl }) => {
  return (
    <Player
      playsInline
      autoPlay={true} // Configura el autoplay
      loop // Configura el loop
      poster="/path/to/poster.jpg"
      src={videoUrl}
    />
  );
};

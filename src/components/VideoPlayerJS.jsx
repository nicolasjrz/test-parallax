/* eslint-disable react/prop-types */

import { Box } from "@mui/system";
import video1 from "../assets/video/Villa.mp4";

export const VideoPlayerJS = () => {
  return (
    <Box bgcolor={"blue"} height={"100%"}>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
        controls
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

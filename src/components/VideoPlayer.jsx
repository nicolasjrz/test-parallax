import { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import video1 from "../assets/video/Villa.mp4";
import { Box } from "@mui/system";

export const VideoPlayer = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const playerElement = document.getElementById("my-video");
      if (playerElement) {
        const options = {
          autoplay: true,
          controls: true,
          loop: true,
          sources: [
            {
              src: video1,
              type: "video/mp4",
            },
          ],
        };

        const player = videojs(playerElement, options);

        return () => {
          if (player) {
            player.dispose();
          }
        };
      }
    });
  }, []);

  return (
    <Box bgcolor={"blue"} height={300}>
      <div data-vjs-player>
        <video id="my-video" className="video-js" src={video1} autoPlay={true}>
          asdasd
        </video>
      </div>
    </Box>
  );
};

{
  /* <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <div data-vjs-player>
        <video id="my-video" className="video-js"></video>
      </div>
    </div> */
}

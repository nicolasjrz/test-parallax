import { Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import ReactPlayer from "react-player";

import video1 from "../assets/video/Villa.mp4";
import video2 from "../assets/video/videofranco.mov";

import { VideoPlayerJS } from "../components/VideoPlayerJS";
import { VideoReact } from "../components/VideoReact";

export const VideoPage = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={5}>
        <Grid item container>
          <Grid item xs={12} textAlign={"center"} mt={5}>
            <Typography variant="h4" textTransform={"uppercase"}>
              React Player
            </Typography>
          </Grid>

          <Grid item xs={12} m={10}>
            .mp4
            <ReactPlayer
              url={video1} // Reemplaza con la ruta correcta de tu archivo de video
              width="100%"
              height="100%"
              controls={true}
              playing={true} // Iniciar la reproducción automáticamente
              loop={true} // Reproducir en bucle
              volume={0.8} // Establecer el volumen (valor entre 0 y 1)
              //   playbackRate={1}
              preload="auto" // Agrega esta línea
            />{" "}
          </Grid>
          <Grid item xs={12} p={10}>
            .webm
            <ReactPlayer
              url={video2} // Reemplaza con la ruta correcta de tu archivo de video
              width="100%"
              height="100%"
              playing
              loop
              muted
            />{" "}
          </Grid>
          {/* <Grid item xs={12}> </Grid> */}
        </Grid>
        <Grid item container>
          <Grid item xs={12} textAlign={"center"} mt={5}>
            <Typography variant="h4" textTransform={"uppercase"}>
              VideoPlayerJS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            .mp4
            <VideoPlayerJS
              videoUrl={video1}
              //type={'codecs="avc1.42E01E, mp4a.40.2"'}
            />
          </Grid>
          <Grid item xs={12}>
            .webm
            <VideoPlayerJS
              videoUrl={video2}
              //type={'codecs="avc1.42E01E, mp4a.40.2"'}
            />
          </Grid>{" "}
        </Grid>
        <Grid item xs={12}>
          <Grid item container>
            <Grid item xs={12} textAlign={"center"} mt={5}>
              <Typography variant="h4" textTransform={"uppercase"}>
                VideoReact
              </Typography>
            </Grid>

            <Grid item xs={12} m={10}>
              .mp4
              <VideoReact videoUrl={video1} />
            </Grid>
            <Grid item xs={12} p={10}>
              .webm
              <VideoReact videoUrl={video2} />
            </Grid>
            {/* <Grid item xs={12}> </Grid> */}
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          VideoPage 4
        </Grid> */}
      </Grid>
    </>
  );
};

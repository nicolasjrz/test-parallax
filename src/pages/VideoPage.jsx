import { Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";

import { VideoPlayerJS } from "../components/VideoPlayerJS";
import { Box } from "@mui/system";

export const VideoPage = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"90vh"}
        >
          <Box width={500} height={500}>
            <VideoPlayerJS
            //type={'codecs="avc1.42E01E, mp4a.40.2"'}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

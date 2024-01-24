import { Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const VideoPage = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          VideoPage 1
        </Grid>
        <Grid item xs={12}>
          VideoPage 2
        </Grid>
        <Grid item xs={12}>
          VideoPage 3
        </Grid>
        <Grid item xs={12}>
          VideoPage 4
        </Grid>
      </Grid>
    </>
  );
};

import { Box, Stack, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const SkewedPage = () => {
  return (
    <>
      <Navbar />
      <Stack>
        <Stack className="first">
          <Box className="container">
            <Typography variant="h3">
              <em>Cultivartec</em>, aprendiendo juntos.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              omnis quidem ipsa similique laudantium enim molestiae harum.
            </Typography>
          </Box>
          <Box className="skew"> </Box>
        </Stack>

        <Stack className="second">
          <Box className="container">
            <Typography variant="h3">Secccion #2</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              omnis quidem ipsa similique laudantium enim molestiae harum.
            </Typography>
          </Box>
          <Box className="skew"> </Box>
        </Stack>

        <Stack className="third">
          <Box className="container">
            <Typography variant="h3">Secccion #3</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              omnis quidem ipsa similique laudantium enim molestiae harum.
            </Typography>
          </Box>
          <Box className="skew"> </Box>
        </Stack>
      </Stack>
    </>
  );
};

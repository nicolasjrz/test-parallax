import { useEffect, useRef, useState } from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { Stack, Typography } from "@mui/material";

import imagen from "../assets/img.jpg";
import { Navbar } from "../components/Navbar";

export const ParallaxPage = () => {
  const scrollContainerRef = useRef(null);
  const [scrollEl, setScrollElement] = useState(null);

  useEffect(() => {
    setScrollElement(scrollContainerRef.current);
  }, []);
  return (
    <>
      <Navbar />
      <Stack width={"100%"}>
        <ParallaxProvider scrollContainer={scrollEl}>
          <div style={{ height: "100vh" }}>
            <Parallax y={[-140, 10]} speed={-25}>
              <Stack
                mt={15}
                mb={15}
                bgcolor={"red"}
                width={400}
                height={300}
                justifyContent={"center"}
              >
                <Typography variant="h4">ROJO</Typography>
              </Stack>
            </Parallax>

            {/* Agrega más elementos aquí con efectos de paralaje */}
            {/* Por ejemplo, un efecto de paralaje en el eje x y z */}
            <Parallax translateY={[-10, 10]} speed={-15}>
              <Stack
                mt={15}
                mb={15}
                bgcolor={"green"}
                height={300}
                justifyContent={"center"}
              >
                <Typography variant="h4">VERDE</Typography>
              </Stack>
            </Parallax>

            <ParallaxBanner style={{ aspectRatio: "8 / 1" }}>
              <ParallaxBannerLayer image={imagen} speed={-20} />
              <ParallaxBannerLayer>
                <h1>My Headline</h1>
              </ParallaxBannerLayer>
            </ParallaxBanner>
            <Stack
              mt={15}
              mb={15}
              bgcolor={"blue"}
              height={300}
              justifyContent={"center"}
            >
              <Typography variant="h4">
                Contenido sin efecto de paralaje
              </Typography>
            </Stack>
          </div>
        </ParallaxProvider>
      </Stack>
    </>
  );
};

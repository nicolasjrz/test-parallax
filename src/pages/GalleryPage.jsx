import img1 from "../assets/image/1.webp";
import img2 from "../assets/image/2.webp";
import img3 from "../assets/image/3.webp";
import img4 from "../assets/image/4.webp";
import img5 from "../assets/image/5.webp";
import img6 from "../assets/image/6.webp";
import { Grid } from "@mui/material";
import ResponsiveGallery from "react-responsive-gallery";
import { Navbar } from "../components/Navbar";
export const GalleryPage = () => {
  const array = [
    {
      src: img1,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img2,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img3,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img4,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img5,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img5,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img5,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
    {
      src: img6,
      alt: "image 1 alt test",
      orderS: 1,
      orderM: 1,
      orderL: 1,
    },
  ];

  return (
    <>
      <Navbar />
      <Grid container p={10}>
        <Grid item>GALERIA</Grid>
        <Grid item xs={12}>
          <ResponsiveGallery
            numOfMediaPerRow={{ xs: 1, s: 2, m: 3, l: 3, xl: 4, xxl: 6 }}
            screenWidthSizes={{ xs: 220, s: 600, m: 768, l: 992, xl: 1200 }}
            useLightBox
            media={array}
          />
        </Grid>
      </Grid>
    </>
  );
};

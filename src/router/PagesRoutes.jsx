import { Route, Routes } from "react-router-dom";
import { ParallaxPage } from "../pages/ParallaxPage";
import { SkewedPage } from "../pages/SkewedPage";

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="paralax" element={<ParallaxPage />} />
      <Route path="skewed" element={<SkewedPage />} />
    </Routes>
  );
};

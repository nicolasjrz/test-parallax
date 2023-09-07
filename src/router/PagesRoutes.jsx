import { Navigate, Route, Routes } from "react-router-dom";
import { ParallaxPage } from "../pages/ParallaxPage";
import { SkewedPage } from "../pages/SkewedPage";

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="parallax" element={<ParallaxPage />} />
      <Route path="skewed" element={<SkewedPage />} />

      <Route path="/*" element={<Navigate to="/parallax" />} />
    </Routes>
  );
};

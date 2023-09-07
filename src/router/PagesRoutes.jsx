import { Routes, Route } from "react-router-dom";
import { ParallaxPage } from "../pages/ParallaxPage";
import { SkewedPage } from "../pages/SkewedPage";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
    </div>
  );
};

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/parallax" element={<ParallaxPage />} />
      <Route path="/skewed" element={<SkewedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

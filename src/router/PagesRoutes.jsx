import { Routes, Route } from "react-router-dom";

import ParallaxPage from "./ParallaxPage"; // Importa ParallaxPage y SkewedPage desde tus archivos
import SkewedPage from "./SkewedPage";

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

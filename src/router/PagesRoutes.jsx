import { Routes, Route, Navigate } from "react-router-dom";
import { ParallaxPage } from "../pages/ParallaxPage";
import { SkewedPage } from "../pages/SkewedPage";
import { TestPage } from "../pages/TestPage";

// const NotFound = () => {
//   return (
//     <div>
//       <h1>404 - Página no encontrada</h1>
//       <p>La página que buscas no existe.</p>
//     </div>
//   );
// };

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ParallaxPage />} />
      <Route path="/skewed" element={<SkewedPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

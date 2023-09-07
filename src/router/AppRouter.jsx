import { Route, Routes } from "react-router-dom";
import { PagesRoutes } from "./PagesRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* pagina principal  */}

      <Route path="/*" element={<PagesRoutes />} />
    </Routes>
  );
};

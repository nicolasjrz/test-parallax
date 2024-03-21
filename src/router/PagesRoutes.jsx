import { Routes, Route, Navigate } from "react-router-dom";
import { ParallaxPage } from "../pages/ParallaxPage";
import { SkewedPage } from "../pages/SkewedPage";
import { GalleryPage } from "../pages/GalleryPage";
import { TresDePage } from "../pages/TresDePage";
import { VideoPage } from "../pages/VideoPage";
import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

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
      <Route path="/" element={<VideoPage />} />
      <Route path="/parallax" element={<ParallaxPage />} />
      <Route path="/skewed" element={<SkewedPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/3D" element={<TresDePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

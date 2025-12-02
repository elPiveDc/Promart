import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProjectCreationPage from "../pages/ProjectCreationPage";
import CartPage from "../pages/CartPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart/projects/create" element={<ProjectCreationPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

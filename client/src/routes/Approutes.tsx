import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProjectCreationPage from "../components/cart/project/ProjectForm";

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

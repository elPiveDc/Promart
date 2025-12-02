import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProjectCreationPage from "../pages/ProjectCreationPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/projects/create" element={<ProjectCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

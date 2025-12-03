import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CartProjectForm from "../components/cart/project/CartProjectForm";
import Cart from "../components/cart/Cart";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/cart" element={<CartPage />}>
          <Route index element={<Cart />} />
          <Route path="projects" element={<CartProjectForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Outlet } from "react-router-dom";
import HeaderCart from "../components/layout/headerCart";

export default function CartPage() {
  return (
    <main className="container py-5">
      <HeaderCart />
      <Outlet />
    </main>
  );
}

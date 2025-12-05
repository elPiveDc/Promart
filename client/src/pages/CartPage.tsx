import { Outlet } from "react-router-dom";
import HeaderCart from "../components/layout/headerCart";

export default function CartPage() {
  return (
    <main className="container py-5">
      <HeaderCart />

      {/* Pasos */}
      <div className="d-flex justify-content-center my-4">
        <div className="steps-container d-flex align-items-center gap-4">
          {/* Paso 1 activo */}
          <div className="text-center">
            <div className="step-active mb-2">🛒 Paso 1</div>
            <div className="small fw-semibold">Carro de compras</div>
          </div>

          {/* Línea */}
          <div className="step-line"></div>

          {/* Paso 2 */}
          <div className="text-center">
            <div className="step-circle mb-2">2</div>
            <div className="small text-muted">Datos de envío</div>
          </div>

          {/* Línea */}
          <div className="step-line"></div>

          {/* Paso 3 */}
          <div className="text-center">
            <div className="step-circle mb-2">3</div>
            <div className="small text-muted">Pago</div>
          </div>
        </div>
      </div>

      {/* Línea gris debajo */}
      <hr className="mt-3 mb-4" />

      <Outlet />
    </main>
  );
}

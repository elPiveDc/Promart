import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";
import CartView from "./Cartview";

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const isEmpty = !cart || cart.items.length === 0;

  if (!isEmpty) {
    return <CartView />;
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body py-4">
        <div className="text-center py-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Carrito vacío"
            height={120}
            className="mb-3"
          />

          <h5 className="fw-bold mb-3">Tu carrito de compras está vacío</h5>
          <p className="text-muted">
            Empieza a explorar productos o crea un proyecto para tu hogar.
          </p>

          <div className="d-flex gap-3 justify-content-center mt-4">
            <button
              className="btn btn-warning fw-semibold"
              onClick={() => navigate("/")}
            >
              ¡Empieza a comprar ahora!
            </button>

            <button
              className="btn btn-outline-primary fw-semibold"
              onClick={() => navigate("/cart/projects")}
            >
              Crear proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

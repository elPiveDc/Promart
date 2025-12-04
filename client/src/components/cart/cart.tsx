import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";
import CartView from "./project/CartView";

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const isEmpty = !cart || cart.items.length === 0;

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">🛒 Mi carrito</h5>

          <button
            className={`btn fw-semibold ${
              isEmpty ? "btn-outline-primary" : "btn-primary"
            }`}
            onClick={() => navigate("/cart/projects")}
          >
            {isEmpty ? "Crear proyecto" : "Continuar proyecto"}
          </button>
        </div>

        {isEmpty ? (
          <div className="text-center py-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Carrito vacío"
              height={120}
              className="mb-3 opacity-75"
            />

            <h5 className="fw-bold mb-3">Tu carrito de compras está vacío</h5>

            <p className="text-muted mb-4">
              Explora nuestros productos o crea un proyecto para tu hogar.
            </p>

            <button
              className="btn btn-warning fw-semibold"
              onClick={() => navigate("/")}
            >
              ¡Empieza a comprar ahora!
            </button>
          </div>
        ) : (
          <CartView />
        )}
      </div>
    </div>
  );
}

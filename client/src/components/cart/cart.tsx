import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const isEmpty = cart.length === 0;

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body text-center py-5">
        {isEmpty ? (
          <>
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
          </>
        ) : (
          <h5>Carrito con productos (pendiente)</h5>
        )}
      </div>
    </div>
  );
}

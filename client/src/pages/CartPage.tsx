import { useNavigate } from "react-router-dom";
import { useCart } from "../hook/useCart";

export default function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const isEmpty = cart.length === 0;

  return (
    <>
      <main className="container py-5">
        <div className="bg-white rounded shadow-sm p-5 text-center">
          {isEmpty ? (
            <>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Carrito vacío"
                height={120}
                className="mb-3"
              />

              <h5 className="fw-bold">Tu carrito de compras está vacío</h5>

              <button
                className="btn btn-warning fw-semibold mt-3"
                onClick={() => navigate("/")}
              >
                ¡Empieza a comprar ahora!
              </button>
              <button
                className="btn btn-light btn-sm fw-semibold"
                onClick={() => navigate("/cart/projects/create")}
              >
                Crear proyecto
              </button>
            </>
          ) : (
            <h5>Carrito con productos (pendiente)</h5>
          )}
        </div>
      </main>
    </>
  );
}

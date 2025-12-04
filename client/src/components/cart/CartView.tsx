import { useCart } from "../../hook/useCart";

export default function CartView() {
  const { cart, updateItem, removeItem } = useCart();

  if (!cart) {
    return <p className="text-center py-4">Cargando carrito...</p>;
  }

  const total = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h3 className="mb-4">🛒 Tu Carrito</h3>

      {cart.items.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.items.map((item) => (
              <li
                key={item.product._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={
                      item.product.url ||
                      "https://cdn-icons-png.flaticon.com/512/9402/9402212.png"
                    }
                    alt={item.product.name}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                    className="rounded border bg-light"
                  />

                  <div>
                    <h6 className="fw-bold mb-0">{item.product.name}</h6>
                    <small className="text-muted">
                      S/ {item.product.price.toFixed(2)}
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={item.quantity === 1}
                    onClick={() =>
                      updateItem(item.product._id, item.quantity - 1)
                    }
                  >
                    -
                  </button>

                  <span className="fw-semibold">{item.quantity}</span>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      updateItem(item.product._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  <button
                    className="btn btn-danger btn-sm ms-3"
                    onClick={() => removeItem(item.product._id)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total:</h4>
            <h4 className="text-danger fw-bold">S/ {total.toFixed(2)}</h4>
          </div>

          <button className="btn btn-success w-100 mt-3 fw-semibold">
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

import { useCart } from "../../../hook/useCart";

const FALLBACK_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/9402/9402212.png";

export default function CartView() {
  const { cart, updateItem, removeItem } = useCart();

  if (!cart || !Array.isArray(cart.items)) {
    return <p className="text-center py-4">Cargando carrito...</p>;
  }

  const safeItems = cart.items.filter(
    (item) =>
      item &&
      item.product &&
      typeof item.product._id === "string" &&
      typeof item.quantity === "number" &&
      item.quantity > 0
  );

  const total = safeItems.reduce((sum, item) => {
    const price =
      typeof item.product.price === "number" ? item.product.price : 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container py-4">
      <h3 className="mb-4">🛒 Tu Carrito</h3>

      {safeItems.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {safeItems.map((item) => {
              const { _id, name = "Producto", price = 0, url } = item.product;

              return (
                <li
                  key={_id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={url || FALLBACK_IMAGE}
                      alt={name}
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                      className="rounded border bg-light"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />

                    <div>
                      <h6 className="fw-bold mb-0">{name}</h6>
                      <small className="text-muted">
                        S/ {price.toFixed(2)}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        updateItem(_id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>

                    <span className="fw-semibold">{item.quantity}</span>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateItem(_id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <button
                      className="btn btn-danger btn-sm ms-3"
                      onClick={() => removeItem(_id)}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              );
            })}
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

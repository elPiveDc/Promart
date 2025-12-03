import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="promart-header shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img src="../../../public/img/icon.png" alt="Promart" height={32} />
          <span className="fw-bold fs-5">PROMART</span>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-warning btn-sm fw-semibold"
            onClick={() => navigate("/cart")}
          >
            🛒 Carrito
          </button>
        </div>
      </div>
    </header>
  );
}

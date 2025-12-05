import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="promart-header shadow-sm bg-white">
      <div className="container d-flex align-items-center justify-content-between py-2">

        <div className="d-flex align-items-center gap-2">
          <img src="/img/icon.png" alt="Promart" height={44} />
          <span className="fw-bold" style={{ color: "#ff6600", fontSize: "1.8rem" }}>
            PROMART
          </span>
        </div>

        <div style={{ maxWidth: "350px" }} className="mx-3 flex-grow-1">
          <input
            type="text"
            className="form-control rounded-pill fs-6"
            placeholder="¿Qué estas buscando?"
          />
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1 header-link">
            <i className="bi bi-geo-alt-fill fs-5"></i>
            <span className="fw-bold fs-6">Lima, Perú</span>
          </div>
          <div className="d-flex align-items-center gap-1 header-link">
            <i className="bi bi-person-circle fs-5"></i>
            <span className="fw-semibold fs-6">Juan Pérez</span>
          </div>
        </div>

        <div>
          <button
            className="btn btn-warning btn-sm fw-semibold fs-6"
            onClick={() => navigate("/cart")}
          >
            <i className="bi bi-cart-fill me-1"></i> 🛒
          </button>
        </div>
      </div>

      <div className="w-100" style={{ backgroundColor: "#dfdfdfff" }}>
        <div className="container d-flex align-items-center justify-content-between py-3">
          <button className="bg-transparent border-0 d-flex align-items-center gap-2 header-link">
            <i className="bi bi-list fs-4"></i>
            <span className="fw-semibold fs-6">☰ Categorías</span>
          </button>
          <nav className="d-flex gap-4 fw-bold text-uppercase fs-6">
            <a href="#" className="header-link d-flex align-items-center gap-1">
              <i className="bi bi-star-fill text-warning"></i> Top ventas
            </a>
            <a href="#" className="header-link d-flex align-items-center gap-1">
              <i className="bi bi-lightning-charge-fill text-warning"></i> Electro
            </a>
            <a href="#" className="header-link d-flex align-items-center gap-1">
              <i className="bi bi-gift-fill text-warning"></i> Regalables
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

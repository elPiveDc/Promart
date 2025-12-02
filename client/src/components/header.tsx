import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="promart-header shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img
            src="https://skeleton.pe/wp-content/uploads/2022/10/logo-promart.svg"
            alt="Promart"
            height={32}
          />
          <span className="fw-bold text-white fs-5">Homecenter</span>
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

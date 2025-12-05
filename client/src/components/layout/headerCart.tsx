import { useNavigate } from "react-router-dom";

export default function HeaderCr() {
  const navigate = useNavigate();

  return (
    <header className="header-cr shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-center py-3">
        <button
          className="d-flex align-items-center gap-2 border-0 bg-transparent"
          onClick={() => navigate("/")}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMI-Yv9AwpvXhHb54nUEMC_RWgzZ1ZYpvMw&s" alt="Promart" height={36} />
          <span className="fw-bold fs-2 text-black">PROMART</span>
        </button>
      </div>
    </header>
  );
}

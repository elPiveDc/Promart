import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate("/projects/create");
  };

  const handleGoToCart = () => {
    // Simulación: por ahora solo mostramos un alert
    alert("Ir al carrito (simulado)");
  };

  return (
    <header className="header">
      <h1>Mi Tienda</h1>
      <div className="header-actions">
        <button onClick={handleGoToProjects}>Ir a creación de proyectos</button>
        <button onClick={handleGoToCart}>Ir al carrito</button>
      </div>
    </header>
  );
}

import Home from "../components/home/Home";
import Header from "../components/layout/header";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="bg-light py-4 mb-4">
        <div className="container">
          <h4 className="fw-bold mb-1">Productos para tu hogar</h4>
          <p className="text-muted mb-0">
            Encuentra los mejores precios para construir y mejorar tu casa
          </p>
        </div>
      </section>

      <main className="container pb-5">
        <Home />
      </main>
    </>
  );
}

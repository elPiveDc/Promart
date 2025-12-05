import Header from "../components/layout/header";
import Home from "../components/home/Home";
import PromoCarousel from "../components/home/PromoCarousel";
import OfferBanner from "../components/home/OfferBanner";
import Footer from "../components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <PromoCarousel />

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

      <OfferBanner />

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold">Más productos para ti</h4>
          <div>
            <button className="btn btn-outline-secondary btn-sm me-2">◀</button>
            <button className="btn btn-outline-secondary btn-sm">▶</button>
          </div>
        </div>
        <Home />
      </section>

      <Footer />
    </>
  );
}

import Header from "../components/header";
import ProductList from "../components/ProductList";
import { useProducts } from "../hook/useProduct";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

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
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" />
            <p className="mt-2 fw-semibold">Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger">
            Error al cargar productos: {error}
          </div>
        )}

        {!loading && !error && <ProductList products={products} />}
      </main>
    </>
  );
}

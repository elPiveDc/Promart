import { useProducts } from "../../hook/useProduct";
import ProductCardSimple from "./ProductCardSimple";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" />
        <p className="mt-2 fw-semibold">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error al cargar productos: {error}
      </div>
    );
  }

  return (
    <div className="row">
      {products.map((p) => (
        <div key={p._id} className="col-md-4 mb-4">
          <ProductCardSimple product={p} />
        </div>
      ))}
    </div>
  );
}

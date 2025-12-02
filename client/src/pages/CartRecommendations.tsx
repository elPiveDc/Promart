import { useProducts } from "../hook/useProduct";
import ProductList from "../components/ProductList";

export default function CartRecommendations() {
  const { products, loading, error } = useProducts();

  if (loading) return null;
  if (error) return null;

  return (
    <section className="mt-4">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0 fw-bold">Productos que te pueden interesar</h5>
      </div>

      <ProductList products={products.slice(0, 6)} />
    </section>
  );
}

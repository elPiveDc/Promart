import ProductList from "../components/ProductList";
import { useProducts } from "../hook/useProduct";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Productos</h1>
      <ProductList products={products} />
    </div>
  );
}

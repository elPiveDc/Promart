import type { ProductResponseDTO } from "../../../../types/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductResponseDTO[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="row g-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

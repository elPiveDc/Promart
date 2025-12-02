import type { ProductResponseDTO } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductResponseDTO[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

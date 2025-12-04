import type { ProductResponseDTO } from "../../../../types/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductResponseDTO[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="row g-3">
      {products.map((product) => (
        <div key={product._id} className="col-md-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

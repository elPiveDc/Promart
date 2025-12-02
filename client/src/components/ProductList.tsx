import { useLocation } from "react-router-dom";
import type { ProductResponseDTO } from "../types/Product";

import ProductCard from "./card/ProductCard";
import ProductCardHome from "./card/ProducCardHome";

interface ProductListProps {
  products: ProductResponseDTO[];
}

export default function ProductList({ products }: ProductListProps) {
  const { pathname } = useLocation();

  const isCartPage = pathname.startsWith("/home");

  return (
    <div className="row g-3">
      {products.map((product) => (
        <div
          key={product.id}
          className={isCartPage ? "col-12" : "col-6 col-md-4 col-lg-3 col-xl-2"}
        >
          {isCartPage ? (
            <ProductCard product={product} />
          ) : (
            <ProductCardHome product={product} />
          )}
        </div>
      ))}
    </div>
  );
}

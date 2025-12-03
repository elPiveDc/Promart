import { useState } from "react";
import { useCart } from "../../../hook/useCart";
import type { ProductResponseDTO } from "../../../types/Product";

interface ProductCardProps {
  product: ProductResponseDTO;
}

const FALLBACK_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/9402/9402212.png";

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageSrc, setImageSrc] = useState(product.url || FALLBACK_IMAGE);

  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      <img
        src={imageSrc}
        alt={product.name}
        className="card-img-top bg-light"
        style={{ height: "180px", objectFit: "contain" }}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="fw-semibold mb-1 text-truncate" title={product.name}>
          {product.name}
        </h6>

        <small className="text-muted mb-1">{product.category}</small>

        <span className="fw-bold text-danger fs-5 mb-2">
          S/ {product.price.toFixed(2)}
        </span>

        {product.stock !== undefined && (
          <small
            className={
              product.stock > 0 ? "text-success mb-2" : "text-danger mb-2"
            }
          >
            {product.stock > 0
              ? `Stock disponible (${product.stock})`
              : "Sin stock"}
          </small>
        )}

        <button
          className="btn btn-warning fw-semibold mt-auto"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

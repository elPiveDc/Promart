import type { ProductResponseDTO } from "../../types/Product";

interface Props {
  product: ProductResponseDTO;
}

const FALLBACK_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/9402/9402212.png";

export default function ProductCardSimple({ product }: Props) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img
        src={product.url || FALLBACK_IMAGE}
        alt={product.name}
        className="card-img-top bg-light"
        style={{ height: "180px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h6 className="fw-semibold mb-1 text-truncate" title={product.name}>
          {product.name}
        </h6>
        <span className="fw-bold text-danger fs-5 mb-2">
          S/ {product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

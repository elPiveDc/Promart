import { useCart } from "../hook/useCart";
import type { ProductResponseDTO } from "../types/Product";

interface ProductCardProps {
  product: ProductResponseDTO;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      {product.stock !== undefined && <p>Stock disponible: {product.stock}</p>}
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

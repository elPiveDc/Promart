import type { ProductResponseDTO } from "../types/Product";

export interface CartContextType {
  cart: ProductResponseDTO[];
  addToCart: (product: ProductResponseDTO) => void;
}

import { createContext } from "react";
import type { CartResponseDTO } from "../types/Cart";
import type { ProductResponseDTO } from "../types/Product";

export interface CartContextType {
  cart: CartResponseDTO | null;
  addToCart: (product: ProductResponseDTO) => Promise<void>;
  updateItem: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
}

export const CartContext = createContext<CartContextType>({
  cart: null,
  addToCart: async () => {},
  updateItem: async () => {},
  removeItem: async () => {},
});

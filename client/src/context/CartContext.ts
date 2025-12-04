import { createContext } from "react";
import type { ProductResponseDTO } from "../types/Product";
import type { CartResponseDTO } from "../types/Cart";

export type CartState = Omit<
  CartResponseDTO,
  "_id" | "createdAt" | "updatedAt"
>;

export interface CartContextType {
  cart: CartState;
  addToCart: (product: ProductResponseDTO) => Promise<void>;
  updateItem: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
}

export const emptyCart: CartState = {
  items: [],
};

export const CartContext = createContext<CartContextType>({
  cart: emptyCart,
  addToCart: async () => {
    throw new Error("addToCart usado fuera de CartProvider");
  },
  updateItem: async () => {
    throw new Error("updateItem usado fuera de CartProvider");
  },
  removeItem: async () => {
    throw new Error("removeItem usado fuera de CartProvider");
  },
});

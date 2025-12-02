import { useState, type ReactNode } from "react";
import type { ProductResponseDTO } from "../types/Product";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductResponseDTO[]>([]);

  const addToCart = (product: ProductResponseDTO) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

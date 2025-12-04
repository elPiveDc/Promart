import { useEffect, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { CartService } from "../services/CartService";
import type { CartResponseDTO } from "../types/Cart";
import type { ProductResponseDTO } from "../types/Product";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartResponseDTO | null>(null);

  const createNewCart = async () => {
    const newCart = await CartService.createCart();
    setCart(newCart);
    localStorage.setItem("cartId", newCart._id);
  };

  useEffect(() => {
    const init = async () => {
      const storedId = localStorage.getItem("cartId");

      if (storedId) {
        try {
          const data = await CartService.getCart(storedId);
          setCart(data);
          return;
        } catch {
          console.warn("Carrito inválido, creando uno nuevo.");
        }
      }

      await createNewCart();
    };

    void init();
  }, []);

  const addToCart = async (product: ProductResponseDTO) => {
    if (!cart?._id) return;
    const updated = await CartService.addItem(cart._id, product._id);
    setCart(updated);
  };

  const updateItem = async (productId: string, quantity: number) => {
    if (!cart?._id) return;
    const updated = await CartService.updateItem(cart._id, productId, quantity);
    setCart(updated);
  };

  const removeItem = async (productId: string) => {
    if (!cart?._id) return;
    const updated = await CartService.removeItem(cart._id, productId);
    setCart(updated);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

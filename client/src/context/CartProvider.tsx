import { useEffect, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { CartService } from "../services/CartService";
import type { CartResponseDTO } from "../types/Cart";
import type { ProductResponseDTO } from "../types/Product";

interface CartProviderProps {
  children: ReactNode;
}

const emptyCart: CartResponseDTO = {
  _id: "",
  items: [],
  createdAt: "",
  updatedAt: "",
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartResponseDTO>(emptyCart);

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

      const newCart = await CartService.createCart();
      setCart(newCart);
      localStorage.setItem("cartId", newCart._id);
    };

    void init();
  }, []);

  const addToCart = async (product: ProductResponseDTO) => {
    let cartId = cart._id;

    if (!cartId) {
      const newCart = await CartService.createCart();
      setCart(newCart);
      localStorage.setItem("cartId", newCart._id);
      cartId = newCart._id;
    }
    if (!cart?._id) {
      console.warn("INTENTO DE AGREGAR SIN CARRITO AÚN");
      return;
    }

    const updated = await CartService.addItem(cartId, product._id);
    console.log("MISMA REFERENCIA?", updated === cart);
    setCart(updated);
  };

  const updateItem = async (productId: string, quantity: number) => {
    if (!cart._id) return;
    const updated = await CartService.updateItem(cart._id, productId, quantity);
    setCart(updated);
  };

  const removeItem = async (productId: string) => {
    if (!cart._id) return;
    const updated = await CartService.removeItem(cart._id, productId);
    setCart(updated);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

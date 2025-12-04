// En /context/CartProvider.tsx
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
  // Nuevo estado para indicar si la carga inicial ha terminado.
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // 1. Carga inicial del carrito (mejorada con `isInitialLoad`)
  useEffect(() => {
    const init = async () => {
      const storedId = localStorage.getItem("cartId");
      let initialCart = emptyCart;

      if (storedId) {
        try {
          // Intentar obtener el carrito existente
          initialCart = await CartService.getCart(storedId);
        } catch {
          console.warn("Carrito inválido o expirado, creando uno nuevo.");
        }
      }

      if (initialCart._id === "") {
        // Si no se pudo obtener o no existía, crear uno nuevo
        initialCart = await CartService.createCart();
        localStorage.setItem("cartId", initialCart._id);
      }

      setCart(initialCart);
      setIsInitialLoad(false); // La carga ha terminado
    };

    void init();
  }, []);

  // 2. Lógica Corregida para `addToCart`
  const addToCart = async (product: ProductResponseDTO) => {
    let currentCart = cart; // Usamos el estado actual

    // CLAVE: Si el carrito aún está en su estado inicial vacío,
    // debemos esperar a que la carga/creación inicial termine,
    // o crear uno inmediatamente si el ID es nulo.
    if (!currentCart._id) {
      // Es mejor esperar a que el useEffect termine si la carga es inminente
      if (isInitialLoad) {
        console.warn(
          "Intento de agregar mientras se carga el carrito. Intente de nuevo."
        );
        return;
      }

      // Si no está cargando (isInitialLoad=false) y aún no tiene ID, lo creamos
      const newCart = await CartService.createCart();
      localStorage.setItem("cartId", newCart._id);
      currentCart = newCart;
      setCart(newCart);
    }

    // Ahora, con un ID de carrito garantizado (currentCart._id):
    const updated = await CartService.addItem(currentCart._id, product._id);

    // Actualizar el estado con una nueva referencia de objeto para forzar la re-renderización
    // Usar { ...updated } asegura que React vea un objeto diferente.
    setCart({ ...updated });
  };

  // 3. updateItem y removeItem ya están bien, pero los mantenemos para revisar
  const updateItem = async (productId: string, quantity: number) => {
    if (!cart._id) return;
    const updated = await CartService.updateItem(cart._id, productId, quantity);
    setCart({ ...updated }); // OK: Nueva referencia de objeto
  };

  const removeItem = async (productId: string) => {
    if (!cart._id) return;
    const updated = await CartService.removeItem(cart._id, productId);
    setCart({ ...updated }); // OK: Nueva referencia de objeto
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

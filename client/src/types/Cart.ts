import type { Product } from './Product';

// Define cómo se ve un ítem de carrito según tu Modelo de Datos
export interface CartItem {
    product: Product;
    quantity: number;
    meta?: Record<string, unknown>;
}
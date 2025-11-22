import type { Product } from "./Product";
import type { CartItem } from "./Cart";

export interface SmartListResponse {
    products?: Product[]; // Opción 1: Array de productos directos
    items?: CartItem[];   // Opción 2: Array de items de carrito
    // Puedes añadir otros campos si el backend los usa, ej: status: 'ok'
}
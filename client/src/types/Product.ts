export interface Product {
    _id: string; // ID de MongoDB
    name: string;
    category: string;
    price: number;
    // Simplificamos, solo con las propiedades necesarias para la lista final
    color?: string;
    dimensions?: string;
}
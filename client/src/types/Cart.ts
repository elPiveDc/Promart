import type { ProductResponseDTO } from "./Product";

export interface CartItemDTO {
  product: ProductResponseDTO;
  quantity: number;
}

export interface CartDTO {
  _id: string;
  userId?: string;
  items: CartItemDTO[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CartResponseDTO {
  _id: string;
  userId?: string;
  items: {
    product: ProductResponseDTO;
    quantity: number;
    meta?: unknown;
  }[];
  createdAt: string;
  updatedAt: string;
}

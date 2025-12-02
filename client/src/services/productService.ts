// src/services/productService.ts
import type { ProductResponseDTO, ProductRequestDTO } from "../types/Product";
import { api } from "../api/api";

export async function listProducts(): Promise<ProductResponseDTO[]> {
  const res = await api.get("/products");
  return res.data;
}

export async function getProduct(id: string): Promise<ProductResponseDTO> {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function createProduct(
  payload: ProductRequestDTO
): Promise<ProductResponseDTO> {
  const res = await api.post("/products", payload);
  return res.data;
}

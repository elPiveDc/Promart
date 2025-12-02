import { api } from "../api/api";
import type { ProductResponseDTO } from "../types/Product";
import type { ProfileResponseDTO } from "../types/profile";

// Buscar perfil por slug
export async function getProfileBySlug(
  slug: string
): Promise<ProfileResponseDTO> {
  const res = await api.get(`/profiles/${slug}`);
  return res.data;
}

// Buscar productos base de un perfil
export async function getBaseProducts(
  ids: string[]
): Promise<ProductResponseDTO[]> {
  const promises = ids.map((id) => api.get(`/products/${id}`));
  const results = await Promise.all(promises);
  return results.map((r) => r.data);
}

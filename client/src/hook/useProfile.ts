import { useState } from "react";
import { getProfileBySlug, getBaseProducts } from "../services/profileService";
import type { ProductResponseDTO } from "../types/Product";
import type { ProfileResponseDTO } from "../types/profile";

export function useProfile() {
  const [profile, setProfile] = useState<ProfileResponseDTO | null>(null);
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchProfile(slug: string) {
    setLoading(true);
    setError(null);
    try {
      const p = await getProfileBySlug(slug);
      setProfile(p);

      const base = await getBaseProducts(p.baseProducts);
      setProducts(base);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  }

  return { profile, products, loading, error, searchProfile };
}

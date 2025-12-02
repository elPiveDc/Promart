import { useState } from "react";
import { getProfileBySlug } from "../services/profileService";
import type { ProductResponseDTO } from "../types/Product";
import type { ProfileResponseDTO } from "../types/Profile";

export function useProfile() {
  const [profile, setProfile] = useState<ProfileResponseDTO | null>(null);
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchProfile(slug: string) {
    //logica que embasae a palabras clave lo relacione con los slung predeterminados:

    setLoading(true);
    setError(null);
    try {
      const p = await getProfileBySlug(slug);
      setProfile(p);
      setProducts(p.baseProducts);
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

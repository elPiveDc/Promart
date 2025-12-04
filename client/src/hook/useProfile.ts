import { useState } from "react";
import { getProfileBySlug } from "../services/profileService";
import type { ProductResponseDTO } from "../types/Product";
import type { ProfileResponseDTO } from "../types/Profile";

const PROFILES = [
  { slug: "remodelar-cocina", tags: ["cocina", "remodelacion"] },
  { slug: "remodelar-baño", tags: ["baño", "remodelacion"] },
  { slug: "pintar-depa", tags: ["pintura", "depa"] },
  { slug: "instalar-drywall", tags: ["drywall"] },
  { slug: "seguridad-obra", tags: ["seguridad"] },
  { slug: "acabado-madera", tags: ["madera", "acabados"] },
  { slug: "renovar-pisos", tags: ["piso"] },
  { slug: "pintar-habitacion", tags: ["pintura", "habitacion"] },
  { slug: "kit-herramientas-basico", tags: ["herramientas"] },
  { slug: "impermeabilizacion", tags: ["humedad"] },
];

export function useProfile() {
  const [profiles, setProfiles] = useState<ProfileResponseDTO[]>([]);
  const [productsByProfile, setProductsByProfile] = useState<
    Record<string, ProductResponseDTO[]>
  >({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchProfile(slug: string) {
    setLoading(true);
    setError(null);
    try {
      const p = await getProfileBySlug(slug);
      setProfiles([p]);
      setProductsByProfile({ [slug]: p.baseProducts });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  async function searchFromText(text: string) {
    setLoading(true);
    setError(null);
    setProfiles([]);
    setProductsByProfile({});

    try {
      const words = text.toLowerCase().split(/\s+/);

      const matchedSlugs = PROFILES.filter((p) =>
        p.tags.some((tag) => words.includes(tag))
      ).map((p) => p.slug);

      const foundProfiles: ProfileResponseDTO[] = [];
      const foundProducts: Record<string, ProductResponseDTO[]> = {};

      for (const slug of matchedSlugs) {
        const p = await getProfileBySlug(slug);
        foundProfiles.push(p);
        foundProducts[slug] = p.baseProducts;
      }

      setProfiles(foundProfiles);
      setProductsByProfile(foundProducts);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  return {
    profiles,
    productsByProfile,
    loading,
    error,
    searchProfile,
    searchFromText,
  };
}

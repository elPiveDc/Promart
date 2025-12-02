import type { ProductResponseDTO } from "./Product";

export interface ProfileResponseDTO {
  id: string;
  slug: string;
  name: string;
  tags: string[];
  requiredCategories: string[];
  baseProducts: ProductResponseDTO[];
  version: string;
}

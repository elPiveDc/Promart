export interface ProfileResponseDTO {
  id: string;
  slug: string;
  name: string;
  tags: string[];
  requiredCategories: string[];
  baseProducts: string[]; // IDs de productos
  version: string;
}

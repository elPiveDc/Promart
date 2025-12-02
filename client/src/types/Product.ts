export interface ProductRequestDTO {
  name: string;
  category: string;
  price: number;
  color?: string;
  dimensions?: string;
  stock?: number;
  tags?: string[];
}

export interface ProductResponseDTO {
  id: string;
  name: string;
  category: string;
  price: number;
  color?: string;
  dimensions?: string;
  stock?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

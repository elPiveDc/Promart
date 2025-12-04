export interface ProductRequestDTO {
  _id: string;
  name: string;
  category: string;
  price: number;
  color?: string;
  url?: string;
  dimensions?: string;
  stock?: number;
  tags?: string[];
}

export interface ProductResponseDTO {
  _id: string;
  name: string;
  category: string;
  price: number;
  color?: string;
  url?: string;
  dimensions?: string;
  stock?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  name: string;
  category: string;
  price: number;
  color?: string;
  dimensions?: string;
  stock?: number;
  tags?: string[];
  meta?: Record<string, any>;
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  color: String,
  dimensions: String,
  stock: { type: Number, default: 0 },
  tags: [String],
  meta: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

export const Product = mongoose.model<IProduct>("Product", ProductSchema);

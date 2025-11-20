import { Product, IProduct } from "../models/Product";

export const productService = {
  async list(filter = {}, limit = 50, skip = 0) {
    return Product.find(filter).limit(limit).skip(skip).exec();
  },
  async getById(id: string) {
    return Product.findById(id).exec();
  },
  async create(payload: Partial<IProduct>) {
    const p = new Product(payload);
    return p.save();
  },
  async update(id: string, payload: Partial<IProduct>) {
    return Product.findByIdAndUpdate(id, payload, { new: true }).exec();
  },
  async remove(id: string) {
    return Product.findByIdAndDelete(id).exec();
  }
};

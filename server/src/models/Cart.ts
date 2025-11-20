import mongoose from "mongoose";

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
  meta?: Record<string, any>;
}

export interface ICart extends mongoose.Document {
  userId?: string; 
  items: ICartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}

const CartSchema = new mongoose.Schema<ICart>({
  userId: String,
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      meta: { type: mongoose.Schema.Types.Mixed }
    }
  ]
}, { timestamps: true });

export const Cart = mongoose.model<ICart>("Cart", CartSchema);

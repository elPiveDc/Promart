import mongoose from "mongoose";

export interface IQuantityRule {
  category: string;
  calculation?: string; // expression or identifier
  defaults?: Record<string, number>;
}

export interface IOptionalFilter {
  key: string;
  type: "select" | "number" | "text";
  options?: string[];
}

export interface IProfile extends mongoose.Document {
  slug: string;
  name: string;
  description?: string;
  tags: string[];
  requiredCategories: string[];
  baseProducts: mongoose.Types.ObjectId[]; // references to Product
  quantityRules?: IQuantityRule[];
  optionalFilters?: IOptionalFilter[];
  priority?: Record<string, string[]>;
  region?: string;
  version?: string;
}

const ProfileSchema = new mongoose.Schema<IProfile>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  tags: [String],
  requiredCategories: [String],
  baseProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  quantityRules: [{ type: mongoose.Schema.Types.Mixed }],
  optionalFilters: [{ type: mongoose.Schema.Types.Mixed }],
  priority: { type: mongoose.Schema.Types.Mixed },
  region: String,
  version: String
}, { timestamps: true });

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);

import { Profile } from "../models/Profile";

export const profileService = {
  async list(limit = 50, skip = 0) {
    return Profile.find().limit(limit).skip(skip).exec();
  },
  async getBySlug(slug: string) {
    return Profile.findOne({ slug }).populate("baseProducts").exec();
  },
  async getById(id: string) {
    return Profile.findById(id).populate("baseProducts").exec();
  },
  async create(payload: any) {
    const p = new Profile(payload);
    return p.save();
  },
};

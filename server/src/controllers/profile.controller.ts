import type { Request, Response } from "express";
import { profileService } from "../services/profile.service";

export const profileController = {
  async list(_req: Request, res: Response) {
    const profiles = await profileService.list();
    res.json(profiles);
  },

  async getBySlug(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) return res.status(400).json({ message: "Slug is required" });

    const p = await profileService.getBySlug(slug);
    if (!p) return res.status(404).json({ message: "Not found" });

    res.json(p);
  },

  async create(req: Request, res: Response) {
    const created = await profileService.create(req.body);
    res.status(201).json(created);
  }
};

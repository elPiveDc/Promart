import type { Request, Response } from "express";
import { productService } from "../services/product.service";

export const productController = {
  async list(req: Request, res: Response) {
    const products = await productService.list(req.query || {});
    res.json(products);
  },

  async get(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Product ID is required" });

    const p = await productService.getById(id);
    if (!p) return res.status(404).json({ message: "Not found" });

    res.json(p);
  },

  async create(req: Request, res: Response) {
    const created = await productService.create(req.body);
    res.status(201).json(created);
  },

  async update(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Product ID is required" });

    const updated = await productService.update(id, req.body);
    res.json(updated);
  },

  async remove(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Product ID is required" });

    await productService.remove(id);
    res.status(204).send();
  }
};

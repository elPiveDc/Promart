import type { Request, Response } from "express";
import { cartService } from "../services/cart.services";

export const cartController = {
  async create(_req: Request, res: Response) {
    const cart = await cartService.create();
    res.status(201).json(cart);
  },

  async get(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Cart ID is required" });

    const cart = await cartService.getById(id);
    if (!cart) return res.status(404).json({ message: "Not found" });

    res.json(cart);
  },

  async addItem(req: Request, res: Response) {
    const { cartId } = req.params;
    const { productId, quantity } = req.body;

    if (!cartId) return res.status(400).json({ message: "cartId is required" });
    if (!productId) return res.status(400).json({ message: "productId is required" });

    const updated = await cartService.addItem(cartId, productId, quantity || 1);
    res.json(updated);
  },

  async updateItem(req: Request, res: Response) {
    const { cartId } = req.params;
    const { productId, quantity } = req.body;

    if (!cartId) return res.status(400).json({ message: "cartId is required" });
    if (!productId) return res.status(400).json({ message: "productId is required" });

    const updated = await cartService.updateItem(cartId, productId, quantity);
    res.json(updated);
  },

  async removeItem(req: Request, res: Response) {
    const { cartId, productId } = req.params;

    if (!cartId) return res.status(400).json({ message: "cartId is required" });
    if (!productId) return res.status(400).json({ message: "productId is required" });

    const updated = await cartService.removeItem(cartId, productId);
    res.json(updated);
  }
};

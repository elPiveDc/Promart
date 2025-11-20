import { Cart } from "../models/Cart";

export const cartService = {
  async create() {
    const c = new Cart({ items: [] });
    return c.save();
  },
  async getById(id: string) {
    return Cart.findById(id).populate("items.product").exec();
  },
  async addItem(cartId: string, productId: string, qty = 1) {
    const cart = await Cart.findById(cartId);
    if (!cart) throw new Error("Cart not found");
    const existing = cart.items.find(it => it.product.toString() === productId);
    if (existing) existing.quantity += qty;
    else cart.items.push({ product: productId as any, quantity: qty });
    return cart.save();
  },
  async updateItem(cartId: string, productId: string, qty: number) {
    const cart = await Cart.findById(cartId);
    if (!cart) throw new Error("Cart not found");
    const item = cart.items.find(it => it.product.toString() === productId);
    if (!item) throw new Error("Item not found");
    item.quantity = qty;
    return cart.save();
  },
  async removeItem(cartId: string, productId: string) {
    const cart = await Cart.findById(cartId);
    if (!cart) throw new Error("Cart not found");
    cart.items = cart.items.filter(it => it.product.toString() !== productId);
    return cart.save();
  }
};

import { api } from "../api/api";

export const CartService = {
  async createCart() {
    const res = await api.post("/carts");
    return res.data;
  },

  async getCart(cartId: string) {
    const res = await api.get(`/carts/${cartId}`);
    return res.data;
  },

  async addItem(cartId: string, productId: string) {
    const res = await api.post(`/carts/${cartId}/items`, {
      productId,
    });
    return res.data;
  },

  async updateItem(cartId: string, productId: string, quantity: number) {
    const res = await api.put(`/carts/${cartId}/items`, {
      productId,
      quantity,
    });
    return res.data;
  },

  async removeItem(cartId: string, productId: string) {
    const res = await api.delete(`/carts/${cartId}/items/${productId}`);
    return res.data;
  },
};

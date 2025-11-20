import { Router } from "express";
import { cartController } from "../controllers/cart.controller";

const router = Router();
router.post("/", cartController.create);
router.get("/:id", cartController.get);
router.post("/:cartId/items", cartController.addItem);
router.put("/:cartId/items", cartController.updateItem);
router.delete("/:cartId/items/:productId", cartController.removeItem);

export default router;

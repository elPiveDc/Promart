import { Router } from "express";
import { profileController } from "../controllers/profile.controller";

const router = Router();
router.get("/", profileController.list);
router.get("/:slug", profileController.getBySlug);
router.post("/", profileController.create);

export default router;

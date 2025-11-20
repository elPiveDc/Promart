import { Router } from "express";
import { exampleController } from "../controllers/example.controller";

const router = Router();

router.get("/test", exampleController);

export default router;

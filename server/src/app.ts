import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import profileRoutes from "./routes/profile.routes";
import cartRoutes from "./routes/cart.routes";
import { errorHandler } from "./middleware/errorHandlet";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/carts", cartRoutes);

// último middleware: error handler
app.use(errorHandler);

export default app;

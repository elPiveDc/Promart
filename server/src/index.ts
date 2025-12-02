import "dotenv/config";
import app from "./app";
import connectDB from "./config/database";
// import { seed } from "./utils/seed"; Para PRECARGARDATOS

const PORT = process.env.PORT || 4000;

const start = async () => {
  await connectDB();
  //await seed(); Precarga informacion en la BD
  app.listen(PORT, () => console.log(`Server listening ${PORT}`));
  console.log("Rutas usables:");
  console.log("/api/products");
  console.log("/api/profiles");
  console.log("/api/carts");
};

start();

import { Product } from "../models/Product";
import { Profile } from "../models/Profile";

export const seed = async () => {
  // Evitar duplicados
  const pCount = await Product.countDocuments();
  if (pCount === 0) {
    const products = await Product.insertMany([
      { name: "Pintura Blanca 1L", category: "pintura", price: 25, color: "blanco", tags: ["pintura","pared"] },
      { name: "Cemento 25kg", category: "piso", price: 15, tags: ["piso","material"] },
      { name: "Tornillos bolsa 100", category: "herramientas", price: 8, tags: ["herramientas"] },
      // ... agrega más hasta ~15-30 productos
    ]);

    // Perfil ejemplo que referencia algunos products
    await Profile.create({
      slug: "remodelar-cocina",
      name: "Remodelar Cocina",
      description: "Perfil base para remodelación de cocinas",
      tags: ["cocina","remodelacion"],
      requiredCategories: ["pintura", "piso", "herramientas"],
      baseProducts: products.slice(0,2).map(p => p._id)
    });

    console.log("Seed: productos y perfiles creados");
  } else {
    console.log("Seed: ya existen productos, saltando");
  }
};

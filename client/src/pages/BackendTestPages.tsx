import React, { useEffect, useState } from "react";

type Product = {
  id: string | number;
  name?: string;
  price?: number;
};

const BackendTestPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pRes] = await Promise.all([
          fetch(`http://localhost:4000/api/products`)
        ]);


        const [pData] = await Promise.all([
          pRes.json()
        ]);

        setProducts(pData);

      } catch (error) {
        console.error("Error fetching backend data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2>Cargando datos del backend...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Test de Backend</h1>

      <section>
        <h2>Productos</h2>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </section>
    </div>
  );
};

export default BackendTestPage;

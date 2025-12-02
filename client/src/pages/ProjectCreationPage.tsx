import { useState } from "react";
import ProductList from "../components/ProductList";
import { useProfile } from "../hook/useProfile";

export default function ProjectCreationPage() {
  const [input, setInput] = useState("");
  const { profile, products, loading, error, searchProfile } = useProfile();

  const handleSearch = () => {
    const slug = input.toLowerCase().includes("cocina")
      ? "remodelar-cocina"
      : "remodelar-baño";

    searchProfile(slug);
  };

  return (
    <div>
      <h1>Creación de Proyecto</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe tu proyecto..."
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Buscando perfil...</p>}
      {error && <p>Error: {error}</p>}

      {profile && (
        <>
          <h2>Perfil encontrado: {profile.name}</h2>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}

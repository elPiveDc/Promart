import { useState } from "react";
import { useProfile } from "../../../hook/useProfile";
import ProductList from "./product/ProductList";

export default function CartProjectForm() {
  const [input, setInput] = useState("");
  const { profiles, productsByProfile, loading, error, searchFromText } =
    useProfile();

  const handleSearch = () => {
    searchFromText(input);
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-7">
          <h2 className="fw-bold mb-4">Creación de Proyecto</h2>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ejemplo: Quiero remodelar mi cocina..."
            className="form-control mb-3"
            rows={3}
          />

          <button
            onClick={handleSearch}
            className="btn btn-primary fw-semibold mb-3"
          >
            Buscar perfiles
          </button>

          {loading && <p>Buscando perfiles...</p>}
          {error && <p className="text-danger">Error: {error}</p>}

          {profiles.map((profile) => (
            <div key={profile.slug} className="mt-4">
              <h4>{profile.name}</h4>
              <ProductList products={productsByProfile[profile.slug] || []} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

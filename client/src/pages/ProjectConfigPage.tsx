import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profileService } from '../services/profileService';
import type { Profile } from '../types/Profile';
import type { Product } from '../types/Product';

const ProjectConfigPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
    const [recommendedList, setRecommendedList] = useState<Product[]>([]);
    const [calculating, setCalculating] = useState(false);

    useEffect(() => {
        if (!slug) return;
        const fetchProfile = async () => {
            try {
                const data = await profileService.getProfileBySlug(slug);
                setProfile(data);

                // Inicializa filtros si existen
                if (data.optionalFilters) {
                    const initialFilters: Record<string, string> = {};
                    Object.keys(data.optionalFilters).forEach(key => {
                        // Asume que el valor inicial es una cadena vacía o un valor por defecto
                        initialFilters[key] = '';
                    });
                    setSelectedFilters(initialFilters);
                }

            } catch (err) {
                console.error(err);
                setError(`No se pudo cargar el perfil ${slug}. ¿Existe en tu backend?`);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [slug]);


    const handleFilterChange = (filterName: string, value: string) => {
        setSelectedFilters(prev => ({ ...prev, [filterName]: value }));
    };

    // ... dentro de ProjectConfigPage.tsx

    const handleGenerateList = async () => {
        if (!profile || !slug) return;
        setCalculating(true);
        setRecommendedList([]);

        try {
            // Llama al servicio que devuelve SmartListResponse
            const result = await profileService.generateSmartList(slug, selectedFilters);

            let listToShow: Product[] = [];

            // 💡 Lógica de Consolidación Tipada:
            if (result.products) {
                // Si la respuesta es un array de productos
                listToShow = result.products;
            } else if (result.items) {
                // Si la respuesta es un array de CartItems, extraemos el objeto Product
                listToShow = result.items.map(item => item.product);
            }

            setRecommendedList(listToShow);

            if (listToShow.length === 0) {
                setError('El backend generó una lista vacía. Revisa la lógica del perfil.');
            }

        } catch (err) {
            console.error(err);
            setError('Error de conexión o en la lógica del backend.');
        } finally {
            setCalculating(false);
        }
    };
    // ...

    if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando perfil del proyecto...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>Error: {error}</div>;
    if (!profile) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Perfil no encontrado.</div>;

    return (
        <div className="container" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h2>📋 Configuración para: {profile.name}</h2>
            <p>{profile.description}</p>

            {/* 1. SECCIÓN DE FILTROS (Entrada del Usuario) */}
            <fieldset style={{ border: '1px solid #3498db', padding: '20px', marginBottom: '30px', borderRadius: '6px' }}>
                <legend style={{ fontWeight: 'bold', color: '#3498db', padding: '0 10px' }}>Ajustes del Proyecto</legend>

                {Object.keys(profile.optionalFilters || {}).map(key => (
                    <div key={key} style={{ marginBottom: '15px' }}>
                        <label htmlFor={key} style={{ display: 'block', marginBottom: '5px' }}>
                            {/* Aplicamos String() para resolver el error de tipado del paso anterior */}
                            **{String(profile.optionalFilters![key as keyof typeof profile.optionalFilters])}**:
                        </label>
                        <input
                            id={key}
                            type="text"
                            value={selectedFilters[key] || ''}
                            onChange={(e) => handleFilterChange(key, e.target.value)}
                            placeholder={`Introduce un valor para ${key}`}
                            style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                ))}

                <button
                    onClick={handleGenerateList}
                    disabled={calculating}
                    style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', marginTop: '10px' }}
                >
                    {calculating ? 'Calculando Lista...' : 'Generar Lista de Materiales'}
                </button>
            </fieldset>

            {/* 2. SECCIÓN DE RESULTADOS (El Carrito Simulado) */}
            {recommendedList.length > 0 && (
                <div style={{ border: '1px solid #e74c3c', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                    <h3>✅ Lista Recomendada (Tu Carrito Simulado)</h3>
                    <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>Esta lista fue generada con la lógica de tu perfil y filtros.</p>

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {recommendedList.map((product) => (
                            <li key={product._id} style={{ borderBottom: '1px dotted #ccc', padding: '10px 0' }}>
                                <strong>{product.name}</strong> - Categoría: {product.category} | Precio: ${product.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectConfigPage;
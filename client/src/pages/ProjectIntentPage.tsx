import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectIntentPage: React.FC = () => {
    const [intent, setIntent] = useState('');
    const navigate = useNavigate();

    const handleIntentSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // **SIMULACIÓN DE LA DETECCIÓN DE SLUG**
        // En un backend real, aquí harías: 
        // const response = await api.post('/profiles/detect', { intent });
        // const targetSlug = response.data.slug;

        let targetSlug = '';
        const textLower = intent.toLowerCase();

        // Detecta palabras clave y redirige al SLUG del perfil
        if (textLower.includes('cocina')) {
            targetSlug = 'remodelar-cocina';
        } else if (textLower.includes('baño') || textLower.includes('ducha')) {
            targetSlug = 'remodelar-bano';
        } else if (textLower.includes('piso')) {
            targetSlug = 'cambio-de-piso';
        }

        if (targetSlug) {
            navigate(`/project/${targetSlug}`);
        } else {
            alert('No encontramos un perfil de proyecto que coincida. Intenta con palabras clave como "cocina" o "baño".');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h1>Asistente de Proyectos Promart 🏡</h1>
            <p>Escribe tu idea de remodelación para generar tu lista de materiales personalizados.</p>

            <form onSubmit={handleIntentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    placeholder="Ej: Quiero remodelar mi cocina"
                    style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    required
                />
                <button
                    type="submit"
                    style={{ padding: '12px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
                >
                    Iniciar Mi Proyecto Inteligente
                </button>
            </form>
        </div>
    );
};

export default ProjectIntentPage;
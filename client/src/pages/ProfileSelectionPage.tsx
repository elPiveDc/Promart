import React, { useEffect, useState } from 'react';
import { profileService } from '../services/profileService';
import type { Profile } from '../types/Profile';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard'; // Componente que crearemos

const ProfileSelectionPage: React.FC = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const data = await profileService.getAllProfiles();
                setProfiles(data);
            } catch (err) {
                // 1. Mostrar el error detallado en la consola para el desarrollador (¡esto usa 'err'!)
                console.error('Error al obtener perfiles:', err);

                // 2. Establecer un mensaje amigable para el usuario en el estado
                setError('No se pudieron cargar los perfiles. Revisa la consola y el backend.');
            } finally {
                setLoading(false);
            }
        };
        fetchProfiles();
    }, []);

    const handleSelectProfile = (slug: string) => {
        // Redirige a la página de detalle/configuración del perfil
        navigate(`/project/${slug}`);
    };

    if (loading) return <div>Cargando perfiles...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="container">
            <h2>Selecciona tu Proyecto de Remodelación</h2>
            <p>Elige un perfil para empezar tu lista de compras inteligente.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.slug}
                        profile={profile}
                        onSelect={() => handleSelectProfile(profile.slug)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileSelectionPage;
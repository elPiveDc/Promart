import React from 'react';
import type { Profile } from '../types/Profile';

interface ProfileCardProps {
    profile: Profile;
    onSelect: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSelect }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '15px',
                borderRadius: '8px',
                cursor: 'pointer'
            }}
            onClick={onSelect}
        >
            <h3>{profile.name}</h3>
            <p>{profile.description || 'Sin descripción.'}</p>
            <small>Categorías: {profile.requiredCategories.join(', ')}</small>
        </div>
    );
};

export default ProfileCard;
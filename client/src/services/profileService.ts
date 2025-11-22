import { api } from './api';
import type { Profile } from '../types/Profile';
import type { SmartListResponse } from '../types/Response';

/** Servicio enfocado en obtener perfiles y la lista inteligente */
export const profileService = {
    // GET /profiles/:slug
    getProfileBySlug: async (slug: string): Promise<Profile> => {
        try {
            const response = await api.get(`/profiles/${slug}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching profile ${slug}:`, error);
            throw error;
        }
    },

    // POST /cart/generate-list-by-profile (La llamada clave de la lógica inteligente)
    // El backend debe devolver un array de Productos o CartItems
    generateSmartList: async (slug: string, filters: Record<string, string>): Promise<SmartListResponse> => {
        try {
            const response = await api.post(`/carts/`, {
                profileSlug: slug,
                filters: filters,
            });
            return response.data;
        } catch (error) {
            console.error('Error generating smart list:', error);
            throw error;
        }
    }
};
export interface Profile {
    _id: string;
    slug: string; // Identificador clave (ej: 'remodelar-cocina')
    name: string;
    description?: string;
    requiredCategories: string[];
    // Los filtros opcionales (lo que el usuario puede ajustar)
    optionalFilters?: Record<string, string | Record<string, string>>;
}
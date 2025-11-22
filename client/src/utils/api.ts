import axios from 'axios';

// AJUSTA ESTA URL si tu backend no corre en 5000
const API_BASE_URL = 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_BASE_URL,
    // Mantener withCredentials por si el backend lo requiere para sesión, aunque la lógica sea simulada
    withCredentials: true,
});
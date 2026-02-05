// src/api.js
const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const normalized = rawApiUrl.replace(/\/+$/, '');
const apiBase = normalized.endsWith('/api') ? normalized : normalized.replace(/\/resultados$/, '') + '/api';
export const API_RESULTADOS = normalized.endsWith('/resultados') ? normalized : `${apiBase}/resultados`;
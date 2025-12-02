# Frontend (client) - Interfaz de Asistente
Este módulo es una aplicación React (Vite) en TypeScript que provee la interfaz para la interacción con el Asistente de Proyectos. Su función principal es guiar al usuario a través del flujo de detección de intención, configuración de filtros y visualización de la lista de productos generada por el backend.

## 1. Configuración y Dependencias

| Dependencias | Propósito |
| :--- | :--- |
| `react-router-dom` | Manejo de las rutas de la aplicación (SPA). |
| `Código en línea` | Cliente HTTP para interactuar con la API del Backend. |

### Scripts Principales

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias del frontend. |
| `npm run dev` | Inicia el servidor de desarrollo de Vite (generalmente en http://localhost:5173). |

## 2. Flujo de Navegación y Componentes Clave
El frontend está diseñado como un flujo lineal enfocado en la lógica inteligente.

| Ruta | Componente | Descripción de la Interacción |
| :--- | :--- | :--- |
| `/` | ProjectIntentPage.tsx| Punto de Partida. El usuario ingresa una descripción libre (ej: "remodelar mi baño"). Simula la detección de palabras clave y redirige. |
| `/project/:slug` | ProjectConfigPage.tsx | Módulo Central. Carga el perfil, muestra los filtros (optionalFilters), y realiza la llamada final a la API para generar la lista recomendada. |

## 3. Flujo de Navegación y Componentes Clave
La comunicación se gestiona a través de los servicios y está definida por los tipos de datos que esperamos.
###Archivos de Conexión

- src/utils/api.ts: Define la base de la URL del backend.
- src/types/product.ts: Define las interfaces clave (Product, CartItem, SmartListResponse).
- src/services/profileService.ts: Contiene la lógica de la capa de servicio para la API.




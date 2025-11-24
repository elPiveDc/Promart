# Asistente de Proyectos Inteligente - Promart
Este repositorio contiene el código fuente para el Asistente de Proyectos Inteligente, cuyo objetivo es demostrar una lógica de negocio avanzada al transformar 
una simple descripción de proyecto del usuario (ej: "Quiero remodelar mi cocina") en una lista de materiales precisa y personalizada, utilizando perfiles predefinidos, filtros y reglas de cantidad.
El proyecto está dividido en dos módulos principales:

1. `server/` (Backend): API RESTful desarrollada con Express, Mongoose y TypeScript.

2. `client/` (Frontend): Aplicación de una sola página (SPA) construida con React y TypeScript.

## 1. Arquitectura del Proyecto
El sistema sigue una arquitectura cliente-servidor tradicional, con el backend actuando como la capa de lógica y datos, y el frontend como la capa de presentación.
### Tecnologías Clave:
| Componente | Tecnología Principal | Propósito |
| :--- | :--- | :--- |
| Backend | Node.js (Express & Mongoose) | Servir la API y gestionar la base de datos (MongoDB). Ejecuta la lógica de las quantityRules. |
| Frontend | React & TypeScript (Vite) | Interfaz de usuario y gestión del flujo de proyectos. |
| Base de Datos | MongoDB | Almacenamiento de Productos, Perfiles y Reglas de Lógica Inteligente. |

## 2. Guía de Inicio Rápido (Getting Started)
Para ejecutar el proyecto, debes iniciar el backend y el frontend en terminales separadas, asegurando que el servicio de MongoDB esté activo.

### A. Requisitos Previos
- Node.js (v18 o superior)
- npm (v9 o superior)
- MongoDB Community Server (Debe estar instalado y el servicio corriendo).

### B. Configuración de la Base de Datos (Primer Uso)
Antes de iniciar el servidor, debes cargar los datos iniciales.
1. Asegúrate de que el servicio de MongoDB esté activo y escuchando en el puerto 27017.
2. Abre MongoDB Compass o la Mongo Shell.
3. Utiliza los comandos en el archivo EjecutarenMongoGosh.txt para:
  - Crear la base de datos (ej: promartdb).
  - Cargar los datos de productos.json en la colección products.
  - Cargar los datos de perfiles.json en la colección profiles.

### C. Iniciar el Backend (Servidor)
1. Abre la primera terminal y navega a la carpeta server/.
2. Instala dependencias: npm install
3. Inicia el servidor (usando el script de desarrollo): npm run dev
  - Nota: Deberías ver un mensaje de conexión exitosa a MongoDB y que el servidor está corriendo en el puerto 5000.

### D. Iniciar el Frontend (Cliente)
1. Abre la segunda terminal y navega a la carpeta client/.
2. Instala dependencias: npm install
3. Inicia la aplicación: npm run dev
  - Accede: La aplicación estará disponible en un puerto local (ej: http://localhost:5173)




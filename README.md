
# Hermanos Jota – Plataforma E-commerce de Muebles
Proyecto académico – Curso Full Stack ITBA

---

#  Resumen del proyecto
<br>

Aplicación **Full-Stack** diseñada para gestionar catálogo de productos, usuarios, favoritos, carrito de compras y órdenes en una tienda de muebles. El sistema incluye un frontend en **React + Vite** y un backend en **Node.js, Express y MongoDB Atlas**, con autenticación segura mediante **JSON Web Tokens (JWT)**.

---

## Características Principales

### Autenticación & Usuarios

* Registro e inicio de sesión seguro con **JWT**.
* Edición de perfil.
* Persistencia del usuario autenticado entre sesiones.

### Carrito de Compras

* Funcionalidad completa: agregar, modificar y eliminar productos del carrito.
* Carrito asociado directamente a la sesión y el usuario.
* Popup de carrito moderno para una experiencia fluida.

### Catálogo

* Gestión de productos, guardados en la base de datos.
* Vista rápida de favoritos desde el *header*.
* Listado dinámico de productos desde **MongoDB**.
* Preparado para futuras ampliaciones de paginación y filtrado.

### Órdenes de Compra

* Creación de órdenes al finalizar la compra.
* Asociación de la orden con el usuario autenticado.
* Persistencia y almacenamiento de las órdenes en la base de datos.

---

# Tecnologías Utilizadas

### **Frontend** (Carpeta `hermanos-jota-frontend`)

| Tecnología | Descripción |
| :--- | :--- |
| **React + Vite** | Desarrollo rápido de la interfaz de usuario. |
| **React Hooks** | Manejo de estado eficiente. |
| **Context API** | Gestión de estados globales (`AuthContext`, `CartContext`). |
| **CSS** | Estilos tradicionales y por componentes para un diseño modular. |
| **Fetch API** | Comunicación asíncrona con el backend. |

### **Backend** (Carpeta `hermanos-jota-backend`)

| Tecnología | Descripción |
| :--- | :--- |
| **Node.js + Express** | Servidor robusto y escalable. |
| **MongoDB Atlas + Mongoose** | Base de datos NoSQL en la nube y modelado de datos. |
| **JWT & Bcrypt** | Autenticación y cifrado de contraseñas seguras. |
| **CORS & Dotenv** | Configuración de peticiones *cross-origin* y gestión de variables de entorno. |

---

# Instalación y Configuración

### Requisitos Previos

Asegúrate de tener instalado:

* **Node.js v18 o superior**
* **npm** o **yarn** (gestor de paquetes)
* Una cuenta y URI de conexión en **MongoDB Atlas** (para la base de datos).
* Para probar el Backend: Dentro de la carpeta Backend crear archivo ".env" siguiendo el ejemplo de ".env.example" y completar los campos con los datos requeridos.

# Configuración del Backend
Instalar dependencias:

Bash
cd hermanos-jota-backend
npm install

Ejecutar en desarrollo:
npm run seed
npm run dev

Probar endpoints:

   ## Obtener todos los productos
   curl http://localhost:3001/api/productos

   ## Obtener producto específico
   curl http://localhost:3001/api/productos/1

   ## Obtener productos por categoría
   curl "http://localhost:3001/api/productos?categoria=sillas"

   ## Probar ruta no encontrada
   curl http://localhost:3001/api/categorias

# Configuración del Frontend
Instalar dependencias:

Bash

cd hermanos-jota-frontend
npm install

* Crear archivo de entorno: Crea un archivo llamado .env en la raíz de la carpeta hermanos-jota-frontend para apuntar a la API: Code snippet
* VITE_API_URL=http://localhost:3001

# Estructura de Archivos del Proyecto


```plaintext

Mueblaria-HJ-main/
│
├── hermanos-jota-backend/              # API REST con Node.js + Express + MongoDB
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   │
│   ├── config/
│   │   └── database.js                 # Conexión a MongoDB
│   │
│   ├── data/
│   │   └── productos.js                # Datos iniciales (mock)
│   │
│   ├── middleware/
│   │   └── auth.js                     # Middleware de autenticación (JWT)
│   │
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   │
│   ├── node_modules/
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productosRoutes.js
│   │   └── productRoutes.js
│   │
│   └── scripts/
│       └── seedDatabase.js             # Script para cargar datos a la base
│
│
└── hermanos-jota-frontend/             # Aplicación React
    ├── public/                         # Archivos estáticos
    │
    ├── src/
    │   ├── components/                 # Componentes reutilizables
    │   │   ├── CartButtom.jsx
    │   │   ├── CartPopup.jsx
    │   │   ├── CRUDDemo.jsx
    │   │   ├── FavoritesPopup.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Navbar.jsx
    │   │   └── ProductList.jsx
    │   │
    │   ├── context/                    # Estado global (Context API)
    │   │   ├── AuthContext.jsx
    │   │   ├── CartContext.jsx
    │   │   └── tarea/                  # Carpeta de pruebas/desarrollo
    │   │
    │   ├── CSS/                        # Estilos modulares
    │   │   ├── App.css
    │   │   ├── CartButton.css
    │   │   ├── CartPopup.css
    │   │   ├── Checkout.css
    │   │   ├── contacto.css
    │   │   ├── CRUD.css
    │   │   ├── Detalle.css
    │   │   ├── FavoritesPopup.css
    │   │   ├── Home.css
    │   │   ├── login.css
    │   │   ├── Menu.css
    │   │   ├── Nosotros.css
    │   │   └── ProductosCard.css
    │   │
    │   └── pages/                      # Vistas principales del sitio
    │       ├── Checkout.jsx
    │       ├── ContactForm.jsx
    │       ├── Login.jsx
    │       ├── Nosotros.jsx
    │       ├── ProductCard.jsx
    │       ├── ProductDetail.jsx
    │       ├── ProfilePage.jsx
    │       └── Register.jsx
    │
    ├── App.js                          # Componente raíz
    ├── index.js                        # Punto de entrada de React
    ├── reportWebVitals.js
    ├── .gitignore
    ├── package.json
    └── README.md
```
# Modo de Uso y Ejecución
Una vez que el backend (http://localhost:3001) y el frontend (http://localhost:3000) estén corriendo (usando npm run dev en cada carpeta, como se explicó en la instalación), la aplicación está lista para usarse.

# Deploy
## Backend – Render : https://hermanos-jota-u1a3.onrender.com
## Frontend – Vercel : https://muebleria-git-main-mile1.vercel.app?_vercel_share=KcAStNWHeGFNv52GzCP8f2692e1Nklq9

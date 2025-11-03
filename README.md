# Mueblaria-HJ
Proyecto curso full stack ITBA
#  Mueblería HJ
Proyecto académico – Curso Full Stack ITBA

---

##  Resumen del proyecto
El presente proyecto corresponde al desarrollo de un sitio web de **e-commerce para Mueblería Hermanos Jota (HJ)**, realizado en el marco del curso **Full Stack Developer – ITBA**.
El objetivo es construir una plataforma online que permita a los clientes visualizar productos de mobiliario, acceder a sus detalles, conocer a la empresa y establecer contacto.

El proyecto se divide en diferentes sprints que abarcan desde la maquetación inicial hasta la implementación de funcionalidades dinámicas en JavaScript y, en etapas posteriores, la conexión con un backend.

---

##  Estructura del proyecto
Mueblaria-HJ-main/
│── Instrucciones.txt
│── PersonalTemplate.html
│── README.md
│── package-lock.json
│── package.json
│
├── .vscode/
│   └── settings.json
│
├── backend/
│   │── .envexample
│   │── .gitignore
│   │── package-lock.json
│   │── package.json
│   │── server.js
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── scripts/
│   │   └── seedDatabase.js
│
├── hermanos-jota-frontend/
│   │── .env
│   │── .gitignore
│   │── README.md
│   │── package-lock.json
│   │── package.json
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo.svg
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── productos.js
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │
│   │   ├── CSS/
│   │   │   ├── CartPopup.css
│   │   │   ├── Detalle.css
│   │   │   ├── FavoritesPopup.css
│   │   │   ├── Home.css
│   │   │   ├── Menu.css
│   │   │   ├── Nosotros.css
│   │   │   ├── ProductosCard.css
│   │   │   └── contacto.css
│   │
│   │   ├── components/
│   │   │   ├── CartPopup.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── FavoritesPopup.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Nosotros.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ProductList.js
│
└── (archivos raíz y carpetas varias del entorno React y Node)



---

##  Funcionalidades desarrolladas

- **Página principal (Home):** muestra introducción e identidad de la mueblería.
- **Productos:** catálogo con variedad de muebles y sus características.
- **Detalle de producto:** descripción ampliada de cada mueble, con imagen y medidas.
- **Carrito de compras (simulado):** agregado de productos.
- **Sección “Nosotros”:** historia y presentación de la empresa.
- **Sección “Contacto”:** formulario para que el usuario se comunique con la mueblería.


##  Equipo de trabajo

Proyecto realizado por el equipo **Hermanos Jota**:
- Integrante 1 Constanza Calicchio
- Integrante 2 Milena Casarrubia
- Integrante 3 Mariano Céspedes
- Integrante 4 Ignacio Aramayo


---

##  Licencia
Este proyecto fue desarrollado con fines **educativos y académicos** en el marco del curso **Full Stack – ITBA**.

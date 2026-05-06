# Portfolio · Sergio Herrera

Portfolio personal desarrollado con **React + Vite + Tailwind CSS**.
Diseño moderno, responsive, animaciones suaves y secciones modulares.

---

## 1. Estructura de carpetas

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── public/
│   ├── favicon.svg
│   └── assets/                    ← TUS IMÁGENES VAN AQUÍ
│       ├── README.txt
│       ├── profile.jpg            (tú la añades)
│       ├── project1.png           (tú la añades)
│       ├── project2.png           (tú la añades)
│       └── project3.png           (tú la añades)
└── src/
    ├── main.jsx                   ← entrada de React
    ├── App.jsx                    ← layout principal
    ├── index.css                  ← Tailwind + estilos globales
    ├── data/
    │   └── portfolio.js           ← TODOS los textos y datos editables
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        └── Contact.jsx
```

---

## 2. Cómo ejecutarlo

Necesitas **Node.js 18+** instalado ([descargar](https://nodejs.org)).

Desde la carpeta `portfolio/`:

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
```

Vite abrirá automáticamente `http://localhost:5173` en tu navegador.

Otros comandos:

```bash
npm run build      # genera la versión de producción en /dist
npm run preview    # sirve el build local para probarlo
```

---

## 3. Cómo poner tus imágenes

Todas las imágenes se cargan desde la carpeta **`public/assets/`**.
Vite sirve esa carpeta desde la raíz `/`, así que basta con:

1. **Foto personal (Hero):**
   - Copia tu foto a `public/assets/profile.jpg`
   - El Hero ya la usa con la ruta `/assets/profile.jpg`

2. **Capturas de proyectos:**
   - Guarda 3 imágenes como `project1.png`, `project2.png`, `project3.png`
     en `public/assets/`
   - Tamaño recomendado: 1280×720 o similar (16:9)

> Si una imagen no existe, el componente muestra un placeholder automático
> (no rompe la web).

### Cambiar nombres de archivo o añadir más

Edita las rutas en [src/data/portfolio.js](src/data/portfolio.js):

```js
export const profile = {
  // ...
  photo: '/assets/profile.jpg',   // ← cámbialo si usas otro nombre
}

export const projects = [
  {
    title: 'Mi proyecto',
    image: '/assets/project1.png', // ← cámbialo aquí
    // ...
  },
]
```

---

## 4. Cómo personalizar el contenido

Casi todo el contenido editable vive en un solo archivo:
**[src/data/portfolio.js](src/data/portfolio.js)**

Desde ahí puedes cambiar:

- Nombre, rol, tagline, ubicación
- Email, teléfono, redes sociales (GitHub, LinkedIn)
- Texto "Sobre mí"
- Stats del Hero
- Skills (categorías y elementos)
- Proyectos (título, descripción, tags, links a demo y repo)

Para cambios visuales (colores, animaciones), edita
[tailwind.config.js](tailwind.config.js). Los colores de marca están bajo
`theme.extend.colors.brand`.

---

## 5. Secciones incluidas

- **Navbar** fija con efecto blur al hacer scroll y menú móvil
- **Hero** con foto en formato retrato (4:5), badge "Disponible", redes sociales y stats
- **Sobre mí** con foto secundaria, cita superpuesta y highlights (frontend / backend / experiencia previa)
- **Proyectos** en cards con bloques Reto · Solución · Impacto, logo y stack
- **Habilidades** divididas en Frontend / Backend / Datos & Tooling / Soft skills, con nivel
- **Contacto** con formulario que abre `mailto:` + datos directos y redes sociales

Todas las secciones son **responsive** (mobile-first) y usan animaciones
sutiles definidas en `tailwind.config.js`.

---

## 6. Stack

| Herramienta | Versión | Para qué sirve |
|---|---|---|
| React 18 | UI declarativa por componentes |
| Vite 5 | Servidor de desarrollo + bundler ultrarrápido |
| Tailwind CSS 3 | Utilidades CSS para estilos sin escribir CSS plano |
| PostCSS + Autoprefixer | Procesado y compatibilidad de navegadores |

---

## 7. Próximos pasos sugeridos

- Sustituir las imágenes y links de proyectos por los reales
- Subir el código a GitHub y desplegar gratis en Vercel/Netlify
  (con `npm run build`, ambos detectan Vite automáticamente)
- Añadir un favicon propio en `public/favicon.svg`
- Si añades más secciones, mantén el patrón: un componente por sección,
  datos en `src/data/portfolio.js`

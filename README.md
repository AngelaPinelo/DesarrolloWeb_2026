# Tienda en Línea (React + Bootstrap) — DesarrolloWeb_2026

## Datos del estudiante

- **Nombre completo:** Angela Gabriela Pinelo Flores
- **Carnet:** 9490-24-1578

## Enlace del sitio publicado (Netlify)

> Pendiente de agregar tras el despliegue en Netlify.

## Descripción del proyecto

Tarea 2 del curso de Desarrollo Web: transformación de la Tienda en Línea (Tarea 1,
hecha en HTML nativo) en una aplicación web interactiva construida con **React**,
**React Router** y **React-Bootstrap**, conservando la misma arquitectura de
información (inicio, catálogo, detalle de producto, carrito, registro/login,
contacto y nosotros) pero ahora componetizada, modular y responsiva.

## Estructura del sitio

El sitio cuenta con 7 páginas/rutas, todas dentro de una sola aplicación de React:

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Bienvenida, `Carousel` de promociones y `Card` de productos destacados |
| `/productos` | Productos | Catálogo completo con filtro por categoría/orden y `Card` |
| `/productos/:id` | Detalle de producto | Especificaciones (`Table`), `Accordion` y `Modal` al agregar al carrito |
| `/carrito` | Carrito | Tabla interactiva de productos, cantidades y formulario de envío/pago |
| `/registro` | Registro / Iniciar sesión | Formularios de registro e inicio de sesión en `Tabs` |
| `/contacto` | Contacto | Formulario de contacto e información de la tienda |
| `/nosotros` | Nosotros | Misión, visión, valores (`Accordion`) y tabla del equipo |

La barra de navegación (`Navbar`) y el pie de página (`Footer`) son componentes
reutilizables (`src/components`) presentes en todas las páginas. El `Footer`
incluye el nombre completo, carnet y los módulos aportados por cada integrante.

## Estructura del código

```
src/
  components/   Navbar y Footer (globales, reutilizables)
  pages/        Inicio, Productos, ProductoDetalle, Carrito, Registro, Contacto, Nosotros
  data/         Datos de los productos del catálogo
  App.jsx       Definición de rutas (React Router)
  main.jsx      Punto de entrada
```

## Cómo ejecutar el proyecto localmente

```bash
npm install
npm run dev
```

Luego abrir la URL que indica la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
```

## Repositorio y rama

Este trabajo se encuentra versionado en GitHub y fue subido a la rama `Tarea2`,
tal como lo solicita el enunciado de la tarea.

## Publicación

El sitio fue publicado utilizando [Netlify](https://www.netlify.com/), con
comando de build `npm run build` y carpeta de publicación `dist` (ver
`netlify.toml`).

# Hoja de Trabajo 2 — Excursión a Tikal y Flores, Petén

## Descripción del proyecto

Página web informativa para promocionar una excursión al Parque Nacional Tikal y la
Isla de Flores, en el departamento de Petén, Guatemala. Incluye una descripción del
lugar, un índice de navegación interna, una galería de imágenes, una tabla con el
itinerario detallado de la excursión y un listado de actividades adicionales
disponibles para los visitantes.

Este trabajo es de carácter **individual**.

## Mejoras realizadas en la Hoja de Trabajo 2

Sobre la base de la Hoja de Trabajo 1 (solo HTML), se agregó una hoja de estilos
(`css/estilos.css`) y se hicieron ajustes al HTML:

- **Estilos CSS**: paleta de colores inspirada en la selva petenera (verde y dorado),
  tipografía legible, tarjetas con sombra suave para cada sección, tabla de itinerario
  con encabezado resaltado y filas alternadas, galería en cuadrícula con efecto de
  zoom suave al pasar el cursor sobre las imágenes.
- **Accesibilidad**: se agregó `meta viewport`, `meta description`, atributo
  `aria-label` al índice, `scope="col"` en los encabezados de la tabla y `alt`
  descriptivo en todas las imágenes.
- **Semántica**: las imágenes de la galería ahora usan `<figure>` y `<figcaption>`,
  y la tabla incluye un `<caption>` que describe su contenido.
- **Responsivo**: se utilizaron *media queries* para que el índice, las secciones y
  la tabla de itinerario se adapten correctamente a pantallas pequeñas (la tabla se
  convierte en un listado de tarjetas apiladas en móvil).

## Enlace del sitio publicado (Netlify)

https://hoja2angelapinelo.netlify.app/

## Estudiante

- **Nombre completo:** Angela Gabriela Pinelo Flores
- **Carnet:** 9490-24-1578

## Estructura del proyecto

| Archivo / Carpeta | Descripción |
|---|---|
| `index.html` | Página única con todas las secciones solicitadas |
| `css/estilos.css` | Hoja de estilos de la página |
| `img/` | Imágenes de la galería (Tikal y Flores, Petén) |

## Cómo visualizar el sitio localmente

1. Clonar este repositorio y cambiar a la rama `HojaTrabajo2`.
2. Abrir el archivo `index.html` con cualquier navegador web (no requiere servidor).
3. Usar el índice al inicio de la página para navegar entre secciones.


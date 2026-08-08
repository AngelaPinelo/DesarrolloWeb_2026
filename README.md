# Hoja de Trabajo 3 — Excursión a Tikal y Flores, Petén

## Descripción del proyecto

Página web informativa para promocionar una excursión al Parque Nacional Tikal y la
Isla de Flores, en el departamento de Petén, Guatemala. Incluye una descripción del
lugar, un índice de navegación interna, una galería de imágenes, una tabla con el
itinerario detallado de la excursión, un listado de actividades adicionales y ahora
funcionalidades interactivas con JavaScript.

Este trabajo es de carácter **individual**.

## Funcionalidades interactivas agregadas en la Hoja de Trabajo 3

Sobre la base de la Hoja de Trabajo 2 (HTML + CSS), se agregó un archivo externo
`js/script.js` con las siguientes funcionalidades:

- **Galería con visor modal**: al hacer clic en cualquier imagen de la galería se
  abre un modal con la imagen en grande y su título; se cierra con el botón "×" o
  haciendo clic fuera de la imagen.
- **Calculadora de cotización**: formulario con número de asistentes, tipo de
  paquete (`<select>`) y servicios adicionales (`<input type="checkbox">`); al
  presionar "Calcular Total" se muestra el precio estimado en pantalla sin recargar
  la página.
- **Buscador de actividades**: campo de texto que filtra en tiempo real los
  elementos de la lista de actividades disponibles a medida que se escribe.
- **Formulario de contacto/reservación**: valida que los campos no estén vacíos
  antes de "enviar" y muestra un mensaje dinámico de confirmación personalizado
  (ej. "¡Gracias [Nombre], tu solicitud para [X] personas ha sido registrada!").
- **Opiniones de visitantes**: sección que muestra 3 testimonios aleatorios,
  generados a partir de dos arreglos (nombres y comentarios) definidos en el
  JavaScript; el botón "Ver otras opiniones" vuelve a sortear la selección.

## Enlace del sitio publicado (Netlify)

_Pendiente: reemplazar con el enlace generado al publicar la rama `HojaTrabajo3` en Netlify._

## Estudiante

- **Nombre completo:** Angela Gabriela Pinelo Flores
- **Carnet:** 9490-24-1578

## Estructura del proyecto

| Archivo / Carpeta | Descripción |
|---|---|
| `index.html` | Página única con todas las secciones solicitadas |
| `css/estilos.css` | Hoja de estilos de la página |
| `js/script.js` | Interactividad: modal, cotizador, buscador, formulario y testimonios |
| `img/` | Imágenes de la galería (Tikal y Flores, Petén) |

## Cómo visualizar el sitio localmente

1. Clonar este repositorio y cambiar a la rama `HojaTrabajo3`.
2. Abrir el archivo `index.html` con cualquier navegador web (no requiere servidor).
3. Usar el índice al inicio de la página para navegar entre secciones.

## Repositorio y rama

Este trabajo se encuentra versionado en GitHub y fue subido a la rama `HojaTrabajo3`,
creada a partir de la rama `HojaTrabajo2`, tal como lo solicita el enunciado de la
hoja de trabajo.

## Publicación

El sitio fue publicado utilizando [Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/),
siguiendo la guía oficial de despliegue paso a paso.

# Portafolio · Taller de Diseño de Interfaces

**Juan Domingo Pastorino · Universidad Adolfo Ibáñez · 2026**

🌐 **Sitio:** https://juandomingoo.github.io/

Portafolio web con todos los trabajos del taller, organizados por unidad. Cada proyecto tiene una ficha con su concepto, experiencia y público, funcionamiento, tecnología, proceso y video, más enlaces a su demo y a su repositorio.

## Contenido

| Unidad | Proyecto | Ficha | Repositorio |
|---|---|---|---|
| 1 · Interfaces Sonoras | Botón interactivo (keyboard hack) | `boton-interactivo.html` | *(pendiente)* |
| 2 · Interfaces Físicas | Misión Meteorito (controlador Arduino) | `mision-meteorito.html` | [controlador-fisico-entrega1](https://github.com/juandomingoo/controlador-fisico-entrega1) |
| 3 · Interfaces Gráficas | Atrapar la nube (MediaPipe + Three.js) | `atrapar-la-nube.html` | [atrapar-la-nube](https://github.com/juandomingoo/atrapar-la-nube) |
| 3 · Ejercicios | MediaPipe, AR.js y A-Frame | (en la portada) | [unidad-3-ejercicios](https://github.com/juandomingoo/unidad-3-ejercicios) |

## Criterios de diseño

- **Arquitectura simple**: una portada con las 3 unidades y una ficha por proyecto, todas con la misma estructura.
- **Color por unidad**: rosa para Sonoras, verde para Físicas y óxido para Gráficas, así se sabe siempre en qué unidad se está.
- **Responsivo**: se adapta al celular, con menú desplegable.
- **Sin dependencias**: HTML, CSS y JavaScript puros, publicados con GitHub Pages.

## Cómo actualizar

- **Videos**: en cada ficha, pegar el link de YouTube o Google Drive en `data-video=""`. Mientras esté vacío se muestra "Video próximamente".
- **Fotos**: subirlas a `img/` con el nombre que indica cada ficha (por ejemplo `u2-caja.jpg`). Mientras no existan se muestra un recuadro "Foto pendiente".

## Estructura

```
├── index.html               # portada con las 3 unidades
├── boton-interactivo.html   # ficha Unidad 1
├── mision-meteorito.html    # ficha Unidad 2
├── atrapar-la-nube.html     # ficha Unidad 3
├── css/style.css
├── js/site.js               # menú, videos y fotos pendientes
└── img/
```

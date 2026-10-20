# ARCHIVO MALDITO — guía de instalación y explicación

## Archivos
- `index.html`: estructura y contenido del sitio.
- `styles.css`: colores, distribución, tipografías, animaciones y adaptación a pantallas.
- `script.js`: buscador, filtros, lectura de historias, terminal, contraseña secreta, reloj y sonidos opcionales.

## Cómo abrirlo en Visual Studio Code
1. Descargá y descomprimí `archivo_maldito.zip`.
2. Abrí Visual Studio Code y elegí **Archivo > Abrir carpeta**. Seleccioná la carpeta `archivo_maldito`.
3. Si no tenés Live Server, entrá en Extensiones, buscá **Live Server** e instalalo.
4. Abrí `index.html` y tocá **Go Live** abajo a la derecha.
5. Se abre la página en el navegador. Dejá los tres archivos en la misma carpeta para que funcionen las rutas.

No necesita instalar paquetes ni ejecutar un servidor con Node. La fuente de Google Fonts requiere internet; si no hay conexión, el sitio usa fuentes de reemplazo.

## Cómo probar las funciones
- Usá el buscador para filtrar historias por título o palabras clave.
- Tocá CLÁSICOS u ORIGINALES para filtrar por categoría.
- Abrí cualquier expediente para leerlo en una ventana modal.
- Activá SONIDO: ON para escuchar pequeños tonos de interfaz; se puede volver a apagar.
- En la contraseña probá `0333` (también acepta `03:33` y `333`).
- En la terminal probá `ayuda`, `fecha`, `buscar`, `quien_esta_ahi`, `salir` y `reset`.
- Tocá varias veces el logo para encontrar una pista escondida.

## Explicación para defender el trabajo

### 1. HTML5 — `index.html`
HTML define la estructura y el significado del contenido.
- `<!DOCTYPE html>` declara que el documento usa HTML moderno.
- `<head>` contiene metadatos, título, enlace al CSS y carga del JavaScript con `defer`.
- `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>` separan el sitio en partes semánticas.
- Las tarjetas `<article>` representan historias independientes.
- Los formularios (`<form>`) sirven para la contraseña y la terminal.
- `<dialog>` crea una ventana para leer una historia sin salir de la página.
- Los `id` permiten que JavaScript encuentre elementos específicos; las clases permiten aplicar estilos a varios elementos.

### 2. CSS3 — `styles.css`
CSS controla la apariencia.
- `:root` guarda colores y fuentes como variables para cambiar el tema desde un solo lugar.
- `display: grid` organiza las tarjetas y columnas; `flex` organiza menús y filas.
- Los gradientes crean fondos oscuros sin necesitar imágenes externas.
- `@keyframes` define animaciones como el cursor parpadeante y los glitches.
- Las media queries `@media` adaptan la página a celulares.
- `:hover` cambia el aspecto al pasar el cursor.
- `prefers-reduced-motion` reduce las animaciones para personas que prefieren menos movimiento.
- Las clases `.image-forest`, `.image-water`, etc. construyen ilustraciones abstractas con CSS.

### 3. JavaScript — `script.js`
JavaScript agrega comportamiento.
- `stories` guarda el contenido de los expedientes en objetos; así podemos cambiar los relatos sin rehacer el HTML.
- `querySelector` encuentra elementos de la página y `addEventListener` responde a clics, escritura o envío de formularios.
- `filterStories()` combina la búsqueda con los filtros de categoría.
- `openStory()` carga el relato elegido en el cuadro `<dialog>`.
- La contraseña valida el texto ingresado y abre el expediente secreto si coincide.
- La terminal compara el comando escrito con funciones disponibles y muestra una respuesta.
- `playTone()` usa la Web Audio API para generar tonos sencillos. Solo funciona después de activar el sonido y no descarga archivos de audio.
- `setInterval()` actualiza el reloj cada segundo y `setTimeout()` muestra un cambio de estado más adelante.

## Ideas para explicarlo con tus palabras
“Elegimos las creepypastas porque mezclan leyendas urbanas con la cultura de internet. Diseñamos una página con estética de sitios viejos: fondo oscuro, tipografía monoespaciada, líneas de pantalla y colores rojos y verdes. Con HTML organizamos las secciones; con CSS hicimos el diseño adaptable y las animaciones; y con JavaScript agregamos el buscador, los filtros, las ventanas de lectura, una terminal ficticia y una contraseña secreta. Usamos IA como asistente, pero revisamos y probamos el código para entender cómo funciona.”

## Importante
- El contenido es ficción y las imágenes abstractas principales se dibujan con CSS.
- El audio está apagado por defecto y solo genera tonos cuando el visitante lo activa.
- La web no pide permisos ni accede a cámara, micrófono, archivos personales ni datos de cuentas.
- La clave `0333` es un acertijo de la página, no una medida real de seguridad.

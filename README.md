# Haruhi - VideoJuego de fin de curso
Haruhi(codigo clave) sera un engine para Videojuegos Web creado en Typescript con una fuerte inclinación a POO

**Registro de Cambios en [docs/changelog.md](docs/changelog.md)**

## Caracteristicas
**<center>GameEngine en 2.41KiB Minificado</center>**

Aqui dejare un listado de caracteristicas que tendré en cuenta al desarrollar mi videojuego
- [ ] Debera poderse correr en una ventana, osea fuera de el navegador
- [ ] Debera alcanzar un minimo de 60fps
- [ ] Debera tener 6 niveles, con un sistema de leatherboard, y si es posible juego en linea.
- [ ] Debera tener una bonita UI
- [ ] El engine lo quiero construir yo
- [ ] Las ilustraciones sera PixelArt, para que sea mas facil dibujar y que se vea bonito
- **Caracteristicas del engine**
    - [x] Hecho en **Typescript**
    - [ ] Debera soportar animaciones
    - [ ] Debera ser facil de implementar

## Configuración del Proyecto
Para eso deberás tener BunJS instalado, y tener una pequeña conexión a Internet.
Primero, haremos la instalación de las dependecias del proyecto usando Bun
```bash
bun install
```
Despúes compilaremos el codigo con Bun para que nuestro código Typescript pueda
ser compilado a Javascript el cual sera el interpretado.
```bash
bun build index.ts --outdir dist --minify --sourcemap=external
```

## Ejecución
Por el momento, simplemente deberás abrir el archivo `index.html` el cual iniciará
todo nuestro juego, posteriormente estoy pensando en dejar una forma de usar un ejecutable de
Windows y Linux.
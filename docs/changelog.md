# Registro de Cambios
## HaruhiEngine v0.1b
+ Ya se pueden renderizar sprites
+ Hay un ciclo basico para la actualización de las entidades `Entity->update()`
+ Se añadio la primera versión de el RenderQueeue
+ Se añadio una forma facil de poder acceder a las pulsaciones de el teclado
+ Se agrego una base de datos local para guardar archivos de guardado o progreso.
**<center><img src="image.png" alt="Imagen de Referencia"/>Imagen de Referencia</center>**

## HaruhiEngine v0.2beta
+ Se pueden renderizar escenas. **(PromiseLike/sync)**
+ API de keyboard y renderer utilizable en todo tu proyecto.
+ Se agrego `Engine.changeScene()` utilizable al pasar una escena como parametro - _temporalmente se requiere que sea una escena pre-construida_
+ Ahora _keyboard_ soporta multiples teclas usando el atributo `keyborad.Holding`.
+ **Experimental!!** - Se esta trabajando en transpilar tu app a un ejecutable.

# HaruhiEngine v0.3b
+ Se agrego una pequeña implementación de un controlador de Mouse
+ Se agrego la variable global `haruhi` y `window.haruhi`.
+ Se agrego el `delta` a la variable global
+ Se movio la entrada de keyboard al namespace `Haruhi`
+ Iniciando el desarrollo de un z-index para el renderer
+ **<p><span style="color: green">[FIX]</span> - Se soluciono el error relacionado con la variable `crypto.randomUUID()` moviendola a `haruhi->uuid()`</p>**
+ **<p><span style="color: orange">[WARN]</span> - Se recomienda reescribir sus eventos del teclado para que apunten al nuevo namespace de Haruhi `window.haruhi.keyboard` o `haruhi.keyboard`</p>**

# HaruhiEngine v0.3.1b
+ Se agrego y se corrigio el `z-index`
+ Se agrego la posibilidad de ocultar una entidad a travez de su atributo `hide`
+ **`haruhi.keyboard`** 
    + Se agrego el HoldingOnce:`string[]`, el cual permite ver si una tecla ha sido presionada y solo dura un frame
    + Se hicieron privados los atributos que manejaban el Teclado
    + Se eliminaron varios console.logs, ganando  aproximadamente 2kbs de espacio
+ **`Entity`**
    + Se agrego el evento **`attached`** el cual sirve para ejecutar codigo antes de que el elemento sea renderizado por primera vez, es un evento asincrono
    + Nuevas propiedades
        - `hide: boolean = false` Controla si la entidad sera renderizada o no.
+ Varias mejoras en los controladores de `mouse` y se agrego el Nodo `TextNode` disponible bajo el subfijo `@/haruhi/nodes`


**<center><img src="./image-1.png" alt="Haruhi v0.3.1b"/><p>Prueba de el TextNode</p></center>**
CRUDY - Los Ecos del Codigo Perdido

Descripcion

CRUDY es un juego narrativo interactivo ambientado en un universo digital, donde el jugador debe tomar decisiones en diferentes niveles que afectaran tres atributos principales: logica, empatia y fallos. Cada eleccion guia al jugador a uno de los tres posibles finales del juego, construyendo una experiencia unica basada en sus decisiones

Como jugar

1. Haz clic en comenzar para iniciar la historia.
2. Lee cuidadosamente cada escenario.
3. Toma decisiones que afectaran tus atributos de jugador:
   - Logica: decisiones racionales.
   - Empatia: decisiones emocionales o humanas.
   - Fallos: decisiones arriesgadas o erróneas.

Al final, el sistema evaluara tus desiciones y mostrara uno de los siguientes desenlaces:
- Liberación de CRUDY (alto equilibrio entre logica y empatia)
- Reescritura del sistema (alta logica, pocos fallos)
- Bucle eterno (muchos fallos)

Estructura del Proyecto

/assets/               # Imagenes e iconos usados en el juego
/css/style.css         # Estilos visuales del juego
/index.html            # Pagina principal del juego
/playerstats.js        # Objeto 'player' con atributos del jugador
/level1.js - level5.js # Modulos que controlan la logica y progresion de niveles
/finals.js             # Logica de finales segun las estadisticas acumuladas


Dependencias

- Bootstrap : para estilos y modales interactivos.

Instalacion y ejecucion local

1. Clona o descarga el repositorio.
2. Asegurate de tener una estructura de carpetas similar a la mencionada arriba.
3. Abre index.html en tu navegador.

> No se requiere servidor backend ni compiladores, todo funciona en el navegador con JavaScript puro.

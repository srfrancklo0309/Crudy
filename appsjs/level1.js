// Objeto que guarda las estadísticas del jugador
let player = {
    logic: 0,       // Nivel de lógica (se gana o pierde según decisiones)
    empathy: 0,     // Nivel de empatía (se gana según interacciones emocionales)
    echoes: 0,      // Ecos de información encontrados (no usado aún)
    failures: 0     // Cantidad de errores o fallos cometidos
};

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {

    // ----------- Obtener referencias a los botones y modales del HTML -----------

    // // Botón "Siguiente" dentro del primer modal (introducción)
    // const buttonNext = document.getElementById("buttonNext"); *************

    // Botón para pasar al primer nivel desde la introducción
    const firstbuttonNext = document.getElementById("firstbuttonNext");

    // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const startModalEl = document.getElementById("startModal");
    const firstLevelModalEl = document.getElementById("first-level");
    const modalRouteEl = document.getElementById("modalRoute");
    const modalEnvironmentEl = document.getElementById("modalEnvironment");
    const modalAccessEl = document.getElementById("modalAccess");
    const modalSilenceEl = document.getElementById("modalSilence");

    // ----------- Crear instancias Bootstrap de los modales -----------

    const startModal = new bootstrap.Modal(startModalEl);
    const firstLevelModal = new bootstrap.Modal(firstLevelModalEl);
    const modalRoute = new bootstrap.Modal(modalRouteEl);
    const modalEnvironment = new bootstrap.Modal(modalEnvironmentEl);
    const modalAccess = new bootstrap.Modal(modalAccessEl);
    const modalSilence = new bootstrap.Modal(modalSilenceEl);

    // ----------- Obtener los botones de decisión del primer nivel -----------

    const buttonRoute = document.getElementById("buttonRoute");               // Botón: Ruta lógica
    const buttonEnvironment = document.getElementById("buttonEnvironment");   // Botón: Entorno simulado
    const buttonAccess = document.getElementById("buttonAccess");             // Botón: Acceso profundo
    const buttonSilence = document.getElementById("buttonSilence");           // Botón: Observar en silencio

    // ----------- Agregar eventos a los botones -----------

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    firstbuttonNext.addEventListener("click", () => {
        startModal.hide();         // Oculta el primer modal
        firstLevelModal.show();    // Muestra el modal con las primeras opciones
    });

    // Botón: Ruta lógica (aumenta lógica)
    buttonRoute.addEventListener("click", () => {
        firstLevelModal.hide();    // Oculta el primer nivel
        modalRoute.show();         // Muestra el modal de Ruta lógica
        player.logic++;            // Aumenta +1 en lógica
    });

    // Botón: Entorno simulado (aumenta empatía)
    buttonEnvironment.addEventListener("click", () => {
        firstLevelModal.hide();
        modalEnvironment.show();
        player.empathy++;          // Aumenta +1 en empatía
    });

    // Botón: Acceso profundo (aumenta fallos, disminuye lógica)
    buttonAccess.addEventListener("click", () => {
        firstLevelModal.hide();
        modalAccess.show();
        player.failures++;         // Aumenta +1 en fallos
        player.logic--;            // Disminuye -1 en lógica
    });

    // Botón: Observar en silencio (disminuye lógica)
    buttonSilence.addEventListener("click", () => {
        firstLevelModal.hide();
        modalSilence.show();
        player.logic--;            // Disminuye -1 en lógica
    });

});

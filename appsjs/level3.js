// // Objeto que guarda las estadísticas del jugador
// let player = {
//     logic: 0,       // Nivel de lógica (se gana o pierde según decisiones)
//     empathy: 0,     // Nivel de empatía (se gana según interacciones emocionales)
//     echoes: 0,      // Ecos de información encontrados (no usado aún)
//     failures: 0     // Cantidad de errores o fallos cometidos
// };

document.addEventListener("DOMContentLoaded", () => {

    // Botón para pasar al primer nivel desde la introducción
    const buttonDoorNext = document.getElementById("buttonDoorNext");
    const buttonConditionalNext = document.getElementById("buttonConditionalNext");
    const buttonStraightNext = document.getElementById("buttonStraightNext");
    const buttonFlowNext = document.getElementById("buttonFlowNext");


    // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const modalDoorEl = document.getElementById("modalDoor");
    const modalConditionalEl = document.getElementById("modalConditional");
    const modalStraightEl = document.getElementById("modalStraight");
    const modalFlowEl = document.getElementById("modalFlow");
    const thirdlevelModalEl = document.getElementById("third-level");
    const modalSuccessEl = document.getElementById("modalSuccess");
    const modalSequenceEl = document.getElementById("modalSequence");
    const modalClueEl = document.getElementById("modalClue");
    const modalAdditionalEl = document.getElementById("modalAdditional");

    // ----------- Crear instancias Bootstrap de los modales -----------

    const modalDoor = new bootstrap.Modal(modalDoorEl);
    const modalConditional = new bootstrap.Modal(modalConditionalEl);
    const modalStraight = new bootstrap.Modal(modalStraightEl);
    const modalFlow = new bootstrap.Modal(modalFlowEl);
    const thirdlevelModal = new bootstrap.Modal(thirdlevelModalEl);
    const modalSuccess = new bootstrap.Modal(modalSuccessEl);
    const modalSequence = new bootstrap.Modal(modalSequenceEl);
    const modalClue = new bootstrap.Modal(modalClueEl);
    const modalAdditional = new bootstrap.Modal(modalAdditionalEl);

    // ----------- Obtener los botones de decisión del primer nivel -----------

    const buttonSuccess = document.getElementById("buttonSuccess");               // Botón: Ruta lógica
    const buttonSequence = document.getElementById("buttonSequence");   // Botón: Entorno simulado
    const buttonClue = document.getElementById("buttonClue");             // Botón: Acceso profundo
    const buttonAdditional = document.getElementById("buttonAdditional");

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    buttonDoorNext.addEventListener("click", () => {
        modalDoor.hide();         // Oculta el primer modal
        thirdlevelModal.show();    // Muestra el modal con las primeras opciones
    });

    buttonConditionalNext.addEventListener("click", () => {
        modalConditional.hide();         // Oculta el primer modal
        thirdlevelModal.show();    // Muestra el modal con las primeras opciones
    });

    buttonStraightNext.addEventListener("click", () => {
        modalStraight.hide();         // Oculta el primer modal
        thirdlevelModal.show();    // Muestra el modal con las primeras opciones
    });

    buttonFlowNext.addEventListener("click", () => {
        modalFlow.hide();         // Oculta el primer modal
        thirdlevelModal.show();    // Muestra el modal con las primeras opciones
    });

    // Botón: Ruta lógica (aumenta lógica)
    buttonSuccess.addEventListener("click", () => {
        thirdlevelModal.hide();    // Oculta el primer nivel
        modalSuccess.show();         // Muestra el modal de Ruta lógica
        player.logic++;            // Aumenta +1 en lógica
    });

    // Botón: Entorno simulado (aumenta empatía)
    buttonSequence.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalSequence.show();
        player.failures++;          // Aumenta +1 en empatía
    });

    // Botón: Acceso profundo (aumenta fallos, disminuye lógica)
    buttonClue.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalClue.show();
        player.logic++;
        player.failures++;         // Aumenta +1 en fallos
    });

    // Botón: Observar en silencio (disminuye lógica)
    buttonAdditional.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalAdditional.show();
        player.logic++;
        player.empathy++;          // Disminuye -1 en lógica
    });
});
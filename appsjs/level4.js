import { player } from "./playerstats.js";

function updatestats(barstats) {

    const containerstats = document.getElementById(barstats);

    const htmltoinyect = `
        <div class="stats-bar">
            <div class="container-stat">
                <img class="stats-icon" src="./assets/empathy.png" alt="Icono de Empatía">
                <p class="stats__p">${player.empathy}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/logic.png" alt="Icono de Lógica">
                <p class="stats__p">${player.logic}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/robot.png" alt="Icono de Ecos">
                <p class="stats__p">${player.echoes}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/failure.png" alt="Icono de Fallos">
                <p class="stats__p">${player.failures}</p>
            </div>
        </div>
    `;

    containerstats.innerHTML = htmltoinyect;
}

document.addEventListener("DOMContentLoaded", () => {

    // Botón para pasar al primer nivel desde la introducción
    const buttonSuccessNext = document.getElementById("buttonSuccessNext");               // Botón: Ruta lógica
    const buttonSequenceNext = document.getElementById("buttonSequenceNext");   // Botón: Entorno simulado
    const buttonClueNext = document.getElementById("buttonClueNext");             // Botón: Acceso profundo
    const buttonAdditionalNext = document.getElementById("buttonAdditionalNext");

     // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const modalSuccessEl = document.getElementById("modalSuccess");
    const modalSequenceEl = document.getElementById("modalSequence");
    const modalClueEl = document.getElementById("modalClue");
    const modalAdditionalEl = document.getElementById("modalAdditional");
    const fourthlevelModalEl = document.getElementById("fourth-level");
    const modalReasoningEl = document.getElementById("modalReasoning");
    const modalIntuitionEl = document.getElementById("modalIntuition");
    const modalRepeatEl = document.getElementById("modalRepeat");

    // ----------- Crear instancias Bootstrap de los modales -----------
    const modalSuccess = new bootstrap.Modal(modalSuccessEl);
    const modalSequence = new bootstrap.Modal(modalSequenceEl);
    const modalClue = new bootstrap.Modal(modalClueEl);
    const modalAdditional = new bootstrap.Modal(modalAdditionalEl);
    const fourthlevelModal = new bootstrap.Modal(fourthlevelModalEl);
    const modalReasoning = new bootstrap.Modal(modalReasoningEl);
    const modalIntuition = new bootstrap.Modal(modalIntuitionEl);
    const modalRepeat = new bootstrap.Modal(modalRepeatEl);
    

    // ----------- Obtener los botones de decisión del primer nivel -----------

    const buttonReasoning = document.getElementById("buttonReasoning");               // Botón: Ruta lógica
    const buttonIntuition = document.getElementById("buttonIntuition");   // Botón: Entorno simulado
    const buttonRepeat = document.getElementById("buttonRepeat");          // Botón: Acceso profundo

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    buttonSuccessNext.addEventListener("click", () => {
        modalSuccess.hide();         // Oculta el primer modal
        modalSequence.hide();
        modalClue.hide(); 
        modalAdditional.hide();
        fourthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fourthbarstats");
    });

    buttonSequenceNext.addEventListener("click", () => {
        modalSuccess.hide();         // Oculta el primer modal
        modalSequence.hide();
        modalClue.hide(); 
        modalAdditional.hide();
        fourthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fourthbarstats");
    });

    buttonClueNext.addEventListener("click", () => {
        modalSuccess.hide();         // Oculta el primer modal
        modalSequence.hide();
        modalClue.hide(); 
        modalAdditional.hide();
        fourthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fourthbarstats");
    });

    buttonAdditionalNext.addEventListener("click", () => {
        modalSuccess.hide();         // Oculta el primer modal
        modalSequence.hide();
        modalClue.hide(); 
        modalAdditional.hide();
        fourthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fourthbarstats");
    });

    // Botón: Ruta lógica (aumenta lógica)
    buttonReasoning.addEventListener("click", () => {
        fourthlevelModal.hide();    // Oculta el primer nivel
        modalReasoning.show();         // Muestra el modal de Ruta lógica
        player.logic++;            // Aumenta +1 en lógica
    });

    // Botón: Entorno simulado (aumenta empatía)
    buttonIntuition.addEventListener("click", () => {
        fourthlevelModal.hide();
        modalIntuition.show();
        player.logic--;
        player.empathy++;          // Aumenta +1 en empatía
    });

    // Botón: Acceso profundo (aumenta fallos, disminuye lógica)
    buttonRepeat.addEventListener("click", () => {
        fourthlevelModal.hide();
        modalRepeat.show();
        player.failures++;         // Aumenta +1 en fallos
    });

});
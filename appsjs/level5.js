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
    const buttonReasoningNext = document.getElementById("buttonReasoningNext");               // Botón: Ruta lógica
    const buttonIntuitionNext = document.getElementById("buttonIntuitionNext");   // Botón: Entorno simulado
    const buttonRepeatNext = document.getElementById("buttonRepeatNext");             // Botón: Acceso profundo

     // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const modalReasoningEl = document.getElementById("modalReasoning");
    const modalIntuitionEl = document.getElementById("modalIntuition");
    const modalRepeatEl = document.getElementById("modalRepeat");
    const fifthlevelModalEl = document.getElementById("fifth-level");
    const modalLogicEl = document.getElementById("modalLogic");
    const modalEmpathyEl = document.getElementById("modalEmpathy");
    const modalDeclineEl = document.getElementById("modalDecline");

    // ----------- Crear instancias Bootstrap de los modales -----------
    const modalReasoning = new bootstrap.Modal(modalReasoningEl);
    const modalIntuition = new bootstrap.Modal(modalIntuitionEl);
    const modalRepeat = new bootstrap.Modal(modalRepeatEl);
    const fifthlevelModal = new bootstrap.Modal(fifthlevelModalEl);
    const modalLogic = new bootstrap.Modal(modalLogicEl);
    const modalEmpathy = new bootstrap.Modal(modalEmpathyEl);
    const modalDecline = new bootstrap.Modal(modalDeclineEl);
    

    // ----------- Obtener los botones de decisión del primer nivel -----------

    const buttonLogic = document.getElementById("buttonLogic");               // Botón: Ruta lógica
    const buttonEmpathy = document.getElementById("buttonEmpathy");   // Botón: Entorno simulado
    const buttonDecline = document.getElementById("buttonDecline");          // Botón: Acceso profundo

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    buttonReasoningNext.addEventListener("click", () => {
        modalReasoning.hide();         // Oculta el primer modal
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fifthbarstats");
    });

    buttonIntuitionNext.addEventListener("click", () => {
        modalReasoning.hide();         // Oculta el primer modal
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fifthbarstats");
    });

    buttonRepeatNext.addEventListener("click", () => {
        modalReasoning.hide();         // Oculta el primer modal
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("fifthbarstats");
    });

    // Botón: Ruta lógica (aumenta lógica)
    buttonLogic.addEventListener("click", () => {
        fifthlevelModal.hide();    // Oculta el primer nivel
        modalLogic.show();         // Muestra el modal de Ruta lógica
        player.logic++;            // Aumenta +1 en lógica
    });

    // Botón: Entorno simulado (aumenta empatía)
    buttonEmpathy.addEventListener("click", () => {
        fifthlevelModal.hide();
        modalEmpathy.show();
        player.empathy++;          // Aumenta +1 en empatía
    });

    // Botón: Acceso profundo (aumenta fallos, disminuye lógica)
    buttonDecline.addEventListener("click", () => {
        fifthlevelModal.hide();
        modalDecline.show();
        player.failures++;         // Aumenta +1 en fallos
    });

});
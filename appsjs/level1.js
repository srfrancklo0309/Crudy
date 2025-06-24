import { player } from './playerstats.js';
import './level2.js';
import './level3.js';
import './level4.js';
import './level5.js';
import './finals.js';


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
    // ----------- Obtener referencias a los botones y modales del HTML -----------

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
        firstLevelModal.show();// Muestra el modal con las primeras opciones
        updatestats("firstbarstats");
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
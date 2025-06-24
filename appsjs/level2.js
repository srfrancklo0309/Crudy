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

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {

    // Botón para pasar al primer nivel desde la introducción
    const buttonRouteNext = document.getElementById("buttonRouteNext");
    const buttonEnvironmentNext = document.getElementById("buttonEnvironmentNext");
    const buttonAccessNext = document.getElementById("buttonAccessNext");
    const buttonSilenceNext = document.getElementById("buttonSilenceNext");
    
    // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const modalRouteEl = document.getElementById("modalRoute");
    const modalEnvironmentEl = document.getElementById("modalEnvironment");
    const modalAccessEl = document.getElementById("modalAccess");
    const modalSilenceEl = document.getElementById("modalSilence");
    const secondLevelModalEl = document.getElementById("second-level");
    const modalDoorEl = document.getElementById("modalDoor");
    const modalConditionalEl = document.getElementById("modalConditional");
    const modalStraightEl = document.getElementById("modalStraight");
    const modalFlowEl = document.getElementById("modalFlow");

    
    // ----------- Crear instancias Bootstrap de los modales -----------

    const modalRoute = new bootstrap.Modal(modalRouteEl);
    const modalEnvironment = new bootstrap.Modal(modalEnvironmentEl);
    const modalAccess = new bootstrap.Modal(modalAccessEl);
    const modalSilence = new bootstrap.Modal(modalSilenceEl);
    const secondLevelModal = new bootstrap.Modal(secondLevelModalEl);
    const modalDoor = new bootstrap.Modal(modalDoorEl);
    const modalConditional = new bootstrap.Modal(modalConditionalEl);
    const modalStraight = new bootstrap.Modal(modalStraightEl);
    const modalFlow = new bootstrap.Modal(modalFlowEl);

    // ----------- Obtener los botones de decisión del primer nivel -----------

    const buttonDoor = document.getElementById("buttonDoor");               // Botón: Ruta lógica
    const buttonConditional = document.getElementById("buttonConditional");   // Botón: Entorno simulado
    const buttonStraight = document.getElementById("buttonStraight");             // Botón: Acceso profundo
    const buttonFlow = document.getElementById("buttonFlow");

    // ----------- Agregar eventos a los botones -----------

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    buttonRouteNext.addEventListener("click", () => {
        modalRoute.hide();         // Oculta el primer modal
        modalEnvironment.hide();   
        modalAccess.hide();  
        modalSilence.hide();
        secondLevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("secondbarstats");
    });

    buttonEnvironmentNext.addEventListener("click", () => {
        modalRoute.hide();         // Oculta el primer modal
        modalEnvironment.hide();   
        modalAccess.hide();  
        modalSilence.hide();
        secondLevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("secondbarstats");
    });

    buttonAccessNext.addEventListener("click", () => {
        modalRoute.hide();         // Oculta el primer modal
        modalEnvironment.hide();   
        modalAccess.hide();  
        modalSilence.hide();
        secondLevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("secondbarstats");
    });

    buttonSilenceNext.addEventListener("click", () => {
        modalRoute.hide();         // Oculta el primer modal
        modalEnvironment.hide();   
        modalAccess.hide();  
        modalSilence.hide();
        secondLevelModal.show();    // Muestra el modal con las primeras opciones
        updatestats("secondbarstats");
    });

    // Botón: Ruta lógica (aumenta lógica)
    buttonDoor.addEventListener("click", () => {
        secondLevelModal.hide();    // Oculta el primer nivel
        modalDoor.show();         // Muestra el modal de Ruta lógica
        player.logic++;            // Aumenta +1 en lógica
    });

    // Botón: Entorno simulado (aumenta empatía)
    buttonConditional.addEventListener("click", () => {
        secondLevelModal.hide();
        modalConditional.show();
        player.empathy++;          // Aumenta +1 en empatía
    });

    // Botón: Acceso profundo (aumenta fallos, disminuye lógica)
    buttonStraight.addEventListener("click", () => {
        secondLevelModal.hide();
        modalStraight.show();
        player.failures++;         // Aumenta +1 en fallos
    });

    // Botón: Observar en silencio (disminuye lógica)
    buttonFlow.addEventListener("click", () => {
        secondLevelModal.hide();
        modalFlow.show();
        player.logic++;
        player.failures--;          // Disminuye -1 en lógica
    });
});

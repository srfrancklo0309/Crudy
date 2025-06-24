import { player } from "./playerstats.js";

document.addEventListener("DOMContentLoaded", () => {

    // Botón para pasar al primer nivel desde la introducción
    const buttonLogicNext = document.getElementById("buttonLogicNext");               // Botón: Ruta lógica
    const buttonEmpathyNext = document.getElementById("buttonEmpathyNext");   // Botón: Entorno simulado
    const buttonDeclineNext = document.getElementById("buttonDeclineNext");             // Botón: Acceso profundo

     // Elementos del DOM que representan los distintos modales (pantallas emergentes)
    const modalLogicEl = document.getElementById("modalLogic");
    const modalEmpathyEl = document.getElementById("modalEmpathy");
    const modalDeclineEl = document.getElementById("modalDecline");
    const finalmodal1El = document.getElementById("final-modal-1");
    const finalmodal2El = document.getElementById("final-modal-2");
    const finalmodal3El = document.getElementById("final-modal-3");

    // ----------- Crear instancias Bootstrap de los modales -----------

    const modalLogic = new bootstrap.Modal(modalLogicEl);
    const modalEmpathy = new bootstrap.Modal(modalEmpathyEl);
    const modalDecline = new bootstrap.Modal(modalDeclineEl);
    const finalmodal1 = new bootstrap.Modal(finalmodal1El);
    const finalmodal2 = new bootstrap.Modal(finalmodal2El);
    const finalmodal3 = new bootstrap.Modal(finalmodal3El);

    function posiblefinals(actuallmodule){
        if( player.empathy>=2 && player.logic >=2){
            actuallmodule.hide();
            finalmodal1.show();
        }
        else if(player.logic>=3 && player.failures<=1){
            actuallmodule.hide();
            finalmodal2.show();
        }
        else if (player.failures >=3){
            actuallmodule.hide();
            finalmodal3.show();
        }
        else{
            actuallmodule.hide();
            finalmodal3.show();
        }
    }

    // Al hacer clic en "Siguiente", pasar del modal de introducción al primer nivel
    buttonLogicNext.addEventListener("click", () => {
        modalLogic.hide();
        modalDecline.hide();
        modalEmpathy.hide();
        posiblefinals(modalLogic);
    });

    buttonEmpathyNext.addEventListener("click", () => {
        modalLogic.hide();
        modalDecline.hide();
        modalEmpathy.hide();
        posiblefinals(modalEmpathy);
    });

    buttonDeclineNext.addEventListener("click", () => {
        modalLogic.hide();
        modalDecline.hide();
        modalEmpathy.hide();
        posiblefinals(modalDecline);
    });

});
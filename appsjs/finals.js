import { player } from "./playerstats.js"; // Imports the 'player' object from playerstats.js

document.addEventListener("DOMContentLoaded", () => { // Waits for the entire HTML document to be loaded before running the script

    // Get references to the "Next" buttons from the HTML
    const buttonLogicNext = document.getElementById("buttonLogicNext");     // Button for the "Logic" path
    const buttonEmpathyNext = document.getElementById("buttonEmpathyNext"); // Button for the "Empathy" path
    const buttonDeclineNext = document.getElementById("buttonDeclineNext"); // Button for the "Decline" path

    // Get references to the modal (popup) elements from the HTML
    const modalLogicEl = document.getElementById("modalLogic");
    const modalEmpathyEl = document.getElementById("modalEmpathy");
    const modalDeclineEl = document.getElementById("modalDecline");
    const finalmodal1El = document.getElementById("final-modal-1"); // Element for final modal 1
    const finalmodal2El = document.getElementById("final-modal-2"); // Element for final modal 2
    const finalmodal3El = document.getElementById("final-modal-3"); // Element for final modal 3

    // Create Bootstrap modal instances for each modal element
    // This allows controlling modals (show/hide) using Bootstrap's JavaScript API
    const modalLogic = new bootstrap.Modal(modalLogicEl);
    const modalEmpathy = new bootstrap.Modal(modalEmpathyEl);
    const modalDecline = new bootstrap.Modal(modalDeclineEl);
    const finalmodal1 = new bootstrap.Modal(finalmodal1El);
    const finalmodal2 = new bootstrap.Modal(finalmodal2El);
    const finalmodal3 = new bootstrap.Modal(finalmodal3El);

    /**
     * Determines which final modal to show based on player stats.
     * Hides the current modal before showing a final one.
     * @param {bootstrap.Modal} actuallmodule The current modal being displayed.
     */
    function posiblefinals(actuallmodule){
        if( player.empathy >= 2 && player.logic >= 2){ // Check if player has high empathy and logic
            actuallmodule.hide(); // Hide the current modal
            finalmodal1.show();   // Show final modal 1
        }
        else if(player.logic >= 3 && player.failures <= 1){ // Check if player has high logic and few failures
            actuallmodule.hide(); // Hide the current modal
            finalmodal2.show();   // Show final modal 2
        }
        else if (player.failures >= 3){ // Check if player has many failures
            actuallmodule.hide(); // Hide the current modal
            finalmodal3.show();   // Show final modal 3
        }
        else{ // Default case if no other conditions are met
            actuallmodule.hide(); // Hide the current modal
            finalmodal3.show();   // Show final modal 3
        }
    }

    // Add click event listeners to the "Next" buttons
    // When a button is clicked, all introduction modals are hidden,
    // and then the 'posiblefinals' function is called to determine the next step.

    buttonLogicNext.addEventListener("click", () => {
        modalLogic.hide();   // Hide logic modal
        modalDecline.hide(); // Hide decline modal
        modalEmpathy.hide(); // Hide empathy modal
        posiblefinals(modalLogic); // Check final conditions based on the logic path
    });

    buttonEmpathyNext.addEventListener("click", () => {
        modalLogic.hide();   // Hide logic modal
        modalDecline.hide(); // Hide decline modal
        modalEmpathy.hide(); // Hide empathy modal
        posiblefinals(modalEmpathy); // Check final conditions based on the empathy path
    });

    buttonDeclineNext.addEventListener("click", () => {
        modalLogic.hide();   // Hide logic modal
        modalDecline.hide(); // Hide decline modal
        modalEmpathy.hide(); // Hide empathy modal
        posiblefinals(modalDecline); // Check final conditions based on the decline path
    });

});
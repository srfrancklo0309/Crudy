import { player } from "./playerstats.js"; // This line gets the 'player' object from 'playerstats.js'. It stores the player's stats like empathy, logic, etc.

/**
 * This function updates the player's stats displayed on the webpage.
 * It creates an HTML block showing icons and values for empathy, logic, echoes, and failures,
 * then inserts this block into a specific HTML container.
 * @param {string} barstats The ID of the HTML element where the stats bar will be placed.
 */
function updatestats(barstats) {
    // Get the HTML element where the stats bar should appear.
    const containerstats = document.getElementById(barstats);

    // This is a multi-line string containing the HTML structure for the stats display.
    // It uses template literals (${player.stat}) to insert the current player stat values directly.
    const htmltoinyect = `
        <div class="stats-bar">
            <div class="container-stat">
                <img class="stats-icon" src="./assets/empathy.png" alt="Empathy Icon">
                <p class="stats__p">${player.empathy}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/logic.png" alt="Logic Icon">
                <p class="stats__p">${player.logic}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/robot.png" alt="Echoes Icon">
                <p class="stats__p">${player.echoes}</p>
            </div>
            <div class="container-stat">
                <img class="stats-icon" src="./assets/failure.png" alt="Failures Icon">
                <p class="stats__p">${player.failures}</p>
            </div>
        </div>
    `;

    // Replace the content of the target HTML container with the new stats bar HTML.
    containerstats.innerHTML = htmltoinyect;
}

// This makes sure the JavaScript code runs only after the entire web page (HTML) has been loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the "Next" buttons that move the player from one modal to the next level.
    const buttonDoorNext = document.getElementById("buttonDoorNext");           // Button to proceed from the "Door" modal.
    const buttonConditionalNext = document.getElementById("buttonConditionalNext"); // Button to proceed from the "Conditional" modal.
    const buttonStraightNext = document.getElementById("buttonStraightNext");     // Button to proceed from the "Straight" modal.
    const buttonFlowNext = document.getElementById("buttonFlowNext");             // Button to proceed from the "Flow" modal.

    // Get references to the HTML elements that represent the various popup windows (modals) used in the game.
    const modalDoorEl = document.getElementById("modalDoor");               // HTML element for the "Door" modal.
    const modalConditionalEl = document.getElementById("modalConditional"); // HTML element for the "Conditional" modal.
    const modalStraightEl = document.getElementById("modalStraight");       // HTML element for the "Straight" modal.
    const modalFlowEl = document.getElementById("modalFlow");               // HTML element for the "Flow" modal.
    const thirdlevelModalEl = document.getElementById("third-level");       // HTML element for the third level choices modal.
    const modalSuccessEl = document.getElementById("modalSuccess");         // HTML element for the "Success" decision modal.
    const modalSequenceEl = document.getElementById("modalSequence");       // HTML element for the "Sequence" decision modal.
    const modalClueEl = document.getElementById("modalClue");               // HTML element for the "Clue" decision modal.
    const modalAdditionalEl = document.getElementById("modalAdditional");   // HTML element for the "Additional" decision modal.

    // --- Create Bootstrap Modal Instances ---
    // These lines create special Bootstrap objects for each modal HTML element.
    // This allows you to easily control (show/hide) these modals using Bootstrap's JavaScript API.
    const modalDoor = new bootstrap.Modal(modalDoorEl);
    const modalConditional = new bootstrap.Modal(modalConditionalEl);
    const modalStraight = new bootstrap.Modal(modalStraightEl);
    const modalFlow = new bootstrap.Modal(modalFlowEl);
    const thirdlevelModal = new bootstrap.Modal(thirdlevelModalEl);
    const modalSuccess = new bootstrap.Modal(modalSuccessEl);
    const modalSequence = new bootstrap.Modal(modalSequenceEl);
    const modalClue = new bootstrap.Modal(modalClueEl);
    const modalAdditional = new bootstrap.Modal(modalAdditionalEl);

    // --- Get Decision Buttons for the Current Level ---
    // Get references to the buttons that represent player choices within the current game level.
    const buttonSuccess = document.getElementById("buttonSuccess");             // Button for the "Success" choice.
    const buttonSequence = document.getElementById("buttonSequence");         // Button for the "Sequence" choice.
    const buttonClue = document.getElementById("buttonClue");                 // Button for the "Clue" choice.
    const buttonAdditional = document.getElementById("buttonAdditional");     // Button for the "Additional" choice.

    // --- Add Event Listeners to Buttons ---

    // When clicking any of the "Next" buttons that bring the player to the third level:
    // 1. Hide all the previous modals (Door, Conditional, Straight, Flow).
    // 2. Show the 'thirdlevelModal', which contains the choices for the third level.
    // 3. Update the player's stats display on the page for this new level.

    buttonDoorNext.addEventListener("click", () => {
        modalDoor.hide();        // Hide the "Door" modal.
        modalConditional.hide();
        modalStraight.hide();
        modalFlow.hide();
        thirdlevelModal.show();  // Show the third level modal.
        updatestats("thirdbarstats"); // Update stats display for the third level.
    });

    buttonConditionalNext.addEventListener("click", () => {
        modalDoor.hide();
        modalConditional.hide();
        modalStraight.hide();
        modalFlow.hide();
        thirdlevelModal.show();
        updatestats("thirdbarstats");
    });

    buttonStraightNext.addEventListener("click", () => {
        modalDoor.hide();
        modalConditional.hide();
        modalStraight.hide();
        modalFlow.hide();
        thirdlevelModal.show();
        updatestats("thirdbarstats");
    });

    buttonFlowNext.addEventListener("click", () => {
        modalDoor.hide();
        modalConditional.hide();
        modalStraight.hide();
        modalFlow.hide();
        thirdlevelModal.show();
        updatestats("thirdbarstats");
    });

    // --- Decision Buttons within the Third Level ---

    // When the "Success" button is clicked:
    // 1. Hide the current third-level choices modal.
    // 2. Show the specific "Success" modal.
    // 3. Increase the player's 'logic' stat by 1.
    buttonSuccess.addEventListener("click", () => {
        thirdlevelModal.hide();    // Hide the third level choices modal.
        modalSuccess.show();       // Show the "Success" modal.
        player.logic++;            // Increase player's logic stat.
    });

    // When the "Sequence" button is clicked:
    // 1. Hide the current third-level choices modal.
    // 2. Show the specific "Sequence" modal.
    // 3. Increase the player's 'failures' stat by 1. (Note: Original comment said empathy, but code changes failures).
    buttonSequence.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalSequence.show();
        player.failures++;         // Increase player's failures stat.
    });

    // When the "Clue" button is clicked:
    // 1. Hide the current third-level choices modal.
    // 2. Show the specific "Clue" modal.
    // 3. Increase both the player's 'logic' and 'failures' stats by 1.
    buttonClue.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalClue.show();
        player.logic++;
        player.failures++;         // Increase player's failures stat.
    });

    // When the "Additional" button is clicked:
    // 1. Hide the current third-level choices modal.
    // 2. Show the specific "Additional" modal.
    // 3. Increase both the player's 'logic' and 'empathy' stats by 1. (Note: Original comment said decrease logic, but code increases both).
    buttonAdditional.addEventListener("click", () => {
        thirdlevelModal.hide();
        modalAdditional.show();
        player.logic++;
        player.empathy++;          // Increase player's empathy stat.
    });

});
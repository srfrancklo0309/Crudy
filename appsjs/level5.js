import { player } from "./playerstats.js"; // This line imports the 'player' object, which stores the player's current game statistics (like empathy, logic, etc.).

/**
 * This function updates the visual display of the player's stats on the webpage.
 * It creates an HTML block containing icons and values for empathy, logic, echoes, and failures,
 * then inserts this block into a specified HTML container element.
 * @param {string} barstats The ID of the HTML element where the stats bar will be displayed.
 */
function updatestats(barstats) {
    // Get the HTML element that will hold the stats display.
    const containerstats = document.getElementById(barstats);

    // This is a multi-line string containing the HTML structure for the player stats bar.
    // It dynamically injects the current values from the 'player' object into the HTML.
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

    // Replace the existing content of the 'containerstats' element with the newly generated stats bar HTML.
    containerstats.innerHTML = htmltoinyect;
}

// This ensures that all the JavaScript code inside this block only executes
// once the entire HTML document has been fully loaded and parsed by the browser.
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the "Next" buttons. These buttons are used to transition
    // from a specific decision modal to the next set of choices (the fifth level modal).
    const buttonReasoningNext = document.getElementById("buttonReasoningNext"); // Button to proceed from the "Reasoning" modal.
    const buttonIntuitionNext = document.getElementById("buttonIntuitionNext"); // Button to proceed from the "Intuition" modal.
    const buttonRepeatNext = document.getElementById("buttonRepeatNext");       // Button to proceed from the "Repeat" modal.

    // Get references to the HTML elements that represent the various popup windows (modals) used in the game.
    const modalReasoningEl = document.getElementById("modalReasoning");     // HTML element for the "Reasoning" modal.
    const modalIntuitionEl = document.getElementById("modalIntuition");     // HTML element for the "Intuition" modal.
    const modalRepeatEl = document.getElementById("modalRepeat");           // HTML element for the "Repeat" modal.
    const fifthlevelModalEl = document.getElementById("fifth-level");       // HTML element for the fifth level's choices modal.
    const modalLogicEl = document.getElementById("modalLogic");             // HTML element for the "Logic" decision modal.
    const modalEmpathyEl = document.getElementById("modalEmpathy");         // HTML element for the "Empathy" decision modal.
    const modalDeclineEl = document.getElementById("modalDecline");         // HTML element for the "Decline" decision modal.

    // --- Create Bootstrap Modal Instances ---
    // These lines convert the raw HTML modal elements into Bootstrap modal objects.
    // This allows you to easily control their visibility (show or hide them) using Bootstrap's JavaScript API.
    const modalReasoning = new bootstrap.Modal(modalReasoningEl);
    const modalIntuition = new bootstrap.Modal(modalIntuitionEl);
    const modalRepeat = new bootstrap.Modal(modalRepeatEl);
    const fifthlevelModal = new bootstrap.Modal(fifthlevelModalEl);
    const modalLogic = new bootstrap.Modal(modalLogicEl);
    const modalEmpathy = new bootstrap.Modal(modalEmpathyEl);
    const modalDecline = new bootstrap.Modal(modalDeclineEl);

    // --- Get Decision Buttons for the Current Level ---
    // Get references to the buttons that represent the player's choices within the current game level (likely the fifth level).
    const buttonLogic = document.getElementById("buttonLogic");         // Button for the "Logic" choice.
    const buttonEmpathy = document.getElementById("buttonEmpathy");     // Button for the "Empathy" choice.
    const buttonDecline = document.getElementById("buttonDecline");     // Button for the "Decline" choice.

    // --- Add Event Listeners to Buttons ---

    // When any of the "Next" buttons (from previous level's decision modals) are clicked:
    // 1. Hide the current decision modal (Reasoning, Intuition, or Repeat).
    // 2. Show the `fifthlevelModal`, which presents the choices for the next level.
    // 3. Update the player's stats display on the page to reflect the new level.

    buttonReasoningNext.addEventListener("click", () => {
        modalReasoning.hide();    // Hide the "Reasoning" modal.
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();   // Show the fifth level modal.
        updatestats("fifthbarstats"); // Update the stats bar for the fifth level.
    });

    buttonIntuitionNext.addEventListener("click", () => {
        modalReasoning.hide();
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();
        updatestats("fifthbarstats");
    });

    buttonRepeatNext.addEventListener("click", () => {
        modalReasoning.hide();
        modalIntuition.hide();
        modalRepeat.hide();
        fifthlevelModal.show();
        updatestats("fifthbarstats");
    });

    // --- Decision Buttons within the Fifth Level ---

    // When the "Logic" button is clicked:
    // 1. Hide the current fifth-level choices modal.
    // 2. Show the specific "Logic" modal related to this choice.
    // 3. Increase the player's 'logic' stat by 1.
    buttonLogic.addEventListener("click", () => {
        fifthlevelModal.hide();    // Hide the fifth level choices modal.
        modalLogic.show();         // Show the "Logic" modal.
        player.logic++;            // Increase player's logic stat.
    });

    // When the "Empathy" button is clicked:
    // 1. Hide the current fifth-level choices modal.
    // 2. Show the specific "Empathy" modal related to this choice.
    // 3. Increase the player's 'empathy' stat by 1.
    buttonEmpathy.addEventListener("click", () => {
        fifthlevelModal.hide();
        modalEmpathy.show();
        player.empathy++;          // Increase player's empathy stat.
    });

    // When the "Decline" button is clicked:
    // 1. Hide the current fifth-level choices modal.
    // 2. Show the specific "Decline" modal related to this choice.
    // 3. Increase the player's 'failures' stat by 1.
    buttonDecline.addEventListener("click", () => {
        fifthlevelModal.hide();
        modalDecline.show();
        player.failures++;         // Increase player's failures stat.
    });

});
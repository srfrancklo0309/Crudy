import { player } from "./playerstats.js"; // This line gets the 'player' object from 'playerstats.js'. It holds the player's current game stats.

/**
 * This function updates the visual display of the player's stats on the webpage.
 * It creates an HTML structure to show empathy, logic, echoes, and failures,
 * and then puts this structure into a specific HTML element.
 * @param {string} barstats The ID of the HTML element where the stats bar will be displayed.
 */
function updatestats(barstats) {
    // Get the specific HTML element (container) where the stats should be shown.
    const containerstats = document.getElementById(barstats);

    // This is a block of HTML code (a "template literal") that will be inserted.
    // It includes images for each stat and uses `${player.statName}` to show the current value of each stat.
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

    // Replace the existing content of the 'containerstats' element with the new HTML for the stats bar.
    containerstats.innerHTML = htmltoinyect;
}

// This makes sure that all the JavaScript code inside this block only runs
// after the entire HTML document has been fully loaded and parsed by the browser.
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the "Next" buttons. These buttons are used to move from
    // a current decision modal to the next level's choices.
    const buttonSuccessNext = document.getElementById("buttonSuccessNext");     // Button for moving from the "Success" modal.
    const buttonSequenceNext = document.getElementById("buttonSequenceNext");   // Button for moving from the "Sequence" modal.
    const buttonClueNext = document.getElementById("buttonClueNext");           // Button for moving from the "Clue" modal.
    const buttonAdditionalNext = document.getElementById("buttonAdditionalNext"); // Button for moving from the "Additional" modal.

    // Get references to the HTML elements that represent the various popup windows (modals) in the game.
    const modalSuccessEl = document.getElementById("modalSuccess");             // HTML element for the "Success" modal.
    const modalSequenceEl = document.getElementById("modalSequence");           // HTML element for the "Sequence" modal.
    const modalClueEl = document.getElementById("modalClue");                   // HTML element for the "Clue" modal.
    const modalAdditionalEl = document.getElementById("modalAdditional");       // HTML element for the "Additional" modal.
    const fourthlevelModalEl = document.getElementById("fourth-level");         // HTML element for the fourth level's choices modal.
    const modalReasoningEl = document.getElementById("modalReasoning");         // HTML element for the "Reasoning" decision modal.
    const modalIntuitionEl = document.getElementById("modalIntuition");         // HTML element for the "Intuition" decision modal.
    const modalRepeatEl = document.getElementById("modalRepeat");               // HTML element for the "Repeat" decision modal.

    // --- Create Bootstrap Modal Instances ---
    // These lines convert the HTML modal elements into Bootstrap modal objects.
    // This allows you to easily control their visibility (show or hide them) using Bootstrap's functions.
    const modalSuccess = new bootstrap.Modal(modalSuccessEl);
    const modalSequence = new bootstrap.Modal(modalSequenceEl);
    const modalClue = new bootstrap.Modal(modalClueEl);
    const modalAdditional = new bootstrap.Modal(modalAdditionalEl);
    const fourthlevelModal = new bootstrap.Modal(fourthlevelModalEl);
    const modalReasoning = new bootstrap.Modal(modalReasoningEl);
    const modalIntuition = new bootstrap.Modal(modalIntuitionEl);
    const modalRepeat = new bootstrap.Modal(modalRepeatEl);

    // --- Get Decision Buttons for the Current Level ---
    // Get references to the buttons that represent player choices within the current game level (likely the fourth level).
    const buttonReasoning = document.getElementById("buttonReasoning");     // Button for the "Reasoning" choice.
    const buttonIntuition = document.getElementById("buttonIntuition");     // Button for the "Intuition" choice.
    const buttonRepeat = document.getElementById("buttonRepeat");           // Button for the "Repeat" choice.

    // --- Add Event Listeners to Buttons ---

    // When any of the "Next" buttons (from previous modals) are clicked:
    // 1. Hide the current decision modal (Success, Sequence, Clue, or Additional).
    // 2. Show the `fourthlevelModal`, which presents the next set of choices.
    // 3. Update the player's stats display on the page for this new level.

    buttonSuccessNext.addEventListener("click", () => {
        modalSuccess.hide();    // Hide the "Success" modal.
        modalSequence.hide();
        modalClue.hide();
        modalAdditional.hide();
        fourthlevelModal.show(); // Show the fourth level modal.
        updatestats("fourthbarstats"); // Update stats display for the fourth level.
    });

    buttonSequenceNext.addEventListener("click", () => {
        modalSuccess.hide();
        modalSequence.hide();
        modalClue.hide();
        modalAdditional.hide();
        fourthlevelModal.show();
        updatestats("fourthbarstats");
    });

    buttonClueNext.addEventListener("click", () => {
        modalSuccess.hide();
        modalSequence.hide();
        modalClue.hide();
        modalAdditional.hide();
        fourthlevelModal.show();
        updatestats("fourthbarstats");
    });

    buttonAdditionalNext.addEventListener("click", () => {
        modalSuccess.hide();
        modalSequence.hide();
        modalClue.hide();
        modalAdditional.hide();
        fourthlevelModal.show();
        updatestats("fourthbarstats");
    });

    // --- Decision Buttons within the Fourth Level ---

    // When the "Reasoning" button is clicked:
    // 1. Hide the current fourth-level choices modal.
    // 2. Show the specific "Reasoning" modal.
    // 3. Increase the player's 'logic' stat by 1.
    buttonReasoning.addEventListener("click", () => {
        fourthlevelModal.hide();     // Hide the fourth level choices modal.
        modalReasoning.show();       // Show the "Reasoning" modal.
        player.logic++;              // Increase player's logic stat.
    });

    // When the "Intuition" button is clicked:
    // 1. Hide the current fourth-level choices modal.
    // 2. Show the specific "Intuition" modal.
    // 3. Decrease the player's 'logic' stat by 1 and increase 'empathy' by 1.
    buttonIntuition.addEventListener("click", () => {
        fourthlevelModal.hide();
        modalIntuition.show();
        player.logic--;              // Decrease player's logic stat.
        player.empathy++;            // Increase player's empathy stat.
    });

    // When the "Repeat" button is clicked:
    // 1. Hide the current fourth-level choices modal.
    // 2. Show the specific "Repeat" modal.
    // 3. Increase the player's 'failures' stat by 1.
    buttonRepeat.addEventListener("click", () => {
        fourthlevelModal.hide();
        modalRepeat.show();
        player.failures++;           // Increase player's failures stat.
    });

});
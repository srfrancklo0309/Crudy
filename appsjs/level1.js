import { player } from './playerstats.js'; // Imports the 'player' object, which stores the game's player statistics.
import './level2.js'; // Imports JavaScript for handling game logic related to Level 2.
import './level3.js'; // Imports JavaScript for handling game logic related to Level 3.
import './level4.js'; // Imports JavaScript for handling game logic related to Level 4.
import './level5.js'; // Imports JavaScript for handling game logic related to Level 5.
import './finals.js';  // Imports JavaScript for handling game ending conditions.


/**
 * This function updates the visual display of the player's stats on the webpage.
 * It generates an HTML block with icons and current values for empathy, logic, echoes, and failures,
 * and then injects this HTML into a specified container element.
 * @param {string} barstats The ID of the HTML element where the stats bar will be displayed.
 */
function updatestats(barstats) {
    // Get the HTML element by its ID where the stats bar should be placed.
    const containerstats = document.getElementById(barstats);

    // This is a multi-line string containing the HTML structure for the stats bar.
    // It uses template literals (`${player.propertyName}`) to insert the player's current stats dynamically.
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

    // Set the inner HTML of the container to the newly created stats bar HTML, updating the display.
    containerstats.innerHTML = htmltoinyect;
}

// This ensures that all the JavaScript code inside this block runs only after
// the entire HTML document (DOM) has been fully loaded and parsed by the browser.
document.addEventListener("DOMContentLoaded", () => {
    // --- Get References to HTML Buttons and Modals ---

    // Button to move from the initial introduction to the first level of the game.
    const firstbuttonNext = document.getElementById("firstbuttonNext");

    // HTML elements representing the different popup windows (modals) used in the game.
    const startModalEl = document.getElementById("startModal");           // The very first introductory modal.
    const firstLevelModalEl = document.getElementById("first-level");     // The modal for the first set of game choices.
    const modalRouteEl = document.getElementById("modalRoute");           // Modal for the "Route" choice outcome.
    const modalEnvironmentEl = document.getElementById("modalEnvironment"); // Modal for the "Environment" choice outcome.
    const modalAccessEl = document.getElementById("modalAccess");         // Modal for the "Access" choice outcome.
    const modalSilenceEl = document.getElementById("modalSilence");       // Modal for the "Silence" choice outcome.

    // --- Create Bootstrap Modal Instances ---
    // These lines convert the raw HTML modal elements into Bootstrap modal objects.
    // This allows easy control (showing or hiding) of these modals using Bootstrap's JavaScript functions.
    const startModal = new bootstrap.Modal(startModalEl);
    const firstLevelModal = new bootstrap.Modal(firstLevelModalEl);
    const modalRoute = new bootstrap.Modal(modalRouteEl);
    const modalEnvironment = new bootstrap.Modal(modalEnvironmentEl);
    const modalAccess = new bootstrap.Modal(modalAccessEl);
    const modalSilence = new bootstrap.Modal(modalSilenceEl);

    // --- Get Decision Buttons for the First Level ---
    // These are the buttons that represent the player's choices within the first main game level.
    const buttonRoute = document.getElementById("buttonRoute");             // Button for the "Logic Path" choice.
    const buttonEnvironment = document.getElementById("buttonEnvironment"); // Button for the "Simulated Environment" choice.
    const buttonAccess = document.getElementById("buttonAccess");           // Button for the "Deep Access" choice.
    const buttonSilence = document.getElementById("buttonSilence");         // Button for the "Observe in Silence" choice.

    // --- Add Event Listeners to Buttons ---

    // When the `firstbuttonNext` is clicked:
    // 1. Hide the initial `startModal`.
    // 2. Show the `firstLevelModal`, which presents the player with their first set of game choices.
    // 3. Update the player's stats display on the page for this new level.
    firstbuttonNext.addEventListener("click", () => {
        startModal.hide();       // Hide the starting modal.
        firstLevelModal.show();  // Show the first level choices modal.
        updatestats("firstbarstats"); // Update the stats bar, likely for the first time.
    });

    // When the `buttonRoute` (Logic Path) is clicked:
    // 1. Hide the current `firstLevelModal`.
    // 2. Show the `modalRoute` (which displays the outcome of choosing the logic path).
    // 3. Increase the player's `logic` stat by 1.
    buttonRoute.addEventListener("click", () => {
        firstLevelModal.hide();    // Hide the first level choices.
        modalRoute.show();         // Show the "Route" modal.
        player.logic++;            // Increase player's logic stat.
    });

    // When the `buttonEnvironment` (Simulated Environment) is clicked:
    // 1. Hide the current `firstLevelModal`.
    // 2. Show the `modalEnvironment`.
    // 3. Increase the player's `empathy` stat by 1.
    buttonEnvironment.addEventListener("click", () => {
        firstLevelModal.hide();
        modalEnvironment.show();
        player.empathy++;          // Increase player's empathy stat.
    });

    // When the `buttonAccess` (Deep Access) is clicked:
    // 1. Hide the current `firstLevelModal`.
    // 2. Show the `modalAccess`.
    // 3. Increase the player's `failures` stat by 1 and decrease their `logic` stat by 1.
    buttonAccess.addEventListener("click", () => {
        firstLevelModal.hide();
        modalAccess.show();
        player.failures++;         // Increase player's failures stat.
        player.logic--;            // Decrease player's logic stat.
    });

    // When the `buttonSilence` (Observe in Silence) is clicked:
    // 1. Hide the current `firstLevelModal`.
    // 2. Show the `modalSilence`.
    // 3. Decrease the player's `logic` stat by 1.
    buttonSilence.addEventListener("click", () => {
        firstLevelModal.hide();
        modalSilence.show();
        player.logic--;            // Decrease player's logic stat.
    });
});
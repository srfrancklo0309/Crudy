import { player } from "./playerstats.js"; // This line gets the 'player' object from 'playerstats.js'. It likely holds player stats like empathy, logic, etc.

/**
 * This function updates the player's stats displayed on the webpage.
 * It injects an HTML block with stat icons and values into a specific container.
 * @param {string} barstats The ID of the HTML element where the stats bar should be injected.
 */
function updatestats(barstats) {
    // Get the HTML element where the stats bar will be placed, using its ID.
    const containerstats = document.getElementById(barstats);

    // This is a block of HTML code (a template string) that displays the player's stats.
    // It uses values directly from the 'player' object (e.g., player.empathy).
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

    // Insert the generated HTML string into the target container on the webpage.
    containerstats.innerHTML = htmltoinyect;
}

// This makes sure the code runs only after the entire HTML document is loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Get references to the "Next" buttons that lead from the introductory modals to the first level.
    const buttonRouteNext = document.getElementById("buttonRouteNext");           // Button for the "Route" choice.
    const buttonEnvironmentNext = document.getElementById("buttonEnvironmentNext"); // Button for the "Environment" choice.
    const buttonAccessNext = document.getElementById("buttonAccessNext");         // Button for the "Access" choice.
    const buttonSilenceNext = document.getElementById("buttonSilenceNext");       // Button for the "Silence" choice.

    // Get references to the HTML elements that represent different popup windows (modals).
    const modalRouteEl = document.getElementById("modalRoute");           // HTML element for the Route modal.
    const modalEnvironmentEl = document.getElementById("modalEnvironment"); // HTML element for the Environment modal.
    const modalAccessEl = document.getElementById("modalAccess");         // HTML element for the Access modal.
    const modalSilenceEl = document.getElementById("modalSilence");       // HTML element for the Silence modal.
    const secondLevelModalEl = document.getElementById("second-level");   // HTML element for the second level modal (where initial choices are made).
    const modalDoorEl = document.getElementById("modalDoor");             // HTML element for the "Door" decision modal.
    const modalConditionalEl = document.getElementById("modalConditional"); // HTML element for the "Conditional" decision modal.
    const modalStraightEl = document.getElementById("modalStraight");     // HTML element for the "Straight" decision modal.
    const modalFlowEl = document.getElementById("modalFlow");             // HTML element for the "Flow" decision modal.

    // Create Bootstrap modal instances for each modal element.
    // These objects allow you to easily show or hide the modals using Bootstrap's JavaScript functions.
    const modalRoute = new bootstrap.Modal(modalRouteEl);
    const modalEnvironment = new bootstrap.Modal(modalEnvironmentEl);
    const modalAccess = new bootstrap.Modal(modalAccessEl);
    const modalSilence = new bootstrap.Modal(modalSilenceEl);
    const secondLevelModal = new bootstrap.Modal(secondLevelModalEl);
    const modalDoor = new bootstrap.Modal(modalDoorEl);
    const modalConditional = new bootstrap.Modal(modalConditionalEl);
    const modalStraight = new bootstrap.Modal(modalStraightEl);
    const modalFlow = new bootstrap.Modal(modalFlowEl);

    // Get references to the decision buttons within the first level of choices.
    const buttonDoor = document.getElementById("buttonDoor");             // Button for the "Door" choice (increases logic).
    const buttonConditional = document.getElementById("buttonConditional"); // Button for the "Conditional" choice (increases empathy).
    const buttonStraight = document.getElementById("buttonStraight");     // Button for the "Straight" choice (increases failures).
    const buttonFlow = document.getElementById("buttonFlow");             // Button for the "Flow" choice (modifies stats).

    // --- Add Event Listeners to Buttons ---

    // When clicking any of the initial "Next" buttons (from introduction modals):
    // 1. Hide all introductory modals.
    // 2. Show the 'secondLevelModal' (which contains the first set of main choices).
    // 3. Update the player's stats displayed on the page.

    buttonRouteNext.addEventListener("click", () => {
        modalRoute.hide();        // Hide the Route modal.
        modalEnvironment.hide();
        modalAccess.hide();
        modalSilence.hide();
        secondLevelModal.show();  // Show the second level modal.
        updatestats("secondbarstats"); // Update stats display.
    });

    buttonEnvironmentNext.addEventListener("click", () => {
        modalRoute.hide();
        modalEnvironment.hide();
        modalAccess.hide();
        modalSilence.hide();
        secondLevelModal.show();
        updatestats("secondbarstats");
    });

    buttonAccessNext.addEventListener("click", () => {
        modalRoute.hide();
        modalEnvironment.hide();
        modalAccess.hide();
        modalSilence.hide();
        secondLevelModal.show();
        updatestats("secondbarstats");
    });

    buttonSilenceNext.addEventListener("click", () => {
        modalRoute.hide();
        modalEnvironment.hide();
        modalAccess.hide();
        modalSilence.hide();
        secondLevelModal.show();
        updatestats("secondbarstats");
    });

    // When clicking the "Door" button (a decision in the first level):
    // 1. Hide the current second-level modal.
    // 2. Show the specific "Door" modal.
    // 3. Increase the player's logic stat by 1.
    buttonDoor.addEventListener("click", () => {
        secondLevelModal.hide();    // Hide the first level modal.
        modalDoor.show();           // Show the "Door" modal.
        player.logic++;             // Increase player's logic.
    });

    // When clicking the "Conditional" button:
    // 1. Hide the current second-level modal.
    // 2. Show the specific "Conditional" modal.
    // 3. Increase the player's empathy stat by 1.
    buttonConditional.addEventListener("click", () => {
        secondLevelModal.hide();
        modalConditional.show();
        player.empathy++;           // Increase player's empathy.
    });

    // When clicking the "Straight" button:
    // 1. Hide the current second-level modal.
    // 2. Show the specific "Straight" modal.
    // 3. Increase the player's failures stat by 1.
    buttonStraight.addEventListener("click", () => {
        secondLevelModal.hide();
        modalStraight.show();
        player.failures++;          // Increase player's failures.
    });

    // When clicking the "Flow" button:
    // 1. Hide the current second-level modal.
    // 2. Show the specific "Flow" modal.
    // 3. Adjust player's logic and failures stats.
    buttonFlow.addEventListener("click", () => {
        secondLevelModal.hide();
        modalFlow.show();
        player.logic++;             // Increase player's logic.
        player.failures--;          // Decrease player's failures.
    });
});
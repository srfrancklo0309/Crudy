import { player } from "./playerstats.js"; // This line gets the 'player' data from another file called playerstats.js.

document.addEventListener("DOMContentLoaded", () => { // This makes sure the code runs only after the whole web page is loaded.

    // These lines get the 'Next' buttons from your HTML document.
    const buttonLogicNext = document.getElementById("buttonLogicNext");     // The button for the "Logic" choice.
    const buttonEmpathyNext = document.getElementById("buttonEmpathyNext"); // The button for the "Empathy" choice.
    const buttonDeclineNext = document.getElementById("buttonDeclineNext"); // The button for the "Decline" choice.

    // These lines get the actual popup window (modal) elements from your HTML.
    const modalLogicEl = document.getElementById("modalLogic");       // The HTML element for the logic modal.
    const modalEmpathyEl = document.getElementById("modalEmpathy");   // The HTML element for the empathy modal.
    const modalDeclineEl = document.getElementById("modalDecline");   // The HTML element for the decline modal.
    const finalmodal1El = document.getElementById("final-modal-1");   // The HTML element for the first ending modal.
    const finalmodal2El = document.getElementById("final-modal-2");   // The HTML element for the second ending modal.
    const finalmodal3El = document.getElementById("final-modal-3");   // The HTML element for the third ending modal.

    // These lines turn the HTML modal elements into special "Bootstrap modal objects".
    // This allows JavaScript to easily show or hide these modals.
    const modalLogic = new bootstrap.Modal(modalLogicEl);
    const modalEmpathy = new bootstrap.Modal(modalEmpathyEl);
    const modalDecline = new bootstrap.Modal(modalDeclineEl);
    const finalmodal1 = new bootstrap.Modal(finalmodal1El);
    const finalmodal2 = new bootstrap.Modal(finalmodal2El);
    const finalmodal3 = new bootstrap.Modal(finalmodal3El);

    /**
     * This function decides which final modal (ending screen) to show to the player.
     * It looks at the player's current stats (empathy, logic, failures).
     * @param {object} actuallmodule This is the modal that is currently open (e.g., modalLogic, modalEmpathy).
     */
    function posiblefinals(actuallmodule){
        // If the player has good empathy AND good logic, show the first ending.
        if( player.empathy >= 2 && player.logic >= 2){
            actuallmodule.hide(); // Hide the modal that was just open.
            finalmodal1.show();   // Show final modal number 1.
        }
        // Else if the player has strong logic AND few failures, show the second ending.
        else if(player.logic >= 3 && player.failures <= 1){
            actuallmodule.hide(); // Hide the current modal.
            finalmodal2.show();   // Show final modal number 2.
        }
        // Else if the player has too many failures, show the third ending.
        else if (player.failures >= 3){
            actuallmodule.hide(); // Hide the current modal.
            finalmodal3.show();   // Show final modal number 3.
        }
        // For any other case (if none of the above conditions are met), also show the third ending.
        else{
            actuallmodule.hide(); // Hide the current modal.
            finalmodal3.show();   // Show final modal number 3.
        }
    }

    // These lines make the buttons clickable.
    // When a button is clicked:
    // 1. All initial modals (logic, decline, empathy) are hidden.
    // 2. The 'posiblefinals' function is called to decide which final ending to show.

    buttonLogicNext.addEventListener("click", () => { // When the "Logic Next" button is clicked...
        modalLogic.hide();   // ...hide the logic modal.
        modalDecline.hide(); // ...hide the decline modal.
        modalEmpathy.hide(); // ...hide the empathy modal.
        posiblefinals(modalLogic); // ...then figure out the ending based on the logic path.
    });

    buttonEmpathyNext.addEventListener("click", () => { // When the "Empathy Next" button is clicked...
        modalLogic.hide();   // ...hide the logic modal.
        modalDecline.hide(); // ...hide the decline modal.
        modalEmpathy.hide(); // ...hide the empathy modal.
        posiblefinals(modalEmpathy); // ...then figure out the ending based on the empathy path.
    });

    buttonDeclineNext.addEventListener("click", () => { // When the "Decline Next" button is clicked...
        modalLogic.hide();   // ...hide the logic modal.
        modalDecline.hide(); // ...hide the decline modal.
        modalEmpathy.hide(); // ...hide the empathy modal.
        posiblefinals(modalDecline); // ...then figure out the ending based on the decline path.
    });

}); // End of the DOMContentLoaded event listener.
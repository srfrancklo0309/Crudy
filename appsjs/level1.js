let player={
    logic: 0,
    empathy: 0,
    echoes: 0,
    failures: 0
}


document.addEventListener("DOMContentLoaded", () => {
    const buttonNext = document.getElementById("buttonNext");
    const firstbuttonNext = document.getElementById("firstbuttonNext");
    const startModalEl = document.getElementById("startModal");
    const firstLevelModalEl = document.getElementById("first-level");
    const modalRouteEl= document.getElementById("modalRoute");
    const modalEnvironmentEl= document.getElementById("modalEnvironment");
    const modalAccessEl = document.getElementById("modalAccess");
    const modalSilenceEl = document.getElementById("modalSilence");

    const startModal = new bootstrap.Modal(startModalEl);
    const firstLevelModal = new bootstrap.Modal(firstLevelModalEl);
    const modalRoute = new bootstrap.Modal(modalRouteEl);
    const modalEnvironment=new bootstrap.Modal(modalEnvironmentEl);
    const modalAccess = new bootstrap.Modal(modalAccessEl);
    const modalSilence = new bootstrap.Modal(modalSilenceEl)

    const buttonRoute = document.getElementById("buttonRoute");
    const buttonEnvironment = document.getElementById("buttonEnvironment");
    const buttonAccess = document.getElementById("buttonAccess");
    const buttonSilence = document.getElementById("buttonSilence");

    firstbuttonNext.addEventListener("click", () => {
      startModal.hide();         // Oculta el primer modal
      firstLevelModal.show();     // Muestra el siguiente
    });

    buttonRoute.addEventListener("click", () => {
      firstLevelModal.hide();         // Oculta el primer modal
      modalRoute.show();     // Muestra el siguiente
      player.logic++;
    });

    buttonEnvironment.addEventListener("click", () => {
        firstLevelModal.hide();
        modalEnvironment.show();
        player.empathy++
    });

    buttonAccess.addEventListener("click", () => {
        firstLevelModal.hide();
        modalAccess.show();
        player.failures++;
        player.logic--;
    });

    buttonSilence.addEventListener("click", () => {
        firstLevelModal.hide();
        modalSilence.show();
        player.logic--
    });



});
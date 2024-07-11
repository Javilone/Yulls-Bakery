// PRODUCT BUTTONS AND ORDER BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const orderInput = document.getElementById("order");

    const buttonIds = {
        cakes: ["cakeBtn1", "cakeBtn2", "cakeBtn3", "cakeBtn4", "cakeBtn5"],
        cupCakes: ["cupCakeBtn1", "cupCakeBtn2", "cupCakeBtn3", "cupCakeBtn4", "cupCakeBtn5"],
        cookies: ["cookiesBtn1", "cookiesBtn2", "cookiesBtn3", "cookiesBtn4", "cookiesBtn5"]
    };

    // Rellena el orderInput y desplaza hacia #contact en la página
    function fillOrderInput(buyBtn) {
        orderInput.value = buyBtn.title;
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
    }

    function addListeners(buttonIds) {
        buttonIds.forEach(id => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();  // Previene el comportamiento por defecto del enlace
                    fillOrderInput(button);
                });
            }
        });
    }

    Object.values(buttonIds).forEach(addListeners);
});
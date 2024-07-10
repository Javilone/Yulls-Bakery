const orderInput = document.getElementById("order");

const cakeBtn1 = document.getElementById("cakeBtn1");
const cakeBtn2 = document.getElementById("cakeBtn2");
const cakeBtn3 = document.getElementById("cakeBtn3");
const cakeBtn4 = document.getElementById("cakeBtn4");
const cakeBtn5 = document.getElementById("cakeBtn5");

const cupCakeBtn1 = document.getElementById("cupCakeBtn1");
const cupCakeBtn2 = document.getElementById("cupCakeBtn2");
const cupCakeBtn3 = document.getElementById("cupCakeBtn3");
const cupCakeBtn4 = document.getElementById("cupCakeBtn4");
const cupCakeBtn5 = document.getElementById("cupCakeBtn5");

const cookiesBtn1 = document.getElementById("cookiesBtn1");
const cookiesBtn2 = document.getElementById("cookiesBtn2");
const cookiesBtn3 = document.getElementById("cookiesBtn3");
const cookiesBtn4 = document.getElementById("cookiesBtn4");
const cookiesBtn5 = document.getElementById("cookiesBtn5");

function fillOrderInput(buyBtn) {
    orderInput.value = buyBtn.title;
}

// CAKES EVENT LISTENERS
cakeBtn1.addEventListener("click", function() {
    fillOrderInput(cakeBtn1);
});

cakeBtn2.addEventListener("click", function() {
    fillOrderInput(cakeBtn2);
});

cakeBtn3.addEventListener("click", function() {
    fillOrderInput(cakeBtn3);
});

cakeBtn4.addEventListener("click", function() {
    fillOrderInput(cakeBtn4);
});

cakeBtn5.addEventListener("click", function() {
    fillOrderInput(cakeBtn5);
});


// CUPCAKES EVENT LISTENERS
cupCakeBtn1.addEventListener("click", function() {
    fillOrderInput(cupCakeBtn1);
});

cupCakeBtn2.addEventListener("click", function() {
    fillOrderInput(cupCakeBtn2);
});

cupCakeBtn3.addEventListener("click", function () {
    fillOrderInput(cupCakeBtn3);
});

cupCakeBtn4.addEventListener("click", function () {
    fillOrderInput(cupCakeBtn4);
});

cupCakeBtn5.addEventListener("click", function () {
    fillOrderInput(cupCakeBtn5);
});

// SWEETS & COOKIES EVENT LISTENERS
cookiesBtn1.addEventListener("click", function() {
    fillOrderInput(cookiesBtn1);
});

cookiesBtn2.addEventListener("click", function() {
    fillOrderInput(cookiesBtn2);
});

cookiesBtn3.addEventListener("click", function() {
    fillOrderInput(cookiesBtn3);
});

cookiesBtn4.addEventListener("click", function() {
    fillOrderInput(cookiesBtn4);
});

cookiesBtn5.addEventListener("click", function() {
    fillOrderInput(cookiesBtn5);
});
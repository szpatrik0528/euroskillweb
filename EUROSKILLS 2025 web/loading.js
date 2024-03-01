//-- A teljes oldal betöltődése után fut le --
window.addEventListener('load', function () {
    console.log('A teljes oldal betöltődött');
});
//-- Csak akkor fut le, ha a DOM betöltődött --
document.addEventListener('DOMContentLoaded', function () {
    console.log('A DOM betöltődött');
});

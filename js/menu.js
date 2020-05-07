let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function() {
    'use strict';
    document.getElementById("menu").classList.toggle('mostrar');
});
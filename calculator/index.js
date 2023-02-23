/* obtenemos cada elemento del html y lo
 introducimos en variables js */

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");

/*  */
const display = new Display(displayValorActual, displayValorAnterior);

numeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

operadores.forEach(boton=>{
    boton.addEventListener('click', ()=> display.computar(boton.value))
})
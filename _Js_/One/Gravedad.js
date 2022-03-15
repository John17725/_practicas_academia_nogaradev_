const prompt = require("prompt-sync")();

var usuario = prompt("Ingresa tu nombre: ")
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = prompt("Ingresa tu peso: ");
var peso_final;

peso_final = peso * g_marte / g_tierra;
peso_final = parseFloat(peso_final);
console.log(usuario,"Tu peso en marte es:",peso_final,"Kg");
var valor15min = prompt("Digite o valor de cada 15min: ")
var tempocliente = prompt("Tempo de uso do cliente:")
var fracoes = Math.ceil(tempocliente / 15)
var valorpagar = valor15min * fracoes

alert("O valor a ser pago pelo cliente será de: "+valorpagar)
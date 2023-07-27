var modelo = prompt("Qual o modelo do carro? ")
var preco = prompt("Qual o preço do veículo? ")
var entrada = preco / 2
var saldo = entrada / 12

console.log(modelo)
console.log(preco)
console.log(entrada)
console.log(saldo)
console.log(saldo.toFixed(2))

alert("Valor da entrada em reais: "+entrada+"\nsaldo: "+(saldo.toFixed(2))+"R$")
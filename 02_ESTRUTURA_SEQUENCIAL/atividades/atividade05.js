const valorPor15Minstr = prompt("Digite o valor de cada 15 minutos de uso:");
const tempoDeUsoMinstr = prompt("Digite o tempo de uso em minutos:");

const valorPor15Min = +valorPor15Min
const tempoDeUsoMin = +tempoDeUsoMin

const valorTotal = Math.ceil(tempoDeUsoMin / 15) * valorPor15Min;

alert("O valor a ser pago é R$" +valorTotal.toFixed(2))

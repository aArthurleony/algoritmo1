var descricao = prompt("Informe a descricao do produto")
var precoMedicamento = prompt("Informe o preço do medicamento")
var promocao = Math.floor(precoMedicamento*2)
var promocaoP = promocao / 2

console.log(descricao)
console.log(precoMedicamento)
console.log(promocao)
console.log(promocaoP)

alert("Valor do produto normal em reais: " +precoMedicamento+ "\nValor dos dois produtos somados com promoção em reais: " +promocao+ "\nvalor de cada unidade na promoção em reais: "+promocaoP+"\n")



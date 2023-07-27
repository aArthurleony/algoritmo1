var descricaoProduto = prompt("Digite a descrição do produto: ");
var precoProduto = parseFloat(prompt("Digite o preço do produto: "));
var desconto = precoProduto * 0.5;
var valorComDesconto = precoProduto - desconto;
alert("Promoção: 50% de desconto na compra de três unidades do produto." +
      "\nDescrição do produto: " + descricaoProduto +
      "\nPreço do produto: R$ " + precoProduto.toFixed(2) +
      "\nValor com desconto (para um item): R$ " + valorComDesconto.toFixed(2));
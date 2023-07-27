//1°declarar todas as variáveis
let nome, anoNascimento, anoAtual, idade

//2° variáreis que irão receber valor
nome = prompt("digite o seu nome: ")
anoNascimento = prompt("Digite o ano de nascimento: ")
anoAtual = prompt("Digite o ano atual")

//3° Casting nas variáveis que possuem valor numérico
anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

//4° Prpcessar as variáveis que possuem valor
idade = anoAtual - anoNascimento

//5° Mostrar o resultado
document.write(`Olá ${nome}, sua idade é ${idade} anos`)
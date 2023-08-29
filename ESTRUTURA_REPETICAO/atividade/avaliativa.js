var numeroOperario, pecasfabricadas, sexoOperario, idenficador, i, salario, salario2, 
salario = 1000
for(let i = 1; i <= 3; i++){
numeroOperario = Number(prompt("Digite o número do operário: "))
pecasfabricadas = Number(prompt("Digite a quantidade de peçcas fabricadas no mês: "))
sexoOperario = prompt("Digite o sexo do operário\n(M)\N(F)")
}
if(pecasfabricadas < 20){
        document.write("classe 1<br>N° Operário"+numeroOperario+"<br>salario = "+salario+"R$")
    }
else if(pecasfabricadas >= 21 & pecasfabricadas <=30 ){
    pecasfabricadas = pecasfabricadas - 20
    salario = 1000
    for(let i = 1 ; i <= pecasfabricadas ; i++){
    salario2 = salario * 0.03 * i
}
document.write("classe 2<br>N° Operário"+numeroOperario+"<br>Salário = "+(salario2 + 1000)+" R$)")
}
else if(pecasfabricadas > 30){
    pecasfabricadas = pecasfabricadas - 30
    salario = 1000
    for(let i = 1; i <= pecasfabricadas; i++){
    salario2 = salario * 0.05 * i
    }


    document.write("classe 3<br>seu salário é de:"+(salario2 + 1000))


}
var atvsala1 = Number(prompt("qual é a nota da atividade de sala da arquietura de hardware e software?(0-10) "))
var avtcasa1 = Number(prompt("qual é a nota da atividade de casa da arquietura de hardware e software?(0-10) "))
var situacaoap1 = Number(prompt("qual é a nota da situação aprendizagem da arquietura de hardware e software?(0-10) ")) 
var avaliacao1 = Number(prompt("qual é a nota da avaliação objetiva de arquietura de hardware e software?(0-10) "))

var MediaArquitetura = (atvsala1 + avtcasa1 + situacaoap1 + avaliacao1) / 4

var atvsala2 = Number(prompt("qual é a nota da atividade de sala de Metodologias de Desenvolvimento de Projetos?(0-10) "))
var avtcasa2 = Number(prompt("qual é a nota da atividade de casa de Metodologias de Desenvolvimento de Projetos?(0-10) "))
var situacaoap2 = Number(prompt("qual é a nota da situação aprendizagem de Metodologias de Desenvolvimento de Projetos?(0-10) "))
var avaliacao2 = Number(prompt("qual é a nota da avaliação de Metodologias de Desenvolvimento de Projetos?(0-10) "))

var MediaMetodologia = (atvsala2 + avtcasa2 + situacaoap2 + avaliacao2) / 4

var atvsala3 = Number(prompt("qual é a nota da atividade de sala de Lógica Computacional?(0-10) "))
var avtcasa3 = Number(prompt("qual é a nota da atividade de casa de Lógica Computacional?(0-10) "))
var situacaoap3 = Number(prompt("qual é a nota da situação aprendizagem de Lógica Computacional?(0-10) ")) 
var avaliacao3 = Number(prompt("qual é a nota da avaliação de Lógica Computacional?(0-10) "))

var MedialogicaC = (atvsala3 + avtcasa3 + situacaoap3 + avaliacao3) / 4

var atvsala4 = Number(prompt("qual é a nota da atividade de sala de Fundamentos de banco de dados?(0-10) "))
var avtcasa4 = Number(prompt("qual é a nota da atividade de casa de Fundamentos de banco de dados?(0-10) "))
var situacaoap4 = Number(prompt("qual é a nota da situação aprendizagem de Fundamentos de banco de dados?(0-10) ")) 
var avaliacao4 = Number(prompt("qual é a nota da avaliação de Fundamentos de banco de dados?(0-10) "))

var MediaFundamento = (atvsala4 + avtcasa4 + situacaoap4 + avaliacao4) / 4
var mediaSemestral = (MediaArquitetura + MediaMetodologia + MedialogicaC + MediaFundamento) / 4

alert("A Média em Arquitetura de Hardware e software: "+MediaArquitetura.toFixed(2)+"\nA Média em Metodologias de Desenvolvimento de projetos: "+MediaMetodologia.toFixed(2)+"\nA Média em Lógica computacional é de: "+MedialogicaC.toFixed(2)+"\nA Média em Fundamento de banco de dados: "+MediaFundamento.toFixed(2)+"\nA Média Semestral do aluno equivale a: "+mediaSemestral.toFixed(2))








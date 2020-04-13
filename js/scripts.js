nome = prompt("Nome completo")
tagh1.innerHTML = "Nome:"+nome
nascimento = '08/10/1998'
condicao = confirm("Tem condição pré-existente:")

if(condicao){estadodesaude = "Sim"}
if(!condicao){estadodesaude= "Não"}

lista.innerHTML= 
  `<li> Data Nascimento: ${nascimento} </li>
   <li> Idade: 23 anos </li>
   <li> Tem condição pré-existente: ${estadodesaude} </li>
   <li> Acompanhamento médico: ${estadodesaude} </li>`
function Executarsorteio(){
  aleatorio= Math.round(Math.random()*10)
  console.log(aleatorio)
  numero = prompt("Seu numero da sorte")
  while (numero > 10 || numero < 0) {
    alert("Numero invalido")
    numero = prompt("Digite seu numero novamente")
  }
  if (numero == aleatorio) {
    paragrafoResultado.innerHTML= "Você ganhou o sorteio"
  } else {
    paragrafoResultado.innerHTML= "Você não ganhou o sorteio"
  }
}
function Executarsorteio(){
  aleatorio= Math.round(Math.random()*10)
  console.log(aleatorio)
  numero = prompt("Seu numero da sorte")
  if (numero == aleatorio) {
    paragrafoResultado.innerHTML= "Você ganhou o sorteio"
  } else {
    paragrafoResultado.innerHTML= "Você não ganhou o sorteio"
  }
}
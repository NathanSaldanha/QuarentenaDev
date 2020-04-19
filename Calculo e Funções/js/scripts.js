function formataMoeda(numero) {
  
  return numero.toFixed(2).replace(".",",")
}

function calcular() {

  distanciakm = inputDistancia.value
  tempoMin = inputTempo.value
  valorCorrida = 2 + distanciakm * 1.4 + tempoMin * 0.26

  botaoCalcular.innerHTML = 'Sua corrida deu: R$ '+formataMoeda(valorCorrida)
}

function gerar() {

  for (let contador = 0; contador < 1000000; contador++) {

    htmlCertificado = emitirCertificado(inputNome.value)
  }

  listLink=
  [
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Calculo%20e%20funcoes",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Condicoes",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Contadores%20e%20loops",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Certificado"
  ]

  listatitulos=[
    'Calculo e Funcoes',
    'Condicoes',
    'Contadores e Loops',
    'Certificado',
  ]

  listLinkHtml = ""
  for (let contLink = 0; contLink < listLink.length; contLink+=1) {

    link = listLink[contLink]
    listTitulo = listatitulos[contLink]
    listLinkHtml += `<font color=46bec9 ><li><a href=${link}>${listTitulo}: ${link}</a></li></font>`
  }

  document.body.innerHTML= 
    `${htmlCertificado}  
    <ol>  
      ${listLinkHtml}
    </ol>`
  print();
}

function gerar() {

  for (let contador = 0; contador < 1000000; contador++) {

    htmlCertificado = emitirCertificado(inputNome.value)
  }

  listLink=
  [
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Calculo%20e%20Fun%C3%A7%C3%B5es",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Condi%C3%A7%C3%B5es",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Contadores%20e%20Loops",
    "https://github.com/NathanSaldanha/QuarentenaDev/tree/master/Certificado"
  ]

  listLinkHtml = ""
  for (let contLink = 0; contLink < listLink.length; contLink+=1) {

    link = listLink[contLink]
    listLinkHtml += `<font color=46bec9 ><li><a href=${link}>${link}</a></li></font>`
  }

  document.body.innerHTML= 
    `${htmlCertificado}  
    <ol>  
      ${listLinkHtml}
    </ol>`
  print();
}

import cipher from './cipher.js';

const txtEncode = document.getElementById("textoCodificado")
const txtDecode = document.getElementById("textoDescodificado")

txtEncode.addEventListener("keyup" , (  ) => {
  let text = document.getElementById("txtCodificafado").value;
  let offset = perseInt(document.getElementById("inpkey").value);
  let code = cipher.encode(offset,text);
  const res = document.getElementById("textoDescodificafado");
  res.innerHTML = code;
});

txtDecode.addEventListener("keyup" , ( ) => {
  let text = document.getElementById("textoDescodificafado").value;
  let offset = perseInt(document.getElementById("inpkey").value);
  let code = cipher.decode(offset,text);
  const res = document.getElementById("textoCodificafado")
});


/*
botaoDecifrar.addEventListener("click", function encode(texto, offset){
  const texto= mensagem
})*/

documento.getElementById("botaoCifrar").addEventListener("click",validarMensagem )

function validarMensagem() {
  if (document.getElementById("botaoCifrar").value != " "&&
  document.getElementById("botaDecifrar").value !=" " &&
  document.getElementById("texto").value !=" "){
    alert("Esta quase lá!")
  }else{
    alert("Por favor, preencha os campos offset e a mensagem");
  }
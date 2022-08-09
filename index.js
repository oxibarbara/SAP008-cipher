import cipher from "./cipher.js";

const btnEncode = document.getElementById("btnEncode");
const btnDecode = document.getElementById("btnDecode");

btnEncode.addEventListener("click", () => {
  if (mensagemEhValida()) {
    return;
  }
  let text = document.getElementById("text").value;
  let offset = parseInt(document.getElementById("offset").value);
  let code = cipher.encode(offset, text);
  const res = document.getElementById("txtResultado");
  res.innerHTML = code;
});

btnDecode.addEventListener("click", () => {
  if (mensagemEhValida()) {
    return;
  }
  let text = document.getElementById("text").value;
  let offset = parseInt(document.getElementById("offset").value);
  let code = cipher.decode(offset, text);
  const res = document.getElementById("txtResultado");
  res.innerHTML = code;
});

function mensagemEhValida() {
  if (
    document.getElementById("btnEncode").value != "" &&
    document.getElementById("btnDecode").value != "" &&
    document.getElementById("text").value != ""
  ) {
    alert("Esta quase lá!");
    return true;
  } else {
    alert("Por favor, preencha os campos offset e mensagem");
    return false;
  }
}

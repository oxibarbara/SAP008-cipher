const cipher = { encode, decode };

function encode(offset, text) {
  let mensagem = " ";

  for (let i = 0; i < text.length; i++) {
    const numberASCII = text.charCodeAt(i);
    if (numberASCII >= 65 && numberASCII <= 90) {
      const formula = ((numberASCII - 65 + offset) % 26) + 65;
      mensagem += String.fromCharCode(formula);
    }
  }
  return mensagem;
}

function decode(offset, text) {
  let mensagem = " ";
  for (let i = 0; i < text.length; i++) {
    const numberASCII = text.charCodeAt(i);

    if (numberASCII >= 65 && numberASCII <= 90) {
      const formula = ((numberASCII - 65 - offset) % 26) + 65;
      mensagem += String.fromCharCode(formula);
    }
  }
  return mensagem;
}

export default cipher;

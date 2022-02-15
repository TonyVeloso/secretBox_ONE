//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

//var btn = document.querySelector("#transformButton");
//btn.addEventListener("click", criptografa);
//console.log("teste");
function criptografa() {
  document.querySelector("#pBoxEsq").innerHTML = "Mensagem original";
  document.querySelector("#pBoxDir").innerHTML = "Mensagem criptografada";

  var texto = null;
  //captura texto no <textarea>
  texto = document.querySelector("#textoEntrada").value;

  //criptografa texto
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/u/g, "ufat");

  document.querySelector("#textoResultado").innerHTML = texto;
}

function descriptografa() {
  document.querySelector("#pBoxEsq").innerHTML = "Mensagem criptografada";
  document.querySelector("#pBoxDir").innerHTML = "Mensagem original";

  var codigo = null;
  codigo = document.querySelector("#textoEntrada").value;

  //criptografa texto

  codigo = codigo.replace(/ai/g, "a");
  codigo = codigo.replace(/enter/g, "e");
  codigo = codigo.replace(/imes/g, "i");
  codigo = codigo.replace(/ober/g, "o");
  codigo = codigo.replace(/ufat/g, "u");

  document.querySelector("#textoResultado").innerHTML = codigo;
}

function copiarEsquerdo() {
  var contentOriginal = document.getElementById("textoEntrada");
  contentOriginal.select();
  document.execCommand("copy");
}

function copiarDireito() {
  var contentResultado = document.getElementById("textoResultado").innerHTML;

  navigator.clipboard.writeText(contentResultado);
}

function apagaEsq() {
  document.querySelector("#textoEntrada").value = "";
}

function apagaDir() {
  document.querySelector("#textoResultado").innerHTML = "";
}

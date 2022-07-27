function convertir(a, b) {
  let resultado = a * b;
  return resultado;
}
let dinero = 3;
let cambio = 4;

function iniciarconversion() {
   
  cambio=document.getElementById("cambio").value;
  dinero = document.getElementById("dinero").value;
  dinero=(dinero>0)?dinero:1;
  let recibo = convertir(dinero, cambio);

  document.getElementById("conversiones").innerHTML += `el ${dinero} es total a ${recibo} <br>`;
  document.getElementById("dinero").value="";
  document.getElementById("dinero").focus();
}

window.onload = inicio;

function inicio() {
 
  document.getElementById("boton").onclick = iniciarconversion;
  document.getElementById("dinero").onkeydown=teclado;
  document.getElementById("cambio").value =4;
}

function teclado(e){
    //codigo de tecla
let codigo_tecla=e.keyCode;
// console.log(codigo_tecla);
//13 codigo del enter
if(codigo_tecla==13){
iniciarconversion();
}
}

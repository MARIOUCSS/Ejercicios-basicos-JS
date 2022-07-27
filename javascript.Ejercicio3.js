window.onload = inicio;
let rojo = "https://www.html6.es/img/rojo.png";
let azul = "https://www.html6.es/img/azul.png";
let caja;

function inicio() {
  caja = document.querySelector("#caja");
  document.querySelectorAll("button")[0].onclick = unorojo;
  document.querySelectorAll("button")[1].onclick = cuatroazules;
  document.querySelectorAll("button")[2].onclick = modificarazules;
  document.querySelectorAll("button")[3].onclick = eliminarrojos;
  document.querySelectorAll("button")[4].onclick = vaciar;
}

function unorojo() {
  caja.insertAdjacentHTML("beforeend", `<img class="rojo" src=${rojo}>`);
}
function cuatroazules() {
  for (let i = 0; i < 4; i++) {
    caja.insertAdjacentHTML("beforeend", `<img class="azul" src=${azul}>`);
  }
}
function modificarazules() {
  let contador = document.querySelectorAll(".azul").length;
  //modificamos el src para pasarl a rojo
  for (let index = contador-1; index >= 0; index--) {
    document.querySelectorAll(".azul")[index].src=rojo;
    document.querySelectorAll(".azul")[index].setAttribute("class","rojo");
  }
}
function eliminarrojos() {
    let contador = document.querySelectorAll(".rojo").length;
    //modificamos el src para pasarl a rojo
    for (let index = contador-1; index>=0; index--) {
        document.querySelectorAll(".rojo")[index].remove();
      }
  }
  function vaciar() {
   caja.innerHTML="";
  }
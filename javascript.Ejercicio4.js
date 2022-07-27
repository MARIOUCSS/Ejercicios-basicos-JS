window.onload = inicio;
var reyes = [
  "atanagildo",
  "ataulfo",
  "ervigio",
  "leogivildo",
  "recesvinto",
  "sisebuto",
  "teodorico",
];
var camisetas = ["camisetaNegra.png", "camisetaBlanca.png"];
let camisetaactual = 0;
let reyactual = Math.floor(Math.random() * reyes.length);
function inicio() {
  //let letramayuscula=reyes[reyactual].substring(0,1).toUpperCase()+reyes[reyactual].substring(1).toLocaleLowerCase();
  document
    .querySelector(".camiseta")
    .insertAdjacentHTML(
      "beforeend",
      `<img id="dibujo" src="${camisetas[camisetaactual]}">`
    );
  document.querySelector("#dibujo").onclick = cambiardecamiseta;
  document.querySelector(
    ".imagen"
  ).innerHTML = `<img id="rey" src="rey_${reyes[reyactual]}.png">`;

  document.querySelector("#rey").onclick = cambiarderey;
  actualizarrey();
  document.querySelector("#imprimir").onclick = imprimir;

}
function actualizarrey() {
  let letramayuscula =
    reyes[reyactual].substring(0, 1).toUpperCase() +
    reyes[reyactual].substring(1).toLocaleLowerCase();
  document.querySelector(".texto").innerHTML = `${letramayuscula}`;
}

function cambiardecamiseta() {
   let colores=["white","black"];
  camisetaactual = Number(!camisetaactual);
  // console.log(camisetaactual);
  document.querySelector("#dibujo").src = `${camisetas[camisetaactual]}`;
  document.querySelector(".texto").style.color = colores[camisetaactual];
}
function cambiarderey() {
  reyactual++;

  if (reyactual >= 7) {
    reyactual = 0;
  }
  document.querySelector("#rey").src = `rey_${reyes[reyactual]}.png`;
  actualizarrey();
}

function imprimir(){
   window.print();
}
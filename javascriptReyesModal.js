


const Reyes = [
  { nombre: "atanagildo", precio: 56 },
  { nombre: "ataulfo", precio: 67 },
  { nombre: "ervigio", precio: 76 },
  { nombre: "leogivildo", precio: 61 },
  { nombre: "recesvinto", precio: 61 },
  { nombre: "sisebuto", precio: 60 },
  { nombre: "teodorico", precio: 72 },
];
let orden2 = [];

let principal=document.querySelector(".Principal")


ordenar();
MostrarReyes();

function ordenar() {
  let orden1 = Reyes.map((e, i) => i);

  orden2 = orden1.sort(() => {
    return Math.random() - 0.5;
  });
  console.log(orden2);
}
function MostrarReyes() {
  for (let index = 0; index < orden2.length; index++) {
    const div = document.createElement("div");
    div.classList.add("elementos");
    div.innerHTML = `<div class="elemento" jab="${orden2[index]}">
     <img src="rey_${Reyes[orden2[index]].nombre}.png">
     <div class="nombre">${Reyes[orden2[index]].nombre}</div>
     </div>`;
    principal.appendChild(div);
    document.querySelectorAll(".elemento img")[index].onclick = Paginar;
  }
  console.log(Reyes);
}

function Paginar() {
  let hijos = this.parentNode.parentNode.parentNode.children;
  console.log(hijos);
  for (let index = 0; index < hijos.length; index++) {
    if (hijos[index] === this.parentNode.parentNode) {
      let costo = Reyes[orden2[index]].precio;
      alert(costo);
    }
  }
}

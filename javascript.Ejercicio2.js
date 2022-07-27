const resultado = document.getElementById("resultados");
const cajas = document.getElementById("caja");
const pri = cajas.querySelectorAll(".cajas .cuadro");
function inicio() {
  for (let i = 1; i <= 49; i++) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cuadro">${i}</div>`;
  }
  for (let k = 0; k < 48; k++) {
    document.querySelectorAll(".cuadro")[k].onclick = colorear;
  }
}

function colorear() {
  this.style.backgroundColor = "red";
  this.style.color = "white";
  this.classList.add("caja");
  let numero = this.innerHTML;
  let total = resultado.children.length;

  if (total > 0 ) {
    for (let i = 0; i < resultado.children.length; i++) {
      if (resultado.children[i].textContent === numero) {
        alert("se repite");
        return
      }
    } 
    if(total<5){
        const div = document.createElement("DIV");
    div.classList.add("cuadro");
    const conte = document.createTextNode(numero);
    div.appendChild(conte);
    resultado.appendChild(div); 
    }else{
        console.log("ya no entra mas");
        for (let i = 0; i < cajas.children.length; i++) {
            // cajas.children[i].classList.remove("caja");
             cajas.children[i].removeAttribute("style");
          }
    }
   
  } else {
    const div = document.createElement("DIV");
    div.classList.add("cuadro");
    const conte = document.createTextNode(numero);
    div.appendChild(conte);
    resultado.appendChild(div);
  }
}

window.onload = empezar;
function empezar() {
  inicio();
  document.getElementById("vaciar").onclick = vaciar;
}

function vaciar() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  for (let i = 0; i < cajas.children.length; i++) {
    cajas.children[i].classList.remove("caja");
    cajas.children[i].removeAttribute("style");
  }
}

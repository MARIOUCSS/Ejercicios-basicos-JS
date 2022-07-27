const formulario = document.querySelector("#formulario");
const lista = document.getElementById("listaActividades");
let arrayactividades = [];

const crearIten = (actividad) => {
  let item = {
    Actividad: actividad,
    estado: false,
  };
  arrayactividades.push(item);

  return item;
};

//eventos
const GuardarBase = () => {
  localStorage.setItem("rutina", JSON.stringify(arrayactividades));
  pintardb();
};
const editar = (texto) => {
  let pp = arrayactividades.findIndex((u) => {
    return u.Actividad === texto;
  });
  arrayactividades[pp].estado = true;
  GuardarBase();
};
const Eliminardb = (texto) => {
  let indexarray;

  arrayactividades.forEach((elemento, index) => {
    if (elemento.Actividad === texto) {
      indexarray = index;
    }
  });
 
  arrayactividades.splice(indexarray, 1);
  GuardarBase();
};
const pintardb = (texto) => {
  lista.innerHTML = "";
  arrayactividades = JSON.parse(localStorage.getItem("rutina"));
  if (arrayactividades == null) {
    arrayactividades = [];
  } else {
    arrayactividades.forEach((element) => {
      if (element.estado === false) {
        lista.innerHTML += ` <div class="alert alert-danger" role="alert">
    <i class="material-icons float-left mr-2">
      accessibility</i>
    <b>${element.Actividad}</b> - ${element.estado}<span class="float-right">
      <i class="material-icons">done</i>
      <i class="material-icons">delete</i></span>
  </div>`;
      }else{
        lista.innerHTML += ` <div class="alert alert-success" role="alert">
        <i class="material-icons float-left mr-2">
          accessibility</i>
        <b>${element.Actividad}</b> - ${element.estado}<span class="float-right">
          <i class="material-icons">done</i>
          <i class="material-icons">delete</i></span>
      </div>`;

      }
    });
  }
};
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let actividad = document.querySelector("#actividad").value;
  crearIten(actividad);
  GuardarBase();
  formulario.reset();
});
lista.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.innerHTML === "done" || e.target.innerHTML === "delete") {
    if (e.target.innerHTML === "delete") {
      let texto1 = e.target.parentNode.parentNode.children[1].innerHTML;
      Eliminardb(texto1);
    }
    if (e.target.innerHTML === "done") {
      let texto2 = e.target.parentNode.parentNode.children[1].innerHTML;
      
      editar(texto2);
    }
    // if (e.target.innerHTML === "done") {
    //   texto = e.target.parentNode.parentNode.children[1].innerHTML;
    //  console.log()

    // }
  }

  // if(e.target.innerHTML==='done' ||e.target.innerHTML==='delete'){
  //  const
  //     if(e.target.innerHTML==='delete'){

  //  }
  //  if(e.target.innerHTML==='delete'){

  //  }
  // }
});
//Se carga todo el HTML Y SE VA EJECUTAR

document.addEventListener("DOMContentLoaded", pintardb);

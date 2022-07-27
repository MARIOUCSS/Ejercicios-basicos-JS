lista = [
  { name: "hector", age: 34 },
  { name: "Francisca", age: 40 },
];

// localStorage.setItem("pato","lucas");
// console.log(localStorage.getItem("pato"));
console.log(lista)
//convertir este objeto a un formato para ser guardado
//lo va convertir en string
 localStorage.setItem("list",JSON.stringify(lista));
 ll=JSON.parse(localStorage.getItem("list"));
 
 ll.forEach(element => {
    let elemento=document.getElementById("elemento");
    let div=document.createElement("div");
    div.innerHTML=`${element.name} ${element.age}`;
    elemento.appendChild(div);
 });
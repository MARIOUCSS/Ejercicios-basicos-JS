const reyes=[];

reyes.push("mario");
reyes.push("juan");
reyes.push("Pedro")
reyes.push("Milk")
reyes.unshift("kakaroto","Milk");
let i=reyes.indexOf("Milk");
let j=reyes.lastIndexOf("Milk");
 let estraer=reyes.splice(2,1);
let selecionar=reyes.slice(1,4)//
let tt=reyes.indexOf("juan");
console.log(reyes)
console.log(j);
console.log(estraer);
console.log(selecionar)
let ppp=reyes.splice(tt,1);
console.log(ppp)
console.log(reyes)
reyes.reverse();
console.log(reyes)
let  otrosreyes=['pp','aa'];
reyes.concat(otrosreyes);
console.log(reyes);
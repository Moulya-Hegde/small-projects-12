const bodyel=document.querySelector(".container")
const careers=["a Student","a Developer","a Coding Enthusiast"]
let carind=0
let charind=0
update();
function update() {
    charind++;
    bodyel.innerHTML=`<h1>I am ${careers[carind].slice(0,charind)}</h1>`;
    if(charind==careers[carind].length){
        carind++
        charind=0
    }
    if(carind===careers.length){
        carind=0;
    }
    setTimeout(update,300)}

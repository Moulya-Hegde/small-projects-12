const el=document.querySelector("input")
const bodyel=document.querySelector("body")
el.checked=JSON.parse(localStorage.getItem("mode"))
update();
el.addEventListener("click",()=>{update();updatelocal();})
function update(){
    if(el.checked){
        bodyel.style.backgroundColor="black"
    }
    else{
        bodyel.style.backgroundColor="white"
    }
}
function updatelocal(){
    localStorage.setItem("mode",JSON.stringify(el.checked))
}
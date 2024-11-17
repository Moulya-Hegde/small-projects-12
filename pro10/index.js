const imel=document.querySelector(".image-container")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
let x=0;
let timer;
prev.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer)
    update()
})
next.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer)
    update()
})

update()
function update(){
    imel.style.transform=`perspective(1000px) rotateY(${x}deg)`
    timer=setTimeout(()=>{
        x-=45
        update()
    },3000)
}
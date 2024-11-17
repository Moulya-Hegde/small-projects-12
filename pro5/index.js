const bodyel=document.querySelector(".image-container")
const btnel=document.querySelector(".btn")
btnel.addEventListener("click",()=>{
    addnew();
})
function addnew(){
    for(let i=0;i<10;i++){
        const newimg=document.createElement("img")
    newimg.src=`https://picsum.photos/200?${Math.floor(Math.random()*2000)}`
    bodyel.appendChild(newimg)
    }
}
const textel=document.querySelector(".textarea")
const total=document.querySelector("#Total")
const rem=document.querySelector("#Remaining")

textel.addEventListener("keyup",()=>{
    update()
})

function update(){
    total.innerText=textel.value.length
    rem.innerText=textel.getAttribute("maxLength")-textel.value.length
}
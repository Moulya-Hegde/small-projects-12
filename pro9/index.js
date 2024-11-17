
const hour=document.querySelector("#hour")
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
const suffix=document.getElementById("suffix")
function update(){
    const date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ap="AM"
    if(h>12){
        h=h-12;
        ap="PM";
    }
    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    suffix.innerText=ap;
    setTimeout(()=>{
        update();
    },1000)
}
update();
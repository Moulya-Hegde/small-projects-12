const testimonials=[{
    name:"Jane Joe",
    url:"https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"Random"
},{
    name:"Melissa Bourne",
    url:"https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"Random gibber jabber",
}]

const imgel=document.querySelector("img");
const textel=document.querySelector(".text")
const uname=document.querySelector(".username")
let idx=0;
update()
function update(){
    const {name,url,text}=testimonials[idx++];
    imgel.src=url;
    textel.innerText=text;
    uname.innerText=name;
    if(idx===testimonials.length)idx=0;
    setTimeout(()=>{
        update();
    },2000)
}
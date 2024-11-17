const full=new Date();
const date=full.getDate();
const year=full.getFullYear();
const month=full.getMonth();
const day=full.getDay();
const monel=document.getElementById("month")
monel.innerText=full.toLocaleString("en",{month:"long"});

const dayel=document.getElementById("day")
dayel.innerText=full.toLocaleString("en",{weekday:"long"});
const dael=document.getElementById("date")
dael.innerText=date
const yearel=document.getElementById("year")
yearel.innerText=year

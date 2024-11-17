const startel=document.getElementById("start")
const stopel=document.getElementById("stop")
const resetel=document.getElementById("reset")
const timer=document.getElementById("timer")

let interval;
let timeleft=1500

function update(){
    let minutes=Math.floor( timeleft/60)
    let seconds=timeleft%60
    let format=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    timer.innerHTML=format
}
function preloadAudio() {
    audio = new Audio('pomodoro.wav'); // Correct file format
    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
    }).catch(err => {
        console.log('Audio preloaded but not played due to restrictions.');
    });
}
function start_timer(){
    if(timeleft==0){
        startel.disabled=true
        return
    }
    interval=setInterval(()=>{
    timeleft--;
    update();
    if(timeleft==0){
        clearInterval(interval)
        audio.play().catch(err => {
            console.log('Failed to play audio due to restrictions:', err);
        });
        startel.disabled=true
    }
    },1000)
    
}
function stop_timer(){
    clearInterval(interval)
    interval=none
}
function reset_timer(){
    clearInterval(interval)
    timeleft=1500
    update()
    startel.disabled=false
}


startel.addEventListener("click",()=>{
    preloadAudio()
    start_timer()})
stopel.addEventListener("click",stop_timer)
resetel.addEventListener("click",reset_timer)
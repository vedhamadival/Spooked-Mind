let bg= new Audio("./assets/Assets_Audio_creepy.mp3")
bg.play()
bg.loop=true

// window.addEventListener('unload' , function(){
//     Audio.pause();
// })

var playbtn=document.getElementById("play")

playbtn.addEventListener("click", function(){
    window.location.href= "startpage.html";
});


const instruct=document.getElementById("info")
instruct.addEventListener("click",()=>{
    document.getElementById("box").style.display = "block";
    // document.getElementById("game").style.display = "none";
    // document.getElementById("play").style.display = "none";
    // document.getElementById("info").style.display = "none";
});

const skip = document.querySelector(".btn")
skip.addEventListener("click",()=>{
    document.getElementById("box").style.display = "none";
});

// const instruct = document.getElementById("game")
// game.addEventListener('click',()=>{
 
// })


    document.addEventListener("DOMContentLoaded", function () {
        let mainbg=document.getElementById("main-bg")
        mainbg.play();
});


var playbtn=document.getElementById("play")

playbtn.addEventListener("click", function(){
    window.location.href= "startpage.html";
});

const instruct=document.getElementById("info")
instruct.addEventListener("click",()=>{
    document.getElementById("box").style.display = "block";
});

const skip = document.querySelector(".btn")
skip.addEventListener("click",()=>{
    document.getElementById("box").style.display = "none";
});

// const instruct = document.getElementById("game")
// game.addEventListener('click',()=>{
 
// })


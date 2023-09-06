var playbtn=document.getElementById("play")

playbtn.addEventListener('click' , function(){
    window.location.href= "startpage.html";
});

const instruct=document.getElementById("info")
instruct.addEventListener("click",()=>{
    document.getElementById("box").style.display = "block"
})

const skip = document.querySelector(".btn")
skip.addEventListener("click",()=>{
    document.getElementById("box").style.display = "none"
})

console.log(skip)
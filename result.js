var playagainbtn=document.getElementById("play-again-button")
playagainbtn.addEventListener('click' , function(){
    window.location.href="startpage.html";
})

// var playbtn=document.getElementById("play-again-level")
// playagainbtn.addEventListener('click' , function(){
//     window.location.href="startpage.html";
// })

var flipscore=document.getElementById("flip")
flipscore.innerText=localStorage.getItem("flips")
console.log(flips);

window.addEventListener("load", function () {
    const loseAudio = document.getElementById("loseAudio");
    loseAudio.play();
  })

window.addEventListener("load", function () {
    const winAudio = document.getElementById("winAudio");
    // Play the audio
   winAudio.play();
  })



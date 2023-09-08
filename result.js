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
    
    // You can adjust audio settings, such as volume, here if needed
    // loseAudio.volume = 0.5; // Set volume to 50%
    
    // Play the audio
    loseAudio.play();
  })

  
window.addEventListener("load", function () {
    const winAudio = document.getElementById("winAudio");
    
    // You can adjust audio settings, such as volume, here if needed
    // loseAudio.volume = 0.5; // Set volume to 50%
    
    // Play the audio
   winAudio.play();
  })


//   // Array of winning phrases
// const winningPhrases = [
//     "Congratulations! You've escaped the Mansion!",
//     "You're a champion! Victory is yours!",
//     "Impressive! You've emerged victorious!",
// ];

// // Array of losing phrases
// const losingPhrases = [
//     "Oh no! You couldn't escape the mansion.",
//     "stuck in here Forever",
//     "The ghouls got the best of you this time.",
// ];

// function getRandomPhrase(phraseArray) {
//     const randomIndex = Math.floor(Math.random() * phraseArray.length);
//     return phraseArray[randomIndex];
// }

// let winningPhrase= getRandomPhrase();
// let losingPhrase =getRandomPhrase();

// console.log(winningPhrase)
// console.log(losingPhrase)

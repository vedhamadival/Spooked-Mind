const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard=false;
let flippedcards=0;
let totalcards=16;
let flips=0;
let Highscore;


let bgm= new Audio("./assets/Assets_Audio_creepy.mp3");
// let bgm= new Audio("./assets/spooked-164545.mp3");
bgm.play();
bgm.loop=true;
let flipsnd=new Audio("./assets/Assets_Audio_flip.wav");
let wrngsnd=new Audio("./assets/boo-and-laugh-7060.mp3");
let lose=new Audio("./assets/possessed-horror-voice-you-are-not-safe-vol-001-141760.mp3");

function flipCard(){
    flipsnd.play();
    flips++;
    localStorage.setItem("flips",flips);
   if(lockboard) return;
    this.classList.add('flip');
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
       return;
     }
     secondCard = this;
     hasFlippedCard = false;
     checkForMatch();
     gameover();
}

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }
   unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   flippedcards+=2;
 }

 function unflipCards() {
    wrngsnd.play();
    lockboard=true;
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
     lockboard=false;
   }, 500);
 }

(function shuffle() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
})();

 cards.forEach(card => card.addEventListener('click', flipCard));

function gameover(){
 if (flippedcards == totalcards)
  window.location.href="win.html";
 }

 let time=60;
 function updatetimer(){
    if(time<=0){
        window.location.href = "lost.html";
        lose.play();
    }
    else{
        time--
        document.getElementById("time").innerText = time;
    }
}
setInterval(updatetimer,300)
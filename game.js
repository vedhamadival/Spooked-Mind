const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard=false;
let flippedcards=0;
let totalcards=12;
let flips=0;

// let LeastFlips = Infinity;

let bgm= new Audio("./assets/Assets_Audio_creepy.mp3");
bgm.play();
bgm.loop=true;
let flipsnd=new Audio("./assets/Assets_Audio_flip.wav");
let wrngsnd=new Audio("./assets/boo-and-laugh-7060.mp3");
let lose=new Audio("./assets/possessed-horror-voice-you-are-not-safe-vol-001-141760.mp3");

//Flip the Card and add a class flip to the card that is clicked
function flipCard(){
  flipsnd.play();
  flips++;
  localStorage.setItem("flips",parseInt(flips/2));
  if(lockboard) return;
  this.classList.add('flip');
  if (!hasFlippedCard){
    hasFlippedCard = true;
    //the card clicked will be added to the firstcard
    firstCard = this;
    return;
  }
  //the secondcard clicked will be added to the secondcard
  secondCard = this;
  hasFlippedCard = false;
  checkForMatch();
     gameover();
}


//checking if the cards match
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
setInterval(updatetimer,1000)


if (flips < LeastFlips) {
  LeastFlips = flips; // Update LeastFlips with the new lowest value
  localStorage.setItem("LeastFlips", LeastFlips); // Store the lowest flips in localStorage
}
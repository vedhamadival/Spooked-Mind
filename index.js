let bgmusic= new Audio("./assets/spooked-164545.mp3");
bgmusic.play();


const done = document.getElementById("submit")
done.addEventListener("click",()=>{
});

const easy = document.getElementById("easy")
easy.addEventListener("click",()=>{
    window.location.href="easylvl.html";
    console.log("clicked");
});

const difficult = document.getElementById("difficult")
difficult.addEventListener("click",()=>{
    window.location.href="Difficultlvl.html";
    console.log("clicked");
});


var text= document.getElementById("nickname")
   localStorage.setItem("NickName" , text.value);
var storedNickname = localStorage.getItem("nickname");
   
   if (storedNickname) {
       text.value = storedNickname;
   }
   

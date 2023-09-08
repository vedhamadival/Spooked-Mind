let bgmusic= new Audio("./assets/spooked-164545.mp3");
bgmusic.play();

// bgm.loop=true

// window.addEventListener('unload' , function(){
//     Audio.pause();
// })

var Nickname={} //Javascript object
var text= document.getElementById("nickname")

//add bgm
function StoreInput(){
    var Inputval =text.value;
    Nickname.Value=Inputval;
    text.value="";
}

const done = document.getElementById("submit")
done.addEventListener("click",()=>{
    console.log(Nickname);
    StoreInput();
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

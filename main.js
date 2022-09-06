const fadeArray = ['https://images2.alphacoders.com/123/1237510.jpg', "https://cdn.oneesports.gg/cdn-data/2022/04/Valorant_Fade_Splash_Art.jpg"];

const scoreId = document.querySelector("#score");
let score = 0;

function addScore() {
  score++;    // score++ means score=score+1
  scoreId.innerText = score;
  console.log(Math.random())
}
const fades = document.querySelector("#fades");
fades.addEventListener("click", addScore);

function moveFades(){
  fades.style.top = Math.random()*500+'px';
  fades.style.left = Math.random()*1300+'px'

  var randomNum = Math.floor(Math.random()*fadeArray.length);
  var newFade = fadeArray[randomNum];

  fades.src = newFade;
}
setInterval(moveFades,1000);

function gameOver() {
	document.querySelector("#gameOver").style.display = 'block';
	fades.style.display = 'none';
}

setTimeout(gameOver,20000);
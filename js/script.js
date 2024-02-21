

function playStart() {
  const alpha = getRandomAlpha().toLowerCase();
  const currentAlpha = document.getElementById('current-alphabet');
  currentAlpha.innerText = alpha.toUpperCase();
  setBgById(alpha);

}



let isGamePlay = false;
let life = 5;
let count = 0;
const audio = new Audio();
document.addEventListener('keyup', function (event) {
  const keyPressed = event.key;
  if (isGamePlay == false) {
    return;
  }
  const currentElement = document.getElementById('current-alphabet');
  const currentAlpha = currentElement.innerText.toLowerCase();

  if (keyPressed === currentAlpha) {
    audio.src = "../audio/succes.mp3";
    audio.play();
    count++;
    setInnerTextById('score', count);
    removeBgById(keyPressed);
    playStart();


  }

  else {
    audio.src = "../audio/error.mp3";
    audio.play();
    life--;
    let restLife = getInnerTextById('life');
    setInnerTextById("life", life);

    if (life < 1) {
      isGamePlay = false;
      hideContentById('play-ground');
      showContentById('third-section');
      let totalScore = getInnerTextById('total-score')
      setInnerTextById('total-score', count);

    }
  }
})





const startButton = document.getElementById('play-now');

startButton.addEventListener('click', function () {
  isGamePlay = true;
  playStart();
  hideContentById('home-page');
  showContentById('play-ground');
})



const playAgainBtn = document.getElementById('play-again');
playAgainBtn.addEventListener('click', function () {
  playStart();
  location.reload();
})
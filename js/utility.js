function getElementById(elementId) {
  const element = document.getElementById(elementId);
  return element;
}


function getInnerTextById(elementId) {
  const element = document.getElementById(elementId).innerText;

  return element;
}


function setInnerTextById(elementId, value2) {
  document.getElementById(elementId).innerText = value2;

}



function setBgById(elementId) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = '#FFA500';

}
// setBgById('play-now');


function removeBgById(elementId) {
  const element = document.getElementById(elementId);
  element.style.background = 'aliceblue';
}



function showContentById(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = 'block';
}


function hideContentById(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = 'none';
}

function getRandomAlpha() {
  const text = 'abcdefghijklmnopqrstuvwxyz';
  const arr = text.split('');
  const randomNum = Math.random() * 25;
  const number = Math.round(randomNum);
  const randomAlphabet = arr[number].toUpperCase();
  return randomAlphabet;
}







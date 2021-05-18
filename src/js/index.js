import colors from './data-colors.js';

const startBtnEl = document.querySelector('.js-startBtn');
const stopBtnEl = document.querySelector('.js-stopBtn');
const bodyEl = document.querySelector('body');
const maxColorIndex = colors.length - 1;
let isColorChangeOn = false;
let colorChangeIntervalId = null;


startBtnEl.addEventListener('click', onStartClicked);


function onStartClicked() {
    btnDisabledToggle()

    colorChange();

    startBtnEl.removeEventListener('click', onStartClicked);
    stopBtnEl.addEventListener('click', onStopClicked);

}

function onStopClicked() {
    clearInterval(colorChangeIntervalId);

    btnDisabledToggle()

    startBtnEl.addEventListener('click', onStartClicked);
    stopBtnEl.removeEventListener('click', onStopClicked);

}

function btnDisabledToggle() {
    startBtnEl.classList.toggle('disabled');   
    stopBtnEl.classList.toggle('disabled');
}

function colorChange() {
    colorChangeIntervalId = setInterval(() => {
        const colorIndex = randomIntegerFromInterval(0, maxColorIndex);
        bodyEl.style.backgroundColor = colors[colorIndex];
    }, 1000)
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
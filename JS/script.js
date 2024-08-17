let startTime, updateTime;
let running = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

function start() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        updateTime = setInterval(update, 1000);
    }
}

function pause() {
    if (running) {
        running = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(updateTime);
    }
}

function reset() {
    running = false;
    clearInterval(updateTime);
    elapsedTime = 0;
    display.textContent = '00:00:00';
}

function update() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

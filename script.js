let timerDisplay = document.getElementById("timer-display");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let secondSound = document.getElementById("second-sound");
let buzzerSound = document.getElementById("buzzer-sound");

let time = 0; // Time in seconds
let timerInterval;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
		//secondSound.play();
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
	secondSound.pause();
	buzzerSound.play();
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 0;
    isRunning = false;
    timerDisplay.textContent = "00:00";
    timerDisplay.classList.remove("countdown");
}

function updateTimer() {
    time++;
    
    // Play second sound every second
    secondSound.play();
    // Play buzzer sound every 30 seconds
    if (time % 30 === 0) {
        buzzerSound.play();
    }

    // Display the time
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;

    // Countdown effect for the last 10 seconds of each 30-second period
    if (seconds >= 20 && seconds < 30) {
        timerDisplay.classList.add("countdown");
    } else {
        timerDisplay.classList.remove("countdown");
    }
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Button event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

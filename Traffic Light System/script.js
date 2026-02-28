let interval;
let timeLeft;
let current = 0;

const lights = document.querySelectorAll(".light");
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");
const car = document.getElementById("car");

function runSignal(duration, nextState, text) {

    timeLeft = duration;
    statusDisplay.innerText = text;
    timerDisplay.innerText = "Timer: " + timeLeft;

    interval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(interval);
            current = nextState;
            changeLight();
        }
    }, 1000);
}

function changeLight() {

    lights.forEach(light => light.classList.remove("active"));
    car.classList.remove("moveCar");

    if (current === 0) {
        lights[0].classList.add("active");
        runSignal(5, 1, "🔴 STOP");
    }
    else if (current === 1) {
        lights[1].classList.add("active");
        runSignal(2, 2, "🟡 READY");
    }
    else {
        lights[2].classList.add("active");
        runSignal(5, 0, "🟢 GO");
        car.classList.add("moveCar");
    }
}

function startSignal() {
    changeLight();
}

function stopSignal() {
    clearInterval(interval);
    lights.forEach(light => light.classList.remove("active"));
    timerDisplay.innerText = "Timer: 0";
    statusDisplay.innerText = "Signal Stopped";
    car.classList.remove("moveCar");
}

function toggleMode() {
    document.body.classList.toggle("night");
}
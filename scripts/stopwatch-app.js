
let timer = {
  hour: 0,
  minutes: 0,
  seconds: 0,
};

let Intervalid;
let isRunning = false;
let displayElement = document.querySelector(".js-displayTime");

document
  .querySelector(".js-startButton")
  .addEventListener("click", () => {
    stopWatch("start");
  });
document
  .querySelector(".js-resetButton")
  .addEventListener("click", () => {
    timer.hour = 0;
    timer.minutes = 0;
    timer.seconds = 0;
    displayElement.innerHTML = "00:00:00";
  });
document.querySelector(".js-stopButton").addEventListener("click", () => {
  stopWatch("stop");
});

function stopWatch(action) {
  if (action === "start") {
    intervalid = setInterval(() => {
      if (timer.seconds === 59) {
        timer.seconds = 0;
        //timer.seconds++;
      } else {
        timer.seconds++;
      }

      if (timer.seconds === 0) {
        timer.minutes++;
      }
      if (timer.minutes === 60) {
        timer.minutes = 0;
      }

      if (timer.minutes === 0 && timer.seconds === 0) {
        timer.hour++;
      }

      if (timer.seconds < 10 && timer.minutes < 10 && timer.hour < 10) {
        displayElement.innerHTML = `0${timer.hour}:0${timer.minutes}:0${timer.seconds}`;
      } else if (
        timer.seconds >= 10 &&
        timer.minutes < 10 &&
        timer.hour < 10
      ) {
        displayElement.innerHTML = `0${timer.hour}:0${timer.minutes}:${timer.seconds}`;
      } else if (
        timer.seconds >= 10 &&
        timer.minutes >= 10 &&
        timer.hour < 10
      ) {
        displayElement.innerHTML = `0${timer.hour}:${timer.minutes}:${timer.seconds}`;
      } else if (
        timer.seconds >= 10 &&
        timer.minutes >= 10 &&
        timer.hour < 10
      ) {
        displayElement.innerHTML = `0${timer.hour}:${timer.minutes}:${timer.seconds}`;
      } else if (
        timer.seconds >= 10 &&
        timer.minutes >= 10 &&
        timer.hour >= 10
      ) {
        displayElement.innerHTML = `${timer.hour}:${timer.minutes}:${timer.seconds}`;
      } else {
        displayElement.innerHTML = `${timer.hour}:${timer.minutes}:${timer.seconds}`;
      }
    }, 1000);
  }
  if (action === "stop") {
    clearInterval(intervalid);
  }
}

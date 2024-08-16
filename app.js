// Задание 1
let i = 1;
const message = setInterval(() => {
  console.log("Сообщение номер " + i);
  i = i + 1;
}, 2000);

setTimeout(() => clearInterval(message), 11000);

//Задание 2

function renderTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours == 0) {
    hours = 24;
  } else if (hours > 24) {
    hours = hours - 24;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + m;
  }
  if (seconds < 10) {
    seconds = "0" + s;
  }
  let myClock = document.getElementById("clockDisplay");
  myClock.textContent = hours + ":" + minutes + ":" + seconds + " ";
  setTimeout("renderTime()", 1000);
}
renderTime();

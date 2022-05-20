const button = document.querySelector(".btn");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const count = document.getElementById("count");

const setCounter = (seconds) => {
  let countValue = seconds;
  count.innerText = countValue;
  setInterval(() => {
    if (countValue > 0) {
      countValue--;
      count.innerText = countValue;
      console.log(countValue);
    }
  }, 1000);
};

button.addEventListener("click", () => {
  setCounter(3);
  setTimeout(() => {
    stop.className = "light-stop-off light";
    start.className = "light-walk-on light";
    setTimeout(() => setCounter(5), 1000);
    setTimeout(() => {
      stop.className = "light-stop-on light";
      start.className = "light-walk-off light";
    }, 6000);
  }, 3000);
});

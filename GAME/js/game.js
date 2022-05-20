const hero = document.querySelector(".hero");
let topValue = 0;
let leftValue = 0;
hero.style.top = topValue + "px";
hero.style.left = leftValue + "px";

console.log(hero.style.top);

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      if (leftValue <= 700 && leftValue > 0) {
        leftValue = leftValue - 100;
        hero.style.left = leftValue + "px";
      }

      break;
    case "ArrowUp":
      if (topValue <= 500 && topValue > 0) {
        topValue = topValue - 100;
        hero.style.top = topValue + "px";
      }

      break;
    case "ArrowRight":
      if (leftValue < 700) {
        leftValue = leftValue + 100;
        hero.style.left = leftValue + "px";
      }

      break;
    case "ArrowDown":
      if (topValue < 500) {
        topValue = topValue + 100;
        hero.style.top = topValue + "px";
      }
      break;
  }
};

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

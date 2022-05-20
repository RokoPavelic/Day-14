const data = [
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
    "London",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
    "New York",
  ],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
    "Nova Scotia",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
    "Venice",
  ],
];

containter = document.querySelector(".gallery");

let pictureData = data[0];

for (let index = 0; index < data.length; index++) {
  pictureData = data[index];
  containter.innerHTML =
    containter.innerHTML +
    `
    <div class="image">
        <img src="` +
    pictureData[0] +
    `" alt="London">
        <div class="image__description">` +
    pictureData[1] +
    `</div>
    </div>
    `;
}
const heading = document.getElementById("heading");

let object = { name: "roko", lastname: "pavelic" };

for (let value in object) {
  heading.innerHTML = `${value}: ${object[value]}`;
}

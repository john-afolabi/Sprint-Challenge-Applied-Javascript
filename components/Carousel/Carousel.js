/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComp() {
  const carousel = document.createElement("div");
  const leftbutton = document.createElement("div");
  const img = document.createElement("img");

  const rightbutton = document.createElement("div");

  const imgArray = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];

  let index = 0;
  img.src = imgArray[index];

  leftbutton.textContent = "<";
  rightbutton.textContent = ">";

  carousel.append(leftbutton, img, rightbutton);

  carousel.classList.add("carousel");
  leftbutton.classList.add("left-button");
  rightbutton.classList.add("right-button");
  img.style.display = "block";

  rightbutton.addEventListener("click", event => {
    if (index < 3) {
      index++;
      img.src = imgArray[index];
    } else {
      index = -1;
    }
  });

  leftbutton.addEventListener("click", event => {
    if (index < 1) {
      index = 4;
    } else {
      index--;
      img.src = imgArray[index];
      img.classList.toggle("fade-in");
    }
  });

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(carouselComp());

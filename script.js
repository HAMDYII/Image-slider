const images = Array.from(document.querySelectorAll(".image"));

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const bulletsContainer = document.querySelector(".bullet-container");

let currentImageIndex = 0;
let currentImage = images[currentImageIndex];

currentImage.classList.add("active");
next.addEventListener("click", () => {
  currentImage.classList.remove("active");
  currentImageIndex++;
  currentImage = images[currentImageIndex];
  currentImage.classList.add("active");
  activeBullet();
  previous.classList.remove("done");
  if (currentImageIndex === 5) {
    next.classList.add("done");
  }
});

previous.addEventListener("click", () => {
  currentImage.classList.remove("active");
  currentImageIndex--;
  currentImage = images[currentImageIndex];
  currentImage.classList.add("active");
  activeBullet();
  if (currentImageIndex === 0) {
    previous.classList.add("done");
  }
  next.classList.remove("done");
});

const checkLowestIndex = () => {
  if (currentImageIndex === 0) {
    previous.classList.add("done");
  }
};
checkLowestIndex();

const checkMaxIndex = () => {
  if (currentImageIndex === 5) {
    next.classList.add("done");
  }
};
checkMaxIndex();

const bulletsMaker = () => {
  let i = 0;
  images.forEach((image) => {
    let bullet = document.createElement("li");
    bullet.classList.add(`bullet`);
    bullet.setAttribute("id", i);
    bulletsContainer.appendChild(bullet);
    i++;
  });
};
bulletsMaker();

const bullets = document.querySelectorAll(".bullet");

const activeBullet = () => {
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
    if (bullet.id == currentImageIndex) {
      bullet.classList.add("active");
    }
  });
};
activeBullet();

const handleBulletClick = () => {
  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      bullets.forEach((bullet) => {
        bullet.classList.remove("active");
      });
      images.forEach((image) => {
        image.classList.remove("active");
      });
      currentImageIndex = bullet.id;
      currentImage = images[currentImageIndex];
      currentImage.classList.add("active");
      if (currentImageIndex >= 5) {
        next.classList.add("done");
      } else {
        next.classList.remove("done");
      }
      if (currentImageIndex <= 0) {
        previous.classList.add("done");
      } else {
        previous.classList.remove("done");
      }
      console.log(currentImageIndex + "this is current  image index");
      console.log(bullet.id + "this is bullet id");
      console.log(currentImage);
      bullet.classList.add("active");
    });
  });
};
handleBulletClick();

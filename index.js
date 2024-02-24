// //array, photo database

let items = [
  { id: "hiking", src: "images/image-2.jpg", alt: "hiking shoes" },
  { id: "lifestyle", src: "images/image-1.jpg", alt: "hiking shoes" },
  { id: "golf", src: "images/image-3.jpg", alt: "golf shoes" },
  { id: "basketball", src: "images/image-4.jpg", alt: "basketball shoes" },
  { id: "hiking", src: "images/image-2.jpg", alt: "hiking shoes" },
  { id: "lifestyle", src: "images/image-1.jpg", alt: "hiking shoes" },
  { id: "golf", src: "images/image-3.jpg", alt: "golf shoes" },
  { id: "basketball", src: "images/image-4.jpg", alt: "basketball shoes" },
];

// //tape of slider, flex-container
let gallery = document.querySelector("#gallery");

items.forEach((item) => {
  let image = document.createElement("img");
  image.id = item.id;
  image.className = "slider__item";
  image.src = item.src;
  image.alt = item.alt;

  gallery.appendChild(image);
});

// buttons;
let btnPrev = document.querySelector("#btn-prev");
let btnNext = document.querySelector("#btn-next");

let images = gallery.childNodes;

function nextSlide() {
  images.forEach((image, index) => {
    if (index === 0) {
      gallery.appendChild(image);    
    }
  });
}

function prevSlide() {
  images.forEach((image, index) => {
    if (index === images.length - 1) {
      gallery.prepend(image);     
    }
  });
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);


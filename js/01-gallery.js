import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (galleryItem) => `<div class='gallery__item'>
    <a class='gallery__link' href='${galleryItem.original}'>
    <img
    class='gallery__image'
    src='${galleryItem.preview}'
    data-source='${galleryItem.original}'
    alt='${galleryItem.description}'/>
    </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onImgClick);

function onImgClick(e) {
  const isImgEl = e.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }

  e.preventDefault();

  const img = basicLightbox.create(
    `<img class='modalImg' src='${e.target.dataset.source}' alt='${e.target.alt}'>`
  );

  img.show();

  document.addEventListener("keydown", modalEscClose);

  function modalEscClose(e) {
    e.preventDefault();

  if (e.code === "Escape") {
      img.close();
      document.removeEventListener("keydown", modalEscClose);
      return;
    }
  }
}
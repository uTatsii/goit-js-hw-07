import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

let modalImg = null;

const galleryMarkup = galleryItems
  .map(
    ({original, preview, description}) => `<div class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img
    class='gallery__image'
    src='${preview}'
    data-source='${original}'
    alt='${description}'/>
    </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", openModalImg);

function openModalImg(e) {
  const isImgEl = e.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }

  e.preventDefault();

  modalImg = basicLightbox.create(
    `<img src='${e.target.dataset.source}' alt='${e.target.alt}'>`
  );

  modalImg.show();
  
  document.addEventListener("keydown", modalEscClose);
}

function modalEscClose(e) {
  if (e.code === "Escape") {
    modalImg.close();
    document.removeEventListener("keydown", modalEscClose);
    return;
  }
}
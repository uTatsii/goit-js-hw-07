import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (galleryItem) => `<div class='gallery__item'>
<img class='gallery__image' src='${galleryItem.preview}' 
alt='${galleryItem.description}'/></div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener('click', onImgClick);

function onImgClick(e) {
    if (e.target.classList === 'gallery') {
        return;
    }

  const currentImgIndex = galleryItems.findIndex(
    (item) => item.description === e.target.alt
  );
  
  e.target.src = galleryItems[currentImgIndex].original;

  const instance = basicLightbox.create(`<img src='${e.target.src}'>`);

  instance.show();
}


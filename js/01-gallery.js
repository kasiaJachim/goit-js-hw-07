"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class = 'gallery__item'> 
        <a class = 'gallery__link' href ='${original}'>
<img class ='gallery__image' src='${preview}' data-source ='${original}'
alt='${description}'/>
</a></div>`
);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", markup.join(""));
gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );
  instance.show();
  if (instance.visible()) {
    window.addEventListener("keydown", escKeyPress);

    function escKeyPress(event) {
      if (event.code !== "Escape") {
        return;
      }
      instance.close();
    }
  }
}

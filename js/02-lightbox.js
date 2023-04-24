import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li> 
        <a class = 'gallery__item' href ='${original}'>
<img class ='gallery__image' src='${preview}'
alt='${description}'/>
</a></li>`
);

gallery.insertAdjacentHTML("afterbegin", markup.join(""));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

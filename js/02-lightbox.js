import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryFun = createImg(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryFun);

function createImg(galleryItems) {
    const imgElem = galleryItems
        .map(({ preview, original, description }) => {
            return `<li classs="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>    
            </li>`;
        })
        .join('');
    
    return imgElem
};

var gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
    // do do
});



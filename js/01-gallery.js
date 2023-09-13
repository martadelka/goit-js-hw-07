import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const renderedImg = (arr, container) => {
    const markup = arr.map((item) => `<li classs="gallery__item">
    <a class=".gallery__link">
    <img
    class="gallery__image"
    src='${item.preview}'
    alt='${item.description}'
    data-source='${item.original}'/>
    </a>
    </li>`).join('');

    container.insertAdjacentHTML('afterbegin', markup)
}

renderedImg(galleryItems, galleryList);

function openModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <div class='modal'>
        <img src="${event.target.dataset.source}" width='800' height='600'>
    </div>
`)

instance.show()

    window.addEventListener('keydown', closeModalOnEsc);

    function closeModalOnEsc(event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', closeModalOnEsc)
    }
}
}


galleryList.addEventListener('click', openModal);
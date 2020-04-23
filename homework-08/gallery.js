'use strict'

import images from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    modalButton: document.querySelector('.lightbox__button'),
    modalContent: document.querySelector('.lightbox__content'),
    modalNext: document.querySelector('.next'),
    modalPrev: document.querySelector('.prev'),
};

refs.gallery.addEventListener('click', handleImageClick);
refs.modalButton.addEventListener('click', handleClose);
refs.modalContent.addEventListener('click', handleOverlay);
refs.modalNext.addEventListener('click', handleNext);
// refs.modalPrev.addEventListener('click', handlePrev);


function handleImageClick(event) {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
        refs.modal.classList.add('is-open');
        refs.modalImage.src = event.target.dataset.source;
        window.addEventListener('keydown', handleKeyPress);
    }
};

function handleClose(event) {
    refs.modal.classList.remove('is-open');
    refs.modalImage.src = '';
    window.removeEventListener('keydown', handleKeyPress);
};

function handleOverlay(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    handleClose();
};

function handleKeyPress(event) {
    if (event.code !== 'Escape') {
        return;
    }
    handleClose();
};

function handleNext(event) {
    for (let i = 0; i < images.length; i += 1) {
        refs.modalImage.src[i] = refs.modalImage.src[i + 1];
    }
}

const markup = images.map(image =>
    `<li
        class="gallery__item">
    <a 
        class="gallery__link"
        href=${image.original} >
    <img 
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}>
    </a> </li>`
).join('');

refs.gallery.insertAdjacentHTML('beforeend', markup);
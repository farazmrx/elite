"use strict";

const btnOpenModal = document.querySelectorAll('.tailored__boxes--img');
const btnCloseModal = document.querySelector('.close-modal');
const Modal = document.querySelector('.modal');
const Overlay = document.querySelector('.overlay');

const showModal = function() {
    Modal.classList.remove('hidden');
    Overlay.classList.remove('hidden');
};

const hideModal = function() {
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', showModal);
};

btnCloseModal.addEventListener('click', hideModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal();
    }
});
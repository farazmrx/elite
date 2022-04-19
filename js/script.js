"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.services__group');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hiddeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', showModal);
};

btnCloseModal.addEventListener('click', hiddeModal);
overlay.addEventListener('click', hiddeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hiddeModal();
    }
});
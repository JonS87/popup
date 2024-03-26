const modalClose = document.querySelector('.modal__close');
const modalCloseParant = document.querySelector('.modal');
const firstWindow = localStorage.getItem('firstWindow');

if (!firstWindow) {
  modalCloseParant.classList.add('modal_active');

  modalClose.addEventListener('click', () => {
    localStorage.setItem('firstWindow', 'close');
    modalCloseParant.classList.remove('modal_active');
  });
}

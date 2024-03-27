const modalClose = document.querySelector('.modal__close');
const modalCloseParant = document.querySelector('.modal');

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='));
  if (cookie) {
    return cookie.substr(name.length + 1);
  } else {
    return undefined;
  }
}

const firstWindow = getCookie('firstWindow');

if (!firstWindow) {
  modalCloseParant.classList.add('modal_active');

  modalClose.addEventListener('click', () => {
    document.cookie = 'firstWindow=close'; 
    modalCloseParant.classList.remove('modal_active');
  });
}

const $email = document.querySelector('input');
const $form = document.querySelector('form');
const $inputAfter = document.querySelector('.input-after');
const $iconError = document.querySelector('.icon-error');
let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

$form.addEventListener('submit', e => {
  e.preventDefault();
  $inputAfter.classList.remove('visible');
  $email.classList.remove('invalid');
  $iconError.classList.remove('visible');
  $form.reset();
});

$email.addEventListener('invalid', e => {
  e.preventDefault();
  $email.classList.add('invalid');
  $inputAfter.classList.add('visible');
  $iconError.classList.add('visible');
});

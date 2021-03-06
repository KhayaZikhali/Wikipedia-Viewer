import 'bootstrap/dist/css/bootstrap.min.css';

const inputElement = document.querySelector('input');

inputElement.addEventListener('keyup', (event) => {
  console.log('value:', event.target.value);
});
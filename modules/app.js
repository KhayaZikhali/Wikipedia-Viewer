const inputElement = document.querySelector('.search-bar');

inputElement.addEventListener('keyup', (event) => {
  console.log('value:', event.target.value);
  const api = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search={event.target.value}`
    document.addEventListener('keyup', (e) => {
       // Get random article
// get random word
    if (e.key ===  "Enter"){
        window.location.href = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=bears";
     }
    })
});

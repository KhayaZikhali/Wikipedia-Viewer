/* const api = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=`;
fetch(api)
.then(response => {response.json()})
.then(data => {
  console.log(data)
})
let  userInput = document.querySelector('.search-bar');

function setup(){
  noCanvas();
  userInput = select(userInput);
  userInput.changed(goWiki);
  goWiki()


function goWiki(){
  let term = userInput.value();
  console.log(term)
} 
}
*/
/* 
let userInput;

 function setup(){
   noCanvas();
   userInput = select('.search-bar');
   userInput.changed(goWiki);
   goWiki();

 function goWiki(){
   let term = userInput.value();
   console.log(term) 
  }
 }
 */

let link = document.querySelector('p'); 
let  userInput = document.querySelector(".search-bar");
let resultsbar = document.querySelector(".result-bar");

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter"){
    search(userInput.value);
  }
})

function search(input){
// move the search bar to the final position
userInput.classList.add("results")
resultsbar.classList.add("after")
link.style.display = "none";
var url = "https://en.wikipedia.org/w/api.php"; 
var params = {
    action: "query",
    list: "search",
    srsearch: input ,
    format: "json"
};
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(data => {
      console.log(data.query.search)
      for ( x in data.query.search){
        console.log(x)
        //for every result create a div with 
        const result = document.createElement('div')
        resultsbar.append(result)
        result.classList.add("result")
        const paragraph = document.createElement('p')
        result.textContent = data.query.search[x].title
        paragraph.textContent =  data.query.search[x].snippet.replace(/<\/?[^>]+>/gi,'')
        result.onclick = () => {

        }
        result.appendChild(paragraph)

      }
    })

    .catch(function(error){console.log(error);});
}

//create a create function
createCard = () => {
  // title of the card
  const result = document.createElement('div')
  result.classList.add("result")
  const paragraph = document.createElement('p')
  const link = document.createElement('p')
  result.textContent = data.query.search[1].title
  paragraph.textContent =  data.query.search[1].snippet
  // th snippet 
  // the link 
} 
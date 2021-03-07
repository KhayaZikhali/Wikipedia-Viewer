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

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter"){
    console.log(userInput.value);
    search(userInput.value);
  }
})

function search(input){
// move the search bar to the final position
userInput.classList.add("results")
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
      }
    })

    .catch(function(error){console.log(error);});
}
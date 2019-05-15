var button = document.querySelector('button');
var title = document.querySelector('h2');

button.addEventListener("click", createQuote);

var previousQuote;

var quotes = [ "Research local legislation about the environment", "Look up an Environmental Justice  (EJ) Group near you", "Research ecofeminism", "Check out the latest Intergovernmental Panel on Climate Change (IPCC) report" , "Look up Environmental Youth Activists"]

function createQuote() { 
  var result = Math.floor(Math.random() * quotes.length);
  if (result === previousQuote) {
    createQuote();
    return;
  }
  title.innerText = quotes[result];
  previousQuote = result;
}
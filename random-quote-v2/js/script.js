// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {  quote: "Don't cry because it's over, smile because it happened.", 
     source: "Dr. Seuss", 
     citation: "Goodreads" 
  },
  {  quote: " I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
     source: "Marilyn Monroe", 
     citation: "Goodreads" 
  },
  {  quote: "Be yourself; everyone else is already taken.", 
     source: "Oscar Wilde", 
     citation: "Goodreads" 
  }
];


function getRandomQuote() {

  var randomQuoteNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteNum];

}

function printQuote() {
  var randomQuote = getRandomQuote();
    var html ="<p class=\"quote\">"+randomQuote.quote+"</p><p class=\"source\">"+randomQuote.source+"";
  if (randomQuote.citation != undefined) 
   html+="<span class=\"citation\">"+randomQuote.citation+"</span>";
  if (randomQuote.year != undefined) 
    html+="<span class=\"year\">"+randomQuote.year+"</span></p>";
document.getElementById('quote-box').innerHTML = html;
}

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuetoBtn = document.getElementById("new-quote");


//Show New Quote
function newQueto() {
  //Pick a random quote from apiQuotes array
  const quote = localQuotes[0];
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //Check if author exists
  authorText.textContent = quote.author || "dummy" ;

  quoteText.textContent = quote.text;
}

newQueto()
// // Get Quotes from API
// async function getQuotes() {
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQueto();
//   } catch (error) {
//     // Cath Error Here
//   }
// }

//On Load
// getQuotes();

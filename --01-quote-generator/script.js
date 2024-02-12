const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuetoBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];


function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//Show New Quote
function newQueto() {
  showLoadingSpinner();
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if author is black replace it with 'Unknown'
  authorText.textContent =
    quote.author.replace("type.fit", "").replace(", ", "").trim() || "Unknown";
  //Check quote length to determinate styling
  if (quoteText.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  // setInterval(() => {
  //   complete();
  // }, 500);
  removeLoadingSpinner();
}

// Get Quotes from API
async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQueto();
  } catch (error) {
    // Cath Error Here
  }
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event Listeners
newQuetoBtn.addEventListener("click", newQueto);
twitterBtn.addEventListener("click", tweetQuote);

//On Load
getQuotes();

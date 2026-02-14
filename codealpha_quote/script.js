const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = `"${quotes[random].text}"`;
  authorEl.textContent = `— ${quotes[random].author}`;
}

// show random quote on page load
newQuote();

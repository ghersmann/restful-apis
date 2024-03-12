// Quote App

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const main = document.querySelector("main");
const btn = document.querySelector("#btn");

btn.addEventListener("click", loadQuote);

function loadQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const magicalQuote = document.createTextNode(data.quote);
      const magicalAuthor = document.createTextNode("- " + data.author);
      quote.innerText = magicalQuote.nodeValue;
      author.innerText = magicalAuthor.nodeValue;
    });
}

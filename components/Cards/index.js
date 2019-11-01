// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const cardContainer = document.querySelector(".cards-container");
    for (const key in response.data.articles) {
      response.data.articles[key].forEach(article => {
        cardContainer.append(articleCard(article));
      });
    }
  })
  .catch(error => {
    alert("API Error");
  });

function articleCard(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const footer = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.append(headline, author);
  author.append(imgContainer, footer);
  imgContainer.append(img);

  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  footer.textContent = obj.authorName;

  return card;
}

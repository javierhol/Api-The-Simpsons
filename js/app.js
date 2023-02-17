const btnGenerateCard = document.getElementById("btn-generate-card");

const getCharacter = async () => {
  const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
  const data = await fetch(URL);
  const responseData = await data.json();

  createCard(responseData);
};

const createCard = (character) => {
  console.log(character[0].image);
  const card = document.getElementById("container-card");
  card.innerHTML = "";
  const imageCard = document.createElement("img");
  const hr = document.createElement("hr");
  const name = document.createElement("h2");
  const quote = document.createElement("p");

  card.classList.add("container-card");
  imageCard.classList.add("img-card");
  hr.classList.add("hr-line");
  imageCard.src = character[0].image;
  imageCard.alt = "The simpson";
  name.textContent = character[0].character;
  console.log(name);
  name.classList.add("nameCharacter");
  quote.textContent = character[0].quote;
  quote.classList.add("quoteCharacter");

  card.appendChild(imageCard);
  card.appendChild(hr);
  card.appendChild(name);
  card.appendChild(quote);
};

btnGenerateCard.addEventListener("click", getCharacter);

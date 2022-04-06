const BASE_URL =
  "https://opentdb.com/api.php?amount=10";

const main = document.querySelector('main');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((addArticle))
    .catch((error) => {
      console.log(error)
        })
})

const addArticle = (triviaQuestion) => {
  triviaQuestion.results.forEach(eachQuestion => {
      const article = document.createElement('article');
        article.setAttribute('class', 'card');
        main.append(article);
      const heading2 = document.createElement('h2');
        heading2.textContent = `${eachQuestion.category}`
        article.append(heading2);
      const paragraph = document.createElement('p');
        paragraph.textContent = `${eachQuestion.question}`
        article.append(paragraph);
      const button = document.createElement('button');
        button.textContent = "Show Answer";
        article.append(button);
      const paragraph2 = document.createElement('p');
        paragraph2.setAttribute('class', 'hidden');
        paragraph2.textContent = `${eachQuestion.correct_answer}`;
        article.append(paragraph2);

        article.addEventListener("click", (event) => {
          event.preventDefault();
          return paragraph2.classList.remove("hidden")})
    })
} 
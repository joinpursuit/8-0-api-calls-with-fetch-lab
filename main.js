const BASE_URL = `https://opentdb.com/api.php?amount=10`;
const form = document.querySelector(`form`);
const main = document.querySelector(`main`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      res.results.forEach((element) => {
        const article = document.createElement(`article`);
        article.classList.add(`card`)
        const h2 = document.createElement(`h2`);
        h2.innerText = element.category
        const question = document.createElement(`p`);
        question.innerText = element.question
        const button = document.createElement(`button`);
        button.innerText = `Show Answer`
        const answer = document.createElement(`p`);
        answer.innerText = element.correct_answer
        answer.classList.add(`hidden`)
        button.addEventListener(`click`, () => {
            answer.classList.toggle(`hidden`)
        })
        article.append(h2, question, button, answer);
        main.append(article);
      });
    })
    .catch((err) => console.log(err));
});
// console.log(submit)

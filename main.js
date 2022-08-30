const BASE_URL = `https://opentdb.com/api.php?amount=10`;
let urlCategory = ``;
let URL = BASE_URL;

const form = document.querySelector(`form`);
const main = document.querySelector(`main`);
const select = document.querySelector(`select`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  main.innerHTML = ``;
  if (select.value !== `any`) {
    urlCategory = `&category=${select.value}`;
    URL = `${BASE_URL}${urlCategory}`;
  }
  fetch(`${URL}`)
    .then((res) => res.json())
    .then((res) => {
      //   console.log(res.results);
      res.results.forEach((element) => {
        const article = document.createElement(`article`);
        article.classList.add(`card`);
        const h2 = document.createElement(`h2`);
        h2.innerText = element.category;
        const question = document.createElement(`p`);
        question.innerHTML = `${
          element.question
        }</br> <strong>Difficulty</strong>: <em>${element.difficulty
          .charAt(0)
          .toUpperCase()}${element.difficulty.slice(1)}</em>`;
        if (element.difficulty === `medium`) {
          article.style.borderColor = `yellow`;
        } else if (element.difficulty === `hard`) {
          article.style.borderColor = `red`;
        }
        const button = document.createElement(`button`);
        button.innerText = `Show Correct Answer`;
        const answer = document.createElement(`p`);
        answer.innerText = element.correct_answer;
        answer.classList.add(`hidden`);
        // working on adding True/False radio buttons
        // const allAnswers = document.createElement(`div`)
        // if(element.type === `boolean`) {
        //     console.log(`test`)
        //     const buttonTrue = document.createElement(`input`)
        //     buttonTrue.setAttribute(`type`, `radio`)
        //     buttonTrue.setAttribute(`name`, `true-false`)
        //     buttonTrue.setAttribute(`value`, `true`)
        //     const buttonFalse = document.createElement(`input`)
        //     buttonFalse.setAttribute(`type`, `radio`)
        //     buttonFalse.setAttribute(`name`, `true-false`)
        //     buttonFalse.setAttribute(`value`, `false`)
        //     answer.append(buttonTrue, buttonFalse)
        //     answer.classList.remove(`hidden`)
        // }
        button.addEventListener(`click`, () => {
          answer.classList.toggle(`hidden`);
          if (button.textContent === `Show Correct Answer`) {
            button.innerText = `Hide Correct Answer`;
          } else {
            button.innerText = `Show Correct Answer`;
          }
        });
        article.append(h2, question, button, answer);
        main.append(article);
      });
    })
    .catch((err) => console.log(err));
});

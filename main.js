const form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // fetch url has 10 questions built into response(amount=10) so no need to create a loop to limit to ten questions later.
  // for each of the 10 questions in the response, i need to create an article with an h2, button, 2 p tags. parameter(questions) is each trivia question object.

  fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then((questions) => {
      //inspect browser, object.results is where i find the data i need.
      questions.results.forEach((ques) => {
        let article = document.createElement('article');
        let category = document.createElement('h2');
        let question = document.createElement('p');
        let button = document.createElement('button');
        let answer = document.createElement('p');

        article.classList.add('card');
        answer.classList.add('hidden');
        console.log(questions);
        category.textContent = ques.category;
        question.textContent= ques.question;
        button.textContent = 'Show answer';
        answer.textContent = ques.correct_answer;
        article.append(category, question, button, answer)
    // when i click the show answer button, i want the answer textContent to appear. this can be done by removing the "hidden" class. I could use.toggle to hide it again if i click the button once more
        button.addEventListener('click',() =>{
          answer.classList.toggle('hidden')
        })
        main.append(article);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


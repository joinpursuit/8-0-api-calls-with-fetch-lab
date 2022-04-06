//alert("Successfully linked javascript file");

fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then ((json) => {
        cardCreator(json);
        //console.log(json);
    })
    .catch((error) => {
        // You can do what you like with the error here.
        console.log(error);
      });

const main = document.querySelector("main");

function cardCreator ({results}) {
    console.log(results);
    for (let result of results){
        //console.log(result);
        const article = document.createElement("article");
        article.setAttribute("class","card");
        const category = document.createElement("h2");
        const question = document.createElement("p");
        const answerButton = document.createElement("button");
        answerButton.setAttribute("class","answerButton");
        const correctAnswer = document.createElement('p');
        correctAnswer.setAttribute("class","hidden");

        category.textContent=result.category;
        question.textContent=result.question;
        answerButton.textContent="Show Answer";
        correctAnswer.textContent=result.correct_answer;

        article.append(category,question,answerButton,correctAnswer);
        main.append(article);
    }
}

document.addEventListener("click",({target}) => {
    console.log(target); //Making sure the right thing is being accessed
    if (target.className == "answerButton"){
        let showAnswer = target.parentElement.querySelector(".hidden");
        console.log(showAnswer);
        //target.parentElement.children[3].classList.remove("hidden");
        showAnswer.classList.remove("hidden");
    }
  });


/*
<article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/
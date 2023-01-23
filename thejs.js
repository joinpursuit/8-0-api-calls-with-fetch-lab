const triviaUrl = `https://opentdb.com/api.php?amount=10`;

const select = document.querySelector('select');

fetch(triviaUrl)
.then((response) => response.json())
.then((data) => {
    for (let question of data.results) {

        option = document.createElement('option');
        option.textContent = question.question;
        select.appendChild(option);

         document.querySelector('h2').textContent = question.category;
        document.querySelector('.question').textContent = question.question;
        document.querySelector('.hidden').textContent = question.correct_answer;

        for (let incorrectAnswer of question.incorrect_answers) {
            p1 = document.createElement('p');
            p2 = document.createElement('p');
            p3 = document.createElement('p');
            p1.textContent = incorrectAnswer;
            p2.textContent = incorrectAnswer;
            p3.textContent = incorrectAnswer;
        }

        document.querySelector('.answer-btn').addEventListener('click', (event) => {
            event.preventDefault();

            onclick();

        })

        if (question.difficulty === "easy") {
            document.querySelector('.card').style.border = `2px solid blue`;
            document.querySelector('.difficulty').textContent = 'Difficulty: Easy!'
        }

        if (question.difficulty === "hard") {
            document.querySelector('.card').style.border = `2px solid red`;
            document.querySelector('.difficulty').textContent = 'Difficulty: Hard!'
        }

        if (question.difficulty === "medium") {
            document.querySelector('.card').style.border = `2px solid green`;
            document.querySelector('.difficulty').textContent = 'Difficulty: Medium!'
        }
    }

    select.addEventListener('change', (event) => {
        event.preventDefault();

        for (let question of data.results) {
            if (textContent = select.options[select.selectedIndex].value === question.question) {

                document.querySelector('.question').textContent = question.question;
                document.querySelector('h2').textContent = question.difficulty;
                document.querySelector('.hidden').textContent = question.correct_answer;

                document.querySelector('.answer-btn').addEventListener('click', (event) => {
                    event.preventDefault();
        
                    onclick();          
        
                })
            }
        }    
    })   
})
.catch((error) => {
    console.log(error)
})

function onclick() {
    document.querySelector('.hidden').style.display = "list-item"
}
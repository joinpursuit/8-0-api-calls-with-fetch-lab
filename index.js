import {categories} from '/categories.js';
//
const BASE_URL = "https://opentdb.com/api.php",
      main     = document.getElementById('container'),
      form     = document.querySelector('#new-trivia');
let amount     = document.querySelector('#trivia-amount'),
    category   = document.querySelector('#trivia-category');     
// => Loading categories select
loadCategories();
// =>
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let paremeters = '';
    //main.remove();
    amount   = amount.value;
    category = category.value;
    // => Validating parameters to create URL
    if(amount !== ''){
        paremeters = '?amount='+amount;
    }
    if(category !== ''){
        paremeters += '&category='+category;
    }
    getCards(paremeters)
})

function getCards(param) {
    // => Getting data from API
    fetch(`${BASE_URL}${param}`)
        .then((response) => response.json())
        .then((json) => {
            
            for(let res of json.results){
                const card    = document.createElement('article'),
                    title     = document.createElement('h2'),
                    question  = document.createElement('p'),
                    answer    = document.createElement('p'),
                    btnAnswer = document.createElement('button');
                card.classList.add('card');
                title.textContent = res.category;
                question.textContent = he.decode(res.question);
                answer.textContent = he.decode(res.correct_answer);
                answer.classList.add('hidden');

                // => Binding event to display the correct answer
                btnAnswer.innerText = 'Show Answer';
                btnAnswer.addEventListener('click', (event) => {
                    event.preventDefault();
                    getAnswer(answer, btnAnswer);
                });

                card.appendChild(title);
                card.appendChild(question);
                card.appendChild(btnAnswer);
                card.appendChild(answer);
                // => Adding new card
                main.append(card);
            }
    
    })
    .catch((error) => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        main.append(errorMessage);
    });
}

function getAnswer(answer, btnAnswer){
    if(answer.classList.contains('hidden')){
        answer.classList.remove('hidden');
        btnAnswer.innerText = 'Hide Answer';
        btnAnswer.setAttribute('style', 'background: #ef476f;color: #FFF')
    }else{
        answer.classList.add('hidden');
        btnAnswer.innerText = 'Show Answer';
        btnAnswer.setAttribute('style', 'background: #e9c46a;color: #264653')
    }
}

function loadCategories() {
    for (const [key, value] of Object.entries(categories)) {
        let option = new Option(value, key);
        category.add(option);
    }
}
const BASE_URL = "https://opentdb.com/api.php?amount=10";

document.querySelector('form')
.addEventListener('submit', (event) => {
   event.preventDefault();
   
   fetch(BASE_URL)
   .then((response) => response.json())
   .then(showCards)
   .catch(console.log); 
})

const showCards = (card) => {
    for (let i = 0; i < 10; i++) {
        const article = document.createElement('article');
        article.classList.add('card');
        const main = document.querySelector('main.centered');
        main.append(article);

        article.innerHTML = `<h2>${card.results[i].category}</h2>
        <p>${card.results[i].question}</p>
        <button>Show Answer</button>
        <p class="hidden">CORRECT ANSWER</p>`;

        const buttons = document.querySelectorAll('.card button');
        const hiddens = document.querySelectorAll('p.hidden');
        
        buttons[i].addEventListener('click', () => {
            hiddens[i].style.display = 'block';
            hiddens[i].textContent = card.results[i].correct_answer;
        })
    }
}

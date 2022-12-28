const BASE_URL ="https://opentdb.com/api.php?amount=10&type=multiple"

const main = document.querySelector("main")
const form = document.querySelector("form");
form.addEventListener("submit", getTriviaCardData)

function getTriviaCardData(event) {
    event.preventDefault();
    
    fetch(BASE_URL) 
        .then((response) => response.json())
        
        .then((result) => {
            createTriviaCards(result);
        })
        
        .catch((error) => {
            createErrorMessage(error)
        })

function createTriviaCards(triviaCardData) {
    const triviaCardArray = triviaCardData.results;
    triviaCardArray.forEach((card) => {
        const triviaCard = document.createElement('article');
            triviaCard.classList.add('card');
            triviaCard.innerHTML = ` 
                <h2>${card.category}</h2>
                <p>${card.question}</p>
            `;
        const button = document.createElement("button");
            button.innerHTML = `Show Answer`;
            button.addEventListener("click", getAnswer); 
        const answer = document.createElement("p") 
            answer.classList.add("hidden");
            answer.innerHTML = `${card.correct_answer}`;
        
        triviaCard.append(button, answer);
        main.append(triviaCard);
            
    })
   }
   
function createErrorMessage(errorMes) {
    const section = document.createElement("section");
      section.innerHTML = `
      <p class="error">There was an error!</p>
      <p class="message">${errorMes}</p>
    `;
    main.append(section);
   }
   
function getAnswer(event) {
    event.target.nextSibling.classList.remove('hidden');;
    }
}
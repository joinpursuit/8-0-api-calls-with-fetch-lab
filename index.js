const BASE_URL = " https://opentdb.com/api.php?amount=10"

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll('.error').forEach((errorMessage) => errorMessage.remove())

    fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            result.results.forEach((object) => {
                document.querySelector("main").append(addTriviaQ(object))
            })
        })
        .catch(displayError)
        
    event.target.reset();
})

function addTriviaQ(object) {

    const article = document.createElement("article")
    article.classList.add("card")

    const heading = document.createElement("h2")
    heading.textContent = `${object.category}`
    article.append(heading)

    const paragraph = document.createElement("p")
    paragraph.textContent = `${object.question}`
    article.append(paragraph)

    const button = document.createElement("button")
    button.textContent = "Show Answer"
    article.append(button)

    const paragraph2 = document.createElement("p")
    paragraph2.classList.add("hidden")
    paragraph2.textContent = `${object.correct_answer}`
    article.append(paragraph2)

    button.addEventListener("click", () => {
        paragraph2.classList.toggle("hidden")
    })

    return article
}

const displayError = (error) => {

    const main = document.querySelector("main")
    const article = document.createElement("article")
    article.classList.add("error")
    article.style.display = "block"
    main.append(article)

    const paragraph = document.createElement("p")
    paragraph.textContent = "Something went wrong!"

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error");
    errorMessage.textContent = error;

    document.querySelector("article").append(paragraph, errorMessage);
}
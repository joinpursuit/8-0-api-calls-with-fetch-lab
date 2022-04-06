//step 1: fetch default API request (10 new questions of any type)
//step 2: update HTML page with json data (questions)
const form = document.querySelector("form");
//const button = document.querySelector("button");
const URL_PAGE = `https://opentdb.com/api.php?amount=10`;
//const body = document.querySelector("body");
const questionsList = document.querySelector("main.centered");

const updatePage = (question) => {
	//let [questions] = result;

	let article = document.createElement("article");
	article.classList.add("card");
	//article.classList.add("class");

	let category = document.createElement("h2");
	category.textContent = `${question.category}`;
	article.append(category);

	let questionText = document.createElement("p");
	//questionText.classList.add("card");
	questionText.textContent = `${question.question}`;
	article.append(questionText);

	let showAnswerButton = document.createElement("button");
	article.append(showAnswerButton);

	let answer = document.createElement("p");
	answer.classList.add("hidden");
	answer.textContent = `${question.correct_answer}`;
	article.append(answer);

	showAnswerButton.addEventListener("click", (event) => {
		event.target.classList.toggle("hidden");
	});
	//ADD ARTICLE TO END OF MAIN
	questionsList.append(article);
};

const showError = (error) => {
	console.log(error);
	let err = document.createElement("p");
	err.textContent = `${error}`;
	body.prepend(err);
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	//fetch
	fetch(URL_PAGE)
		.then((result) => result.json())
		.then((json) => {
			json.results.forEach((obj) => updatePage(obj));
		})
		.catch(showError);
});

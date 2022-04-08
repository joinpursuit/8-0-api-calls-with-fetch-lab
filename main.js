const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	fetch('https://opentdb.com/api.php?amount=10')
		.then((response) => response.json())
		.then((question) =>
			question.results.forEach((result) => {
				const main = document.querySelector('main.centered');
				const article = document.createElement('article');
				const header = document.createElement('h2');
				const blank = document.createElement('p');
				const answer = document.createElement('p');
				const button = document.createElement('button');

				main.append(article);

				article.append(header, blank, button, answer);
				article.classList.add('card');
				header.textContent = result.category;
				blank.textContent = result.question;
				answer.classList.add('hidden');
				answer.textContent = 'Correct Answer';

				button.textContent = 'Show Answer';
				button.addEventListener('click', () => {
					answer.classList.toggle('hidden');
					answer.textContent = result.correct_answer;
				});
			})
		)
		.catch((error) => {
			console.log(error);
		});
});

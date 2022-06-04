const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	fetch('https://opentdb.com/api.php?amount=10')
		.then((res) => res.json())
		.then((question) => {
			question.results.forEach((result) => {
				let main = document.querySelector('main.centered');
				let article = document.createElement('article');
				article.classList.add('card');

				let h2 = document.createElement('h2');
				h2.textContent = result.category;

				let p = document.createElement('p');
				p.textContent = result.question;

				let p2 = document.createElement('p');
				p2.classList.add('hidden');
				p2.textContent = 'Correct Answer';

				let button = document.createElement('button');
				button.textContent = 'Show Answer';

				main.append(article);
				article.append(h2, p, button, p2);

				button.addEventListener('click', (event) => {
					p2.classList.toggle('hidden');
					p2.textContent = result.correct_answer;
				});
			});
		})
		.catch((error) => {
			console.log(error);
		});
});
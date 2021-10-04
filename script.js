fetch('https://opentdb.com/api.php?amount=10')
    .then((res)=> {
        return res.json();
    }).then((data)=> {
        let questionList = data.results;
        
        for (let question of questionList) {
            let main = document.querySelector('main');

            let article = document.createElement('article');
            article.setAttribute('class','card');
            main.append(article);
            
            let h2 = document.createElement('h2');
            h2.textContent = question.category;
            article.append(h2);

            let p = document.createElement('p');
            p.textContent = question.question;
            article.append(p);

            let answerButton = document.createElement('button');
            answerButton.textContent = 'Show Answer'
            article.append(answerButton);

            let secondP = document.createElement('p');
            secondP.setAttribute('class', 'hidden');
            secondP.textContent = question['correct_answer'];
            article.append(secondP);

            answerButton.addEventListener('click', (e) => {
                secondP.style.display = 'block';
            })
        }
    }).catch((err) => {
        console.log(err);
    })


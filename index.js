const CATEGORY_URL = 'https://opentdb.com/api.php?amount=10&category=';
const DIFFICULTY_URL = 'https://opentdb.com/api.php?amount=10&difficulty=';
const POPULATE_URL = 'https://opentdb.com/api_category.php?amount=10';
const BASE_URL = 'https://opentdb.com/api.php?amount=10';

const createErrorMessage = (message) => {
  const section = document.createElement('section'); // Creates a section element
  section.classList.add('error'); //adds 'error' as a class for the section and assigns text content

  const paraOne = dcoument.createElement('p');
  const paraTwo = document.createElement('p.nessage');
  section.append(paraOne);
  section.append(paraTwo);

  paraOne.textContent = 'There was an error!';
  paraTwo.textContent = `${message}`;

  // appends section right after form tag
  document.querySelector('form').after(section);
};

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const form = document.querySelector('form');

  document.querySelector('main.centered').innerHTML = '';
  const newQuestionBtn = document.querySelector('button');

  let selectVal, selectText, selectModeNum, selectModeText;

  /***  IIFE function to build the select statement so it is visible in the page*/

  (function buildSelectfromAPI() {
    const div = document.createElement('div');
    div.setAttribute('class', 'choose');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'space-between';
    div.style.marginBottom = '0.5rem;';
    form.append(div);

    //dynamically create select for Category
    const selectCat = document.createElement('select');
    selectCat.name = 'category';
    selectCat.id = 'category';
    selectCat.style.display = 'block';
    selectCat.style.marginRight = '20px';
    let option = document.createElement('option');
    option.textContent = 'Choose a category...';
    option.value = 'none';
    selectCat.append(option);
    const label = document.createElement('label');
    label.innerHTML = 'CATEGORY';
    label.setAttribute('for', 'category');
    div.style.marginBottom = '20px';
    fetch(POPULATE_URL)
      .then((res) => res.json())
      .then(({ trivia_categories }) => {
        //  console.log(trivia_categories)
        trivia_categories.forEach((category) => {
          option = document.createElement('option');
          option.value = category.id;
          option.textContent = category.name;
          selectCat.append(option);
        });
      })
      .catch((err) => {
        createErrorMessage(err);
        // console.log(err);
      });
    div.appendChild(label).appendChild(selectCat);

    //select for Difficulty
    const selectDifficulty = document.createElement('select');
    selectDifficulty.name = 'mode';
    selectDifficulty.id = 'mode';
    selectDifficulty.style.display = 'block';
    let optionDiff = document.createElement('option');
    optionDiff.textContent = 'Choose a difficulty level...';
    optionDiff.value = 'none';
    optionDiff.selected = 'selected';
    selectDifficulty.append(optionDiff);
    const labelDiff = document.createElement('label');
    labelDiff.innerHTML = 'DIFFICULTY MODES';
    labelDiff.setAttribute('for', 'diff-mode');
    div.style.marginBottom = '20px';
    ['Any', 'Easy', 'Medium', 'Hard'].forEach((diff, index) => {
      optionDiff = document.createElement('option');
      optionDiff.value = index;
      optionDiff.textContent = diff;
      selectDifficulty.append(optionDiff);
    });

    div.appendChild(label).appendChild(selectCat);
    div.appendChild(labelDiff).appendChild(selectDifficulty);
    div.before(div, newQuestionBtn);
  })();

  category = document.querySelector('select#category');
  selectVal = category.options[category.selectedIndex].value;

  category.addEventListener('change', (e) => {
    selectVal = category.options[category.selectedIndex].value;
    selectText = category.options[category.selectedIndex].text;
    console.log(selectVal, selectText);
  });

  modes = document.querySelector('#mode');
  selectModeNum = modes.options[modes.selectedIndex].value;

  modes.addEventListener('change', (e) => {
    selectModeNum = modes.options[modes.selectedIndex].value;
    selectModeText = modes.options[modes.selectedIndex].text;
    console.log(selectModeNum, selectModeText);
  });

  //form submitted
  newQuestionBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('main.centered').innerHTML = '';
    // console.log(selectVal, selectModeText);

    const url = urlFetchInfo(
      selectVal,
      selectText,
      selectModeText,
      selectModeNum
    );

    fetchTriviaQuestions(url);
  });
});

const urlFetchInfo = (selectVal, selectText, selectModeText, selectModeNum) => {
  if (selectVal === 'none' && selectModeNum === 'none') {
    url = BASE_URL;
  } else if (selectVal !== 'none' && selectModeNum === 'none') {
    url = CATEGORY_URL + selectVal;
  } else if (selectVal === 'none' && selectModeNum !== 'none') {
    url = DIFFICULTY_URL + selectModeText;
  } else {
    url = CATEGORY_URL + selectVal + '&difficulty=' + selectModeText;
  }
  if (selectVal === 'none') {
    url = BASE_URL;
  } else if (selectVal !== 'none') {
    url = CATEGORY_URL + selectVal;
  }

  console.log(url);

  return url;
};

//function to create the cards
const createCards = ({ results }) => {
  console.log(results);

  results.forEach(
    ({ category, difficulty, question, correct_answer, incorrect_answers }) => {
      const article = document.createElement('article');
      article.classList.add('class', 'card');

      difficulty === 'easy'
        ? (article.style.border = '5px solid green')
        : difficulty === 'medium'
        ? (article.style.border = '5px solid yellow')
        : (article.style.border = '5px solid red');

      const categoryHead = document.createElement('h2');
      article.append(categoryHead);
      categoryHead.textContent = category;

      const questionPara = document.createElement('p');
      article.append(questionPara);
      questionPara.textContent = decodeHtml(question);

      // const answerDiv = document.querySelector('div');
      // article.append(answeDiv)
      const optionsUl = document.createElement('ul');
      article.append(optionsUl);
      optionsUl.classList.add('quiz-option');

      // let correctAnswer = decodeHtml(correct_answer)
      // let incorrectAnswer = decodeHtml(incorrect_answers);
      let optionsList = incorrect_answers;
      optionsList.splice(
        Math.floor(Math.random() * (incorrect_answers.length + 1)),
        0,
        correct_answer
      );

      console.log(optionsList);
      optionsList.map((option, idx) => {
        const li = document.createElement('li');
        const index = idx + 1;
        li.textContent = index + '.  ';
        li.style.background = '#bdd4c5';
        li.style.color = 'black';
        li.style.marginBottom = '10px';
        li.style.fontSize = '14px';
        li.style.width = '150px';
        li.style.padding = '0.8rem';
        li.style.listStyleType = 'none';
        li.style.marginLeft = '-40px';
        li.style.cursor = 'pointer';

        const span = document.createElement('span');
        span.textContent = decodeHtml(option);

        li.append(span);
        optionsUl.append(li);
      });

      const answerBtn = document.createElement('button');
      article.append(answerBtn);
      answerBtn.textContent = 'Show Answer';

      // article.before(answer, answerBtn);
      const hiddenPara = document.createElement('p');
      article.append(hiddenPara);
      hiddenPara.textContent = correct_answer;
      hiddenPara.classList.add('class', 'hidden');

      document.querySelector('main').append(article);
      answerBtn.addEventListener('click', () => {
        hiddenPara.classList.toggle('hidden');
      });
    }
  );
};

//decode the HTML
const decodeHtml = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

//fetch the questions
const fetchTriviaQuestions = (url) => {
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then(createCards)
    .catch((err) => createErrorMessage(err));
};

/** to decode HTML */

// function decodeHTMLEntity(str) {
//   const decodeHTMLEntities = {
//     "&quot;": '"',
//     "&#039;": `'`,
//     "&eacute;": "é",
//   };

//   const regex = /(&quot;|&#039;|&eacute;)/g;
//   return str.replace(regex, (match) => {
//     return decodeHTMLEntities[match];
//   });
// }

// to convert html entities into normal text of correct answer if there is any
// function HTMLDecode(textString) {
//   let doc = new DOMParser().parseFromString(textString, "text/html");
//   return doc.documentElement.textContent;
// }

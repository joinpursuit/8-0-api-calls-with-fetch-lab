const CATEGORY_URL = 'https://opentdb.com/api.php?amount=10&category=';
const DIFFICULTY_URL = 'https://opentdb.com/api.php?amount=10&difficulty=';
const POPULATE_URL = 'https://opentdb.com/api_category.php?amount=10';
const BASE_URL = 'https://opentdb.com/api.php?amount=10';

const createErrorMessage = (message) => {
  const section = document.createElement('section'); // Creates a section element
  section.classList.add('error'); //adds 'error' as a class for the section and assigns text content

  const paraOne = document.createElement('p');
  const paraTwo = document.createElement('p.nessage');
  section.append(paraOne);
  section.append(paraTwo);

  paraOne.textContent = 'There was an error!';
  paraTwo.textContent = `${message}`;

  // appends section right after form tag
  document.querySelector('form').after(section);
};

const createSelect = (form, newQuestionBtn) => {
  const div = document.createElement('div');
  console.log(form);
  div.setAttribute('class', 'choose');
  // div.style.display = 'flex';
  // div.style.justifyContent = 'center';
  // div.style.alignItems = 'center';
  // div.style.marginBottom = '0.5rem;';
  form.append(div);

  //dynamically create select for Category
  const selectCat = document.createElement('select');
  selectCat.name = 'category';
  selectCat.id = 'category';
  selectCat.style.display = 'block';
  // selectCat.style.marginRight = '20px';
  selectCat.style.marginBottom = '20px';
  let option = document.createElement('option');
  option.textContent = 'Choose a category...';
  option.value = 'none';

  selectCat.append(option);
  const label = document.createElement('label');
  label.innerHTML = 'CATEGORY';
  label.setAttribute('for', 'category');
  label.style.display = 'block';
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
  selectDifficulty.style.marginBottom = '20px';
  let optionDiff = document.createElement('option');
  optionDiff.textContent = 'Choose a difficulty level...';
  optionDiff.value = 'none';
  optionDiff.selected = 'selected';
  selectDifficulty.append(optionDiff);
  const labelDiff = document.createElement('label');
  labelDiff.innerHTML = 'DIFFICULTY MODES';
  labelDiff.setAttribute('for', 'diff-mode');
  // labelDiff.style.display = 'block';
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

//assign the url based on selection from the user in the DOM
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

//main function invoking to load domcontent
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let form = document.querySelector('form');

  document.querySelector('main.centered').innerHTML = '';
  const newQuestionBtn = document.querySelector('button');

  let selectVal, selectText, selectModeNum, selectModeText, numCorrect;

  /***  IIFE function to build the select statement so it is visible in the page*/

  (function buildSelectfromAPI() {
    form = document.querySelector('form');
    createSelect(form, newQuestionBtn);
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

    //Pull the information from the url using fetch()
    const url = urlFetchInfo(
      selectVal,
      selectText,
      selectModeText,
      selectModeNum
    );

    //append the questions to the DOM
    fetchTriviaQuestions(url);
  });
});

//function to create the cards
const createCards = ({ results }) => {
  console.log(results);

  results.forEach(
    (
      { category, difficulty, question, correct_answer, incorrect_answers },
      index
    ) => {
      //create article card
      const article = document.createElement('article');
      article.classList.add('class', 'card');

      //determine the color for the diffculty level
      const diffLevel =
        difficulty === 'easy'
          ? (article.style.border = '5px solid green')
          : difficulty === 'medium'
          ? (article.style.border = '5px solid #CCFF00')
          : (article.style.border = '5px solid red');

      //append the category header
      const categoryHead = document.createElement('h2');
      article.append(categoryHead);
      categoryHead.textContent = category;
      categoryHead.style.marginBottom = '30px';
      categoryHead.style.color = '#216c39';

      //append the difficulty level
      const difficultyLevel = document.createElement('span');
      article.append(difficultyLevel);
      difficultyLevel.textContent = `${difficulty} Level`;
      difficultyLevel.style.padding = '0.5rem';
      difficultyLevel.style.fontsize = '18px';
      difficultyLevel.style.fontfamily = 'Arial';
      difficultyLevel.style.textTransform = 'uppercase';
      let diff =
        difficulty === 'easy'
          ? 'rgba(140, 211, 140, 0.943)'
          : difficulty === 'medium'
          ? '#CCFF00'
          : '#f96f6f';
      difficultyLevel.style.border = '5px solid ' + diff;
      difficultyLevel.style.background = diff;
      difficultyLevel.style.color = 'black';
      difficultyLevel.style.color = 'black';
      difficultyLevel.style.marginBottom = '20px';

      //create a paragraph and append it to the artcilce
      const questionPara = document.createElement('p');
      article.append(questionPara);
      questionPara.style.marginTop = '25px';
      questionPara.textContent = decodeHtml(question);
      questionPara.style.marginBottom = '15px';

      let numCorrect = 0;
      let correctAnswer = decodeHtml(correct_answer);
      let incorrectAnswer = incorrect_answers;
      //to shuffle the correct answer
      incorrectAnswer.splice(
        Math.floor(Math.random() * (incorrectAnswer.length + 1)),
        0,
        correctAnswer
      );

      // console.log(answers);
      let quizAnswers = document.createElement('div');
      quizAnswers.style.background = 'none';
      quizAnswers.style.marginBottom = '30px';
      quizAnswers.classList.add('answerChoices');
      article.append(quizAnswers);
      let labelValue;
      incorrectAnswer.forEach((answer, i) => {
        labelValue = document.createElement('label');
        labelValue.textContent = answer;
        labelValue.htmlFor = answer;
        const inputValue = document.createElement('input');
        inputValue.type = 'radio';
        inputValue.name = 'question-' + i;
        inputValue.id = answer;
        inputValue.value = answer;
        inputValue.answer = i;
        inputValue.style.border = 'none';
        inputValue.style.opacity = 0;
        labelValue.style.padding = '0.5rem';
        // labelValue.style.borderRadius= '5px';
        // labelValue.style.background = '#54c16f';
        // labelValue.style.border = '1px solid #4f7d5d';
        labelValue.prepend(inputValue);
        quizAnswers.append(labelValue);
        quizAnswers.append(document.createElement('br'));
        console.log('name=', inputValue.id);
      });

      //create and append article ot the bottom
      const answerBtn = document.createElement('button');
      article.append(answerBtn);
      answerBtn.textContent = 'Show Answer';

      // article.before(answer, answerBtn);
      const hiddenPara = document.createElement('p');
      article.append(hiddenPara);
      hiddenPara.textContent = correct_answer;
      hiddenPara.classList.add('class', 'hidden');

      document.querySelector('main').append(article);

      //clcik the button w
      radioBtns = answerBtn.addEventListener('click', () => {
        hiddenPara.classList.toggle('hidden');
        labelValue = quizAnswers.querySelectorAll('label');
        // console.log(labelValue);

        //add correctAnswer or wrongAnswer class to the choices of current question
        labelValue.forEach((label) => {
          console.log('inside', label);
          if (label.textContent === correctAnswer) {
            label.classList.toggle('correct');
            numCorrect++;
          } else {
            label.classList.toggle('wrong');
          }
        });
      });
    }
  );
};

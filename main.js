let dropdown = ce({tagname:"select",id:"dropdown"});
dropdown.append(...[
  {tagname:"option",value:"",innerText:"Random"},
  {tagname:"option",value:"easy",innerText:"Easy"},
  {tagname:"option",value:"medium",innerText:"Medium"},
  {tagname:"option",value:"hard",innerText:"Hard"},
].map(el=>ce(el)));

document.querySelector("form").prepend(dropdown);

document.querySelector("form").addEventListener("submit",(evt)=>{
  evt.preventDefault();
  getResponse(document.querySelector("main"),evt.target.dropdown.value);
  document.querySelector("main").innerHTML="";
});

async function getResponse(main,level="medium") {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${level}`); 
    let rst = await response.json();
    rst.results.forEach(el=>main.append(create_card(el))); 
  } catch (error) {
    error_handling(error);
  }
}

function create_card(el){
  let answer = ce({style:"margin:15px 3px;"});
  let id = el.question.replace(/\W/g,"");
  let correct_answer;
  switch(el.type){
    case "boolean":
      let true_ = ce({tagname:"label",innerText:"True"});
      true_.append(ce({tagname:"input",type:"radio",name:id,value:true}))
      let false_ = ce({tagname:"label",innerText:"False"});
      false_.append(ce({tagname:"input",type:"radio","id":id+"false",name:id,value:false}));

      correct_answer = el.correct_answer?true_:false_;
      answer.append(true_,false_);
    break;
    case "multiple":
      let acc = [];
      for(let x in el.incorrect_answers)
      {
        acc.push(ce({tagname:"label",style:"display:Block;margin:15px 3px;",innerHTML:el.incorrect_answers[x]}));
      }
      correct_answer = ce({tagname:"label",style:"display:Block;margin:15px 3px;",innerText:el.correct_answer});
      acc.push(correct_answer);

      acc = shuffle(acc)
      for(let x of acc)
      {
        x.prepend(ce({tagname:"input",type:"radio",name:id}))
      }
      answer.append(...acc);
    break;
    default:
      error_handling("unknown question type");
  }
  /* example of data
    category: "History"
    ​
    correct_answer: "Silver"
    ​
    difficulty: "easy"
    ​
    incorrect_answers: Array(3) [ "Gold", "Juno", "Sword" ]
    ​
    question: "Which one of these was not a beach landing site in the Invasion of Normandy?"
    ​
    type:
  */
  let article = ce({tagname:"article",class:`card ${el.difficulty}`});

  article.append(
    ce({tagname:"h2",innerText : el.category}),
    ce({tagname:"p",innerHTML:el.question}),
    answer,
    ce({tagname:"button",innerHTML:"Show Answer","event_":{"click":show_correct_answer.bind(correct_answer)}}),
    ce({tagname:"p",class:"hidden",innerText:el.correct_answer}),
  );
  return article;
}

function ce(obj){
  let rst = document.createElement(obj.tagname||"div");
  for(let x in obj) 
    switch(x){
      case "tagname": break;
      case "innerHTML":case "innerText": 
        rst[x]=obj[x]; 
      break;
      case "event_":
        for(let y in obj[x]) rst.addEventListener(y,obj[x][y],false);
      break;
      default:
        rst.setAttribute(x,obj[x]);
    }
  return rst;
}

function show_correct_answer(evt){
  setTimeout(()=>this.classList.remove("correct"),2000);
  this.classList.add("correct");
}

function error_handling(text)
{
  let main = document.querySelector("main");
  main.innerHTML = `<p class='error'>${text}</p>`;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // from stack overflow
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
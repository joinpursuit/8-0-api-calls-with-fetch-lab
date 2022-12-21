fetch("https://opentdb.com/api.php?amount=10")
    .then(res => {
        return res.json();
    }).then(data => {
        let triviaList = data.results;
            for(let list of triviaList) {
                console.log(list.question);
        }
        let grabList = data.results;
            for(let list of grabList) {
                console.log(list.correct_answer);
            }
        console.log(triviaList);
    }).catch(error => {
        console.log(error);
    })


//     const boxes = document.querySelectorAll('class', 'card');

//     boxes.forEach(box => {
//         box.addEventListener('click', function handleClick(event) {
//         event.preventDefault()
//         console.log('box clicked', event);
//         box.setAttribute('click');

//   });
// });



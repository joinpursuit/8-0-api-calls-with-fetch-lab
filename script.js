fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    .then(response => {
       return response.json();
    }).then(data => {
        let triviaList = data.results;
        for(let list of triviaList) {
            console.log(list.question);
        }

        console.log(triviaList);
    }).catch(error => {
        console.log(error);
    });

    //access question=list.question
    //access rightAnswer=list.correct_answer


// async function catchScience() {
//     const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple");
//     const recieve = await response.recieve();
//     document.getElementById("science").src = URL.createObjectURL(recieve);
// }

    //     fetch('science.jpg').then(response => {
    //        console.log(response)
    //   });

fetch("https://opentdb.com/api.php?amount=10")
.then(e => e.json())
.then(makeCards)
.catch(console.log)
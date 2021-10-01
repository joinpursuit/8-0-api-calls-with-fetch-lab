fetch("https://opentdb.com/api.php?amount=10")
.then(e => e.json())
.then(callMe)
.catch(console.log)
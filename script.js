fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
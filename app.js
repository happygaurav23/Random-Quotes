function fetchQuote(){
    let randomIndex = Math.floor(Math.random()*15);
    fetch("https://type.fit/api/quotes").then((response)=>{
       return response.json();
    }).then((quotes)=>{
       document.getElementById('quote').innerText = quotes[randomIndex].text;
       document.getElementById('author').innerText = quotes[randomIndex].author;
})

}

fetchQuote();

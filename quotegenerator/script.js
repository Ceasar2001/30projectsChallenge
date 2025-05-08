const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://programming-quotes-api.herokuapp.com/quotes/random";

// Fetch and display a quote
async function getQuote(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        quote.innerHTML = `"${data.en}"`;
        author.innerHTML = `– ${data.author}`;
    } catch (error) {
        quote.innerHTML = "Failed to fetch quote.";
        author.innerHTML = "";
        console.error("Error:", error);
    }
}

document.getElementById("tweetBtn").addEventListener("click", () => {
    const tweetText = `${quote.innerText} ${author.innerText}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "_blank");
});


// Initial fetch
getQuote(api_url);

// Hook up the "New Quote" button
document.querySelector("button").addEventListener("click", () => {
    getQuote(api_url);
});

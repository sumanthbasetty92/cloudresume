const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://jzygs4ahppev3ud4rey5jcyyyq0gbqyl.lambda-url.us-east-1.on.aws/");
    
    if (response.ok) { // Check if response status is 200 OK
        let data = await response.json();
        counter.innerHTML = `Views: ${data.views}`;
    } else {
        console.error("Failed to fetch the counter:", response.statusText);
    }
}

updateCounter();
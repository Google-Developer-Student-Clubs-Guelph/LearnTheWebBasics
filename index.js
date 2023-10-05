
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("jokeText");

function apiCall() { 

    jokeText.textContent = "Fetching a joke...";

    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", { // add event request url
        headers: { 'X-Api-Key': 'p27En2Xor53jGo/LeOd8SQ==YDK8drrLAPYK7BHb' } // add api key
    })
        // Checks the network response 
        .then(function(response) {

            // If network response was not a success
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(function(data) {

            // Update the HTML tag with the joke fetched from the response
            jokeText.textContent = data[0].joke;

        })

        // Handles any errors that occur during the fetch operation
        .catch(function(error) {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
};

getJokeBtn.addEventListener("click", apiCall)

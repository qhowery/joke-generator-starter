console.log("Welcome to the Lobster Club Improv Comedy Show!");
const btn = null;
console.log("Button?: ", btn);

function getJoke() {
    console.log("ur mom");
}

document.addEventListener('click', async event => {
	if (event.target.id === 'laughButton') {
		try {
            const options = { 
                method: 'GET', // specify this is a GET request, not a PUT or POST
                headers: {
                "Accept" : "application/json" // request the response in JSON format
                }
            }
            const joke = await fetch('https://icanhazdadjoke.com/', options)
            const jokeJson = await joke.json()
            console.log(jokeJson)
            document.getElementById('display').innerText = jokeJson.joke;
        }
        catch (error) {
            console.err(error)
        }
	}
})

getJoke();
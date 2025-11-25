const btn = document.getElementById("jokeBtn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

function fetchJoke() {
    btn.disabled = true;

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(j => {
            setup.textContent = j.setup;
            punchline.textContent = j.punchline;
        })
        .catch(() => {
            setup.textContent = "Failed to fetch joke";
            punchline.textContent = "";
        })
        .finally(() => btn.disabled = false);
}

btn.onclick = fetchJoke;
fetchJoke();

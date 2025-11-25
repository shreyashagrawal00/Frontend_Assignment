const key = "YOUR_API_KEY";

document.getElementById("getWeather").onclick = async () => {
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    try {
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        );

        if (!res.ok) throw new Error("City not found");

        let data = await res.json();

        result.innerHTML = `
            Temperature: ${data.main.temp}°C <br>
            Humidity: ${data.main.humidity}% <br>
            Condition: ${data.weather[0].description}
        `;
    } catch (e) {
        result.textContent = "Invalid city or API error.";
    }
};

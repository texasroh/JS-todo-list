(() => {
    const weather = document.querySelector("#weather");
    const city = document.querySelector("#city");
    const API_KEY = "56a435b801902b555f418e9597cb61ee";

    function onGeoOk(position) {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            });
    }
    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
})();
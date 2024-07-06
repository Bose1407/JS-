async function fetchWeather() {
    const input = document.getElementById("inputfield").value;
    const div_area = document.getElementById("result");
    const api_key = `0ec02142d494364459f42cea32879187`;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`);
        
        if (!response.ok) {
            throw new Error("Weather data not found for the entered location.");
        }

        const data = await response.json();
        const { name: city, main: { temp, humidity }, weather: [{ description }] } = data;

        const tempCelsius = (temp - 273.15).toFixed(1);

        const cityDis = document.createElement("h1");
        cityDis.textContent = city;

        const tempDis = document.createElement("h4");
        tempDis.textContent = `Temperature: ${tempCelsius} °C`; 
        const humiDis = document.createElement("h4");
        humiDis.textContent = `Humidity: ${humidity}%`;

        const desDis = document.createElement("h4");
        desDis.textContent = `Description: ${description}`;
        div_area.style.display="flex";

        div_area.innerHTML = '';
        div_area.appendChild(cityDis);
        div_area.appendChild(tempDis);
        div_area.appendChild(humiDis);
        div_area.appendChild(desDis);

    } catch (error) {
       
        let error_msg = document.createElement("h4");
        error_msg.textContent=error.message;
        div_area.textContent="";
        div_area.appendChild(error_msg);


    }
}


function main() {

    const form = document.getElementById('search');
    const inputCity = document.getElementById('city');
    const inputState = document.getElementById('state');
    
    form.addEventListener('submit', (e) => {
        // capture the event and prevent default
        e.preventDefault();
        console.log('submit event emmited');
    
        //capture the input variables value
        const inputCityName = inputCity.value.toLowerCase(); // toLowerCase() makes the data standard
        const inputStateName = inputState.value.toLowerCase();
        // const cityid = inputID.value;
        console.log(inputCityName);
        console.log(inputStateName);
    
        // reset the form
        form.reset();

        cityData(inputCityName, inputStateName);
    
    });
    async function cityData(inputCityName, inputStateName) {

        let key = "1b480b407514a736d3c17c9bfa33c0cc";

        let cityId = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${key}`)
                .then((response)=> response.json())
                .then((data) => {
                    
                    console.log(data);

                    console.log(data.id);

                    return data.id;

             })

             console.log(cityId);



        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=imperial`)
             .then((response) => response.json())
             .then((weather) => {

                console.log(weather);

                const tempElement = document.getElementById('temp');

                let locationIcon = document.getElementById('weather-icon');
                const {icon} = weather.weather[0].icon;

                tempElement.innerHTML = `<p>The temperature is... ${weather.main.temp}F ${weather.weather[0].description}</p>`
                locationIcon.innerHTML =`<img src="./icons/${weather.weather[0].icon}.png"</div>`;
             })

             fetch(`http://www.boredapi.com/api/activity?type=recreational`)
             .then((response) => response.json())
             .then((activity) => {
                 
                 console.log(activity);

                 const randomActivity = document.getElementById('activity');

                 randomActivity.innerHTML = `<p>${activity.activity}</p>`


             })

            }

};






function main() {

    const form = document.getElementById('search');
    const inputCity = document.getElementById('city');
    const inputState = document.getElementById('state');
    // const inputID = document.getElementById('id');
    
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
    function cityData(inputCityName, inputStateName) {
        
        // let key = "e1b480b407514a736d3c17c9bfa33c0cc"; 

        let key = "1b480b407514a736d3c17c9bfa33c0cc";

        let api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${key}`)
                .then((response)=> response.json())
                .then((data) => {
                    
                    console.log(data);

                    const id = data.id;

                    console.log(data.id);

                    return id;
             })




  //       let api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${key}`, {
  //         method: 'get',
  //         }).then(function(response) {  
  //           response.json().then(function(data) {  
  //           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityid}&appid=${key}`)
  //           .then(function(response) {
  //           return response.json();
  //           }).catch(function() {
  //             console.log("This is the weather");
  //             });
  //         });  
  //       }) 
  //  .catch(function(error) {  
  //    console.log('Request failed', error)  
  //  });

            }

};





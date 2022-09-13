# About TheProject
Title: Weather Rec App
This project was created by The Boredom Fighters.
# The Boredom Fighters Team Lead-
Shelby Henry-Head Developer
Kristal Davis Project Manager, Assistant Developer
Rory Oliver- Assistant Developer
# Prerequisites-
 An open API Key returning your solution(s)
# What is the Weather Rec App?
The purpose of The Weather Rec app/website that we have built is to provide
users with the accurate current weather of the imputed state and city location.
Our app will also provide users with a random boredom activity suggestion to do
for the day.
The objective of the project was to securely connect to and retrieve
data from an API calling that provides response on multiple layouts which was achieved.
The user can experiment with many different variations of choices which exceed the project
requirements. The Weather Rec app meets standards and proves to be active and a responsive
 application.
# How is the Weather Rec App useful?
It's a one -app approach to solving our users' frequent boredom symptoms.
Users will use the app by inputting their city/state location. In return the
current weather conditions and a matching icon will be outputted in addition to
a randomly selected activity suggestion to help ensure our users interest is peaked.
Our app is user-friendly and proves to provide proficient solutions for users.
# Built With:
 *Bootstrap: ("https://getbootstrap.com/docs/5.2/getting-started/introduction/)
 *Weather Icons: ("Shelby*****”)
 *Open Weather Api: (https://openweathermap.org/api/one-call-3)
 *The Bored Api: (http://www.boredapi.com)
 * https://openweathermap.org/api/one-call-3
# Some issues: which was solved by working with our class lectures/ta’s
- Obtaining a free working API
- Getting the API to load successfully
- Github set-up
- Bootstrap causing misalignment
- Media query load
# M.V.P
- Achieved functionality - Meets project rubric expectations
# Color Schemes
-This project was focused on back-end to front-end user authentication.
 We focused on functionality. We wanted the app to bringour users happiness
so we incorporated orange as a feature color and paired it with blue to highlight
the authorized functionality to navigate the important functions of the app.
# App Overview (Description of your app):
This site is our first full stack development group project.
We focused on the functionality and end use for the site.
# Tech stack*Languages: CSS,Javascript, HTMl
# Installation Via Github-
1. Make a copy of this repository in your own github account```shgit clone https://github.com/Kristaldavis21/WePlayOtp```
2. Create a personal repository in github
3. Make changes, commit them, and push them in your own repository
- Tip: Before you start you need to get yourself an API key to make queries from the openweather.com and the boredapi.com websites.
# API
*Open Weather Api:https://openweathermap.org/api/one-call-3)
*The Bored Api: (http://www.boredapi.com)
# Future Goals- emphasis icon imagery- create note postcard layout- add background audio
# Code Snippet :)
```jsfunction main() {
 const form = document.getElementById('search'); const inputCity = document.getElementById('city'); const inputState = document.getElementById('state'); form.addEventListener('submit', (e) => { // capture the event and prevent default e.preventDefault(); console.log('submit event emmited'); //capture the input variables value const inputCityName = inputCity.value.toLowerCase(); // toLowerCase() makes the data standard const inputStateName = inputState.value.toLowerCase(); // const cityid = inputID.value; console.log(inputCityName); console.log(inputStateName); // reset the form form.reset();
 cityData(inputCityName, inputStateName); }); async function cityData(inputCityName, inputStateName) {
 let key = "1b480b407514a736d3c17c9bfa33c0cc";
 let cityId = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${key}`) .then((response)=> response.json()) .then((data) => { console.log(data);
 console.log(data.id);
 return data.id; })```
 ## Contributing
 The Boredom Fighters : (https://github.com/Kristaldavis21/WePlayOtp)Shelby Henry : (https://www.linkedin.com/in/shelby-henry-69866a67/)
1. Fork the Project
2.Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.
<!-- CONTACT -->
## Contact<!-- list contributors with their linked-in profile -->
[Shelby Henry] : (https://www.linkedin.com/in/shelby-henry-69866a67/)
[Kristal Davis Mitchell] : (https://github.com/Kristaldavis21/WePlayOtp)
[Rory Oliver]: (https://github.com/DCgrad08/
<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
Other Dependencies used to build the project.
* bootstrap* weather icons
Kristaldavis21/WePlayOtp
Project
Language
JavaScript
Last updated
4 days ago
Added by GitHub
getbootstrap.comgetbootstrap.com
Get started with Bootstrap
Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes. (726 kB)
https://getbootstrap.com/docs/5.2/getting-started/introduction/









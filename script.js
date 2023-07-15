function show() {
    var elm = document.getElementById('card');
    elm.style.display = 'flex';
    console.log("e");
}
document.addEventListener('DOMContentLoaded', () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8b7ba0a91fmsh929729a7cf389e1p167595jsnedf82686cdb1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};  

const getWeather = (city, targetElementId) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);

        const temperature = response.temp;
        if (targetElementId === 'tempSearch') {
          var cityName = city;
          if (cityName === '') {
            alert("Enter valid value");
            return; // Add return statement to exit the function
          }

          var elm = document.querySelector('.card_left');
          elm.innerHTML = ''; // Clear previous content

          var cityDiv = document.createElement('div');

          var cityHeader = document.createElement('h2');
          cityHeader.classList.add('cityName');
          cityHeader.innerText = cityName;

          var tempHeader = document.createElement('h3');
          tempHeader.classList.add('temperature');
          tempHeader.innerText = temperature;

          cityDiv.appendChild(cityHeader);
          cityDiv.appendChild(tempHeader);

          elm.appendChild(cityDiv);
        }

        if (temperature > 20 && targetElementId === 'tempSearch') {
          var div = document.querySelector('.card_right');
          div.innerHTML = '';

          var img = document.createElement('img');
          img.src = './images/sun.png';
          img.alt = 'Image description';
          img.width = 200;
          img.height = 150;
          img.classList.add('weathertemp');
          div.appendChild(img);
          console.log("hot");
        } else if (temperature < 20 && targetElementId === 'tempSearch') {
          var div = document.querySelector('.card_right');
          div.innerHTML = '';
          var img = document.createElement('img');
          img.src = './images/cloudy.png';
          img.alt = 'Image description';
          img.width = 200;
          img.height = 150;
          img.classList.add('weathertemp');
          div.appendChild(img);
          console.log("cold");
        }

  
    
        document.getElementById(targetElementId).innerHTML = ` ${temperature}`;
    })
    .catch(err => console.error(err));
};
  
const sub = document.getElementById('sub');
sub.addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city, 'tempSearch');
});
  
// Pre-defined city temperatures
getWeather("Delhi", "tempDelhi");
getWeather("Lucknow", "tempLucknow");
getWeather("Nainital", "tempNainital");
});
  

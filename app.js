const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f9132c480e212f522387bd03861b3401&query=37.8267,-122.4233';

request({url:url, json: true}, (error, response) => {
    const weatherDescription = response.body.current.weather_descriptions[0];
    const temperature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    console.log(`${weatherDescription}. It's currently ${temperature} degrees out. It feels like ${feelsLike} degrees out.`);
})
import React, { Component, useState } from 'react';
import './weatherapp.css';
import cloud from "../assests/cloud.png";
import crear from "../assests/clear.png";
import mist from "../assests/mist.png";
import rain from "../assests/rain.png";
import snow from "../assests/snow.png";
import search_icon from "../assests/search.png"
import wind_icon from "../assests/wind.png"
import humidity_icon from "../assests/humidity.png"


const WeatherApp = () => {

    let api_key = "a42e88ab846e79af309f4b3b03ba1446";
    const [wicon, setWicon] = useState(cloud)
    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const Wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location")

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {

            setWicon(crear);
        }

        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {

            setWicon(cloud)
        }

        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {

            setWicon(mist)
        }

        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {

            setWicon(mist)
        }

        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {

            setWicon(rain)
        }


        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {

            setWicon(rain)
        }

        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {

            setWicon(snow)
        }

        else {
            setWicon(crear)
        }










        humidity[0].innerHTML = data.main.humidity + " %";

        // Wind[0].innerHTML = Math.floor(data.Wind.speed) + " Km/h";

        temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";

        location[0].innerHTML = data.main.name;
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search Location' />
                <div className="search-icon" onClick={() => search()}>
                    <img src={search_icon} alt="" />
                </div>

            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">london</div>
            <div className="data-container">
                <div className="element first">
                    <img src={humidity_icon} className='icon' />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element second">
                    <img src={wind_icon} className='icon' />
                    <div className="data">
                        <div className="wind-rate">18 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default WeatherApp;
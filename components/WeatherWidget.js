import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function WeatherWidget() {

    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=auto:ip`

    useEffect(() => {
        getWeather()
    }, [])

    const [weatherData, setWeatherData] = useState([])

    const [temp, setTemp] = useState([])

    const getWeather = async () => {
        const response = await axios.get(API_URL)
        .then(function (response) {
            setWeatherData(response.data.current.condition)
            setTemp(response.data.current.temp_f)
        })
        .catch(function (error) {
            console.log('🚨 no weather 4 u')
        })
    }

  return (
    <div className="p-6 w-96 h-40  backdrop-blur-md bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-full border-b border-t border-gray-200">
        <div className="flex flex-row">
            <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-sky-200">
                <img src={weatherData.icon} alt='icon' width="105"/>
            </div>
            <div className="flex flex-col">
                <div className="text-lg text-bold pl-10 text-white">
                    <p><FontAwesomeIcon style={{fontSize:"25px"}} icon={faTemperatureHalf} /> {temp}<span>&#176;</span>F</p>
                    <p>{weatherData.text}</p>
                </div>
                <div className="text-xs text-center pl-12 pt-1">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMapLocationDot} /> Weather location is based on your IP address
                </div>
            </div>
        </div>
    </div>
  )
}

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
    <div className="p-2 w-80 h-32 backdrop-blur-md bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-full border-b border-t border-gray-200">
        <div className="flex flex-row">
            <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-gradient-to-t from-sky-200 to bg-cyan-400">
                <img src={weatherData.icon} alt='icon' width="125"/>
            </div>
            <div className="flex flex-col">
                <div className="text-2xl pt-1 text-bold pl-8 text-white">
                    <p><FontAwesomeIcon style={{fontSize:"28px"}} icon={faTemperatureHalf} /> {temp}<span>&#176;</span>F</p>
                    <p>{weatherData.text}</p>
                </div>
                <div className="text-xs text-center pt-1 pl-1 pr-2">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMapLocationDot} /> Weather location is based on your IP address
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import WeatherWidget from './WeatherWidget';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function WeatherFlyOut() {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=auto:ip`

    useEffect(() => {
        getWeather()
    }, [])

    const [weatherData, setWeatherData] = useState([])

    const getWeather = async () => {
        const response = await axios.get(API_URL)
        .then(function (response) {
            setWeatherData(response.data.current.condition)
        })
        .catch(function (error) {
            console.log('🚨 no weather 4 u')
        })
    }
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            // className={classNames(
            //   open ? 'text-gray-900' : 'text-gray-500',
            //   'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
            // )}
            className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group '
              )}
          >
            <span>
                
                {/* <FontAwesomeIcon className="pl-1 pt-1" style={{fontSize:"20px"}} icon={faCloudBolt} /> Live Weather */}
                <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-t from-indigo-400 to bg-cyan-400">
                    {/* <FontAwesomeIcon style={{fontSize:"25px"}} icon={faCloudBolt}></FontAwesomeIcon> */}
                    <img src={weatherData.icon} alt='icon' width="35"/>

                </div>


            </span>
            {/* <ChevronDownIcon
              className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
              aria-hidden="true"
            /> */}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-in duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-1 w-screen">

              <WeatherWidget />

            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

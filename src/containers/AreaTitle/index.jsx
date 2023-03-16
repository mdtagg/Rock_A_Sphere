import { useState,useEffect } from "react"
import Locations from "../Locations"
// import { getWeatherIcon } from "./utils/WeatherIcon"
import { LocationsButton } from "../LocationsButton"
import { CurrentWeather } from "../CurrentWeather"

const AreaTitle = (props) => {

    const [ dropdown,setDropdown ] = useState(false)
    const [ weatherIcon,setWeatherIcon ] = useState('')

    useEffect(() => {
        if(!props.weatherData) return 
        const { weatherCode } = props.weatherData.currentWeather
        // const weatherIcon = getWeatherIcon(weatherCode)
        // setWeatherIcon(weatherIcon)
    },[props.weatherData])

    return (
        <aside class='flex justify-center items-center flex-col p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black ml-11 sm:m-0 sm:p-2 sm:w-1/2 wide:gap-0 wide:p-2 wide:m-0 wide:h-full '>
            <LocationsButton
                location={props.location}
                setDropdown={setDropdown}
            />
            {!dropdown && 
                <CurrentWeather
                    weatherData={props.weatherData} 
                    // weatherIcon={<weatherIcon/>}

                />
            }
            {dropdown &&
                <Locations 
                    climbingAreas={props.climbingAreas} 
                    setClimbingAreas={props.setClimbingAreas}
                    setLocation={props.setLocation}
                    setDropdown={setDropdown}
                />
            }
        </aside>
    )
}

export { AreaTitle }
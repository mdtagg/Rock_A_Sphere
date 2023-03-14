import { useState,useEffect } from "react"
import CurrentLocationDropdown from "./CurrentLocationDropdown"
import LocationMenu from "./LocationMenu"
import { getWeatherIcon } from "./utils/getWeatherIcon"
import CurrentWeatherInfo from "./CurrentWeatherInfo"
import MapWrapper from "./MapWrapper"

const Dashboard = (props) => {

    const [ dropdown,setDropdown ] = useState(false)
    const [ weatherIcon,setWeatherIcon ] = useState('')

    useEffect(() => {
        if(!props.weatherData) return 
        const weatherCode = props.weatherData.currentWeather.weatherCode
        const weatherIcon = getWeatherIcon(weatherCode)
        setWeatherIcon(weatherIcon)
    },[props.weatherData])

    return (
        <div class='flex gap-10'>
        <section class='flex justify-center items-center flex-col p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black ml-11 sm:m-0 sm:p-2 sm:w-1/2 wide:gap-0 wide:p-2 wide:m-0 '>
            <CurrentLocationDropdown
                location={props.location}
            />
            {dropdown &&
                <LocationMenu 
                    climbingAreas={props.climbingAreas} 
                    setClimbingAreas={props.setClimbingAreas}
                    setLocation={props.setLocation}
                    setDropdown={setDropdown}
                />
            }
            {!dropdown && 
                <CurrentWeatherInfo 
                    weatherData={props.weatherData} 
                    weatherIcon={weatherIcon}
                />
            }
        </section>
        <MapWrapper location={props.location} climbingAreas={props.climbingAreas} />
        </div>
    )
}

export default Dashboard

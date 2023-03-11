import { useState,useEffect } from "react"
import LocationMenu from "./LocationMenu"

const Dashboard = (props) => {

    const [ dropdown,setDropdown ] = useState(false)
    const [ weatherIcon,setWeatherIcon ] = useState('')

    function handleClick() {
        setDropdown((prevState) => {
            return !prevState
        })
    }

    function getWeatherIcon(weatherIcon) {
        let newIcon = ''
        weatherIcon === 0 ? newIcon = 'sun.svg' :
        weatherIcon >= 1 && weatherIcon <=3 ? newIcon = 'cloud-sun.svg':
        weatherIcon >= 45 && weatherIcon <= 48 ? newIcon = 'cloud.svg' :
        weatherIcon >= 71 && weatherIcon <= 77 ? newIcon = 'snow.svg':
        weatherIcon >= 95 && weatherIcon <= 99 ? newIcon = 'thunder.svg':
        newIcon = 'rain.svg'

        setWeatherIcon(newIcon)
     
    }

    useEffect(() => {
        if(!props.weatherData) return 
        getWeatherIcon(props.weatherData.currentWeather.weatherCode)
    },[props.weatherData])

    return (
        <section class='flex justify-center items-center flex-col p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black ml-11 sm:m-0 sm:p-2 sm:w-full md:gap-0 md:p-2 md:m-0 md:w-1/3'>
            <button class='text-black text-3xl rounded flex items-center gap-1 md:text-lg md:font-bold' onClick={handleClick}>
                {props.location.title} 
                <img class='h-5 w-5 md:h-3 md:w-3' src='downCaret.svg'></img>
            </button> 
            
            {dropdown &&
                <LocationMenu 
                    climbingAreas={props.climbingAreas} 
                    setClimbingAreas={props.setClimbingAreas}
                    setLocation={props.setLocation}
                    setDropdown={setDropdown}
                />
            }
            
            {!dropdown && 
            <div class=' flex flex-col text-black items-center gap-1'>
                <p class='flex justify-center'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentDate}
                </p>
                <p class='flex justify-center text-4xl w-full md:text-base md:font-bold items-center gap-5 md:gap-3'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentTemp} &deg;F
                   <img 
                    class='h-7 w-7 md:h-3 md:w-3'
                    src={weatherIcon}
                    >
                    </img>
                </p>
                
            </div>
            }
        </section>
    )
}

export default Dashboard

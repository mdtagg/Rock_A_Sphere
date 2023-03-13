import { useState,useEffect } from "react"
import LocationMenu from "../components/DashboardComponents/LocationMenu"
import MapWrapper from "../components/DashboardComponents/MapWrapper"

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
        <div class='flex gap-10'>
        <section class='flex justify-center items-center flex-col p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black ml-11 sm:m-0 sm:p-2 sm:w-1/2 wide:gap-0 wide:p-2 wide:m-0 '>
            <button class='text-black text-3xl rounded flex items-center gap-1 wide:text-lg wide:font-bold' onClick={handleClick}>
                {props.location.title} 
                <img class='h-5 w-5 wide:h-3 wide:w-3' src='downCaret.svg'></img>
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
                <p class='flex justify-center text-4xl w-full wide:text-base wide:font-bold items-center gap-5 wide:gap-3'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentTemp} &deg;F
                   <img 
                    class='h-7 w-7 wide:h-3 wide:w-3'
                    src={weatherIcon}
                    >
                    </img>
                </p>
                
            </div>
            }
        </section>
        <MapWrapper location={props.location} climbingAreas={props.climbingAreas} />
        </div>
    )
}

export default Dashboard

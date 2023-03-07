import { useState } from "react"
import LocationMenu from "./LocationMenu"


const Dashboard = (props) => {

    const [dropdown,setDropdown] = useState(false)

    function handleClick() {
        setDropdown((prevState) => {
            return !prevState
        })
    }

    return (
        <section class='flex items-center flex-col m-8 p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black'>
            <button class='text-black text-3xl rounded flex items-center gap-1' onClick={handleClick}>
                {props.location.title} 
                <img class='h-5 w-5' src='/downCaret.svg'></img>
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
            <div class='relative z-0 flex flex-col text-black items-center'>
                <p class='flex justify-center'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentDate}
                </p>
                <p class='flex justify-center text-4xl w-full'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentTemp} &deg;F
                </p>
            </div>
            }
        </section>
        
    )
}

export default Dashboard

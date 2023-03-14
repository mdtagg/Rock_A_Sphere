import { useState,useEffect } from "react"
import { getClimbingAreas } from '../../climbingAreas'
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "../../hooks/UseLocalStorage"
import Dashboard from "../Dashboard"
import Summary from "../../components/Summary/Summary"
import InfoDisplay from "../../components/InfoDisplay"
import Footer from "../../components/Footer"
import { parseWeatherData } from "./utils/parseWeatherData"
import { parseRainData } from "./utils/parseRainData"

const App = () => {

    const [climbingAreas,setClimbingAreas] = UseLocalStorage('climbing-areas',getClimbingAreas())
    const [weatherData,setWeatherData] = useState(undefined)
    const [location,setLocation] = useState(climbingAreas[0])
    const [totalRain,setTotalRain] = useState({})

    useEffect(() => {
        (async function () {
            const weatherData = await WeatherDataService.getWeatherData(
                location.coords.latitude,
                location.coords.longitude,
                "auto"
            )
            const parsedWeatherData = parseWeatherData(weatherData)
            setWeatherData(parsedWeatherData)
    
            const { pastSevenRain,pastThreeRain } = parsedWeatherData.dailyWeather
            const parsedRainData = parseRainData([pastSevenRain,pastThreeRain])
            setTotalRain(parsedRainData)
          
        })()
        // parseData()
        
        
    },[location])

    return (
        <main class={`bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-between sm:justify-end `}>
            <div class='flex flex-col justify-evenly gap-3 h-full sm:gap-5 sm:justify-center wide:gap-1'>
                <Dashboard 
                    climbingAreas={climbingAreas} 
                    setClimbingAreas={setClimbingAreas} 
                    weatherData={weatherData} 
                    location={location} 
                    setLocation={setLocation}
                />
                <Summary 
                    location={location} 
                    totalRain={totalRain} 
                />
                <InfoDisplay 
                    location={location} 
                    weatherData={weatherData} 
                />
            </div>
            <Footer/>
        </main>
    )
}

export { App }




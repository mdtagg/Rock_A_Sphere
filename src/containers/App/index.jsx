import { useState,useEffect } from "react"
import { getClimbingAreas } from '../../climbingAreas'
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import CurrentInfoDisplay from "../CurrentInfoDisplay"
import Table from "../Table"
import RainReadout from "../RainReadout"
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
        
    },[location])

    return (
        <main class={`bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between md:p-0`}>
            <CurrentInfoDisplay
                climbingAreas={climbingAreas} 
                setClimbingAreas={setClimbingAreas} 
                weatherData={weatherData} 
                location={location} 
                setLocation={setLocation}
            />
            <Table 
                location={location} 
                totalRain={totalRain} 
            />
            <RainReadout
                location={location} 
                weatherData={weatherData} 
            />
            <Footer/>
        </main>
    )
}

export { App }




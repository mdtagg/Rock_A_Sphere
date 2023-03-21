import { useState,useEffect } from "react"
import { getClimbingAreas } from "./utils/getClimbingAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
import Table from "../Table"
import { RainReadout } from "../RainReadout"
import Footer from "../Footer/Index"
import { parseWeatherData } from "./utils/parseWeatherData"
import { parseRainData } from "./utils/parseRainData"

const App = () => {

    const [climbingAreas,setClimbingAreas] = UseLocalStorage('climbing-areas',getClimbingAreas())
    const [weatherData,setWeatherData] = useState(undefined)
    const [location,setLocation] = useState(climbingAreas[0])
    const [totalRain,setTotalRain] = useState({})
    const [earthView,setEarthView] = useState(false)

    console.log({climbingAreas})

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
        <main class={`bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between sm:p-0 wide:p-0`}>
            <CurrentInfoDisplay
                climbingAreas={climbingAreas} 
                setClimbingAreas={setClimbingAreas} 
                weatherData={weatherData} 
                location={location} 
                setLocation={setLocation}
                earthView={earthView}
                setEarthView={setEarthView}
            />
            <Table 
                location={location} 
                totalRain={totalRain} 
                weatherData={weatherData}
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




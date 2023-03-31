import { useState,useEffect,createContext } from "react"
import { getDefaultAreas } from "./utils/getDefaultAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
import Table from "../Table"
import { RainReadout } from "../RainReadout"
import Footer from "../Footer/Index"
import { parseWeatherData } from "./helpers/parseWeatherData"
// import { AppContext } from "./contexts/AppContext"
export const AppContext = createContext(null)

const App = () => {

    const [climbingAreas,setClimbingAreas] = UseLocalStorage('climbing-areas',getDefaultAreas())
    const [weatherData,setWeatherData] = useState(undefined)
    const [location,setLocation] = useState(climbingAreas[0])
    const [buttonTitle,setButtonTitle] = useState('Wet Rock')

    useEffect(() => {
        (async function () {
            const weatherData = await WeatherDataService.getWeatherData(
                location.coords.latitude,
                location.coords.longitude,
                "auto"
            )
            const parsedWeatherData = parseWeatherData(weatherData)
            setWeatherData(parsedWeatherData)
        })()
        
    },[location])

    return (
        <main class={`bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between sm:p-0 wide:p-0 wide:justify-center `}>
            <AppContext.Provider value={{location,setLocation,weatherData}}>

                <CurrentInfoDisplay
                    climbingAreas={climbingAreas} 
                    setClimbingAreas={setClimbingAreas} 
                />
                <Table 
                    buttonTitle={buttonTitle}
                />
                <RainReadout
                    buttonTitle={buttonTitle}
                    setButtonTitle={setButtonTitle}
                />
                <Footer/>

            </AppContext.Provider>
        </main>
    )
}

export { App }




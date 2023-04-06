import { useState,useEffect } from "react"
import { getDefaultAreas } from "./helpers/getDefaultAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
// import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
// import { TableContainer } from "../TableContainer"
// import { RainReadout } from "../RainReadout"
// import Footer from "./components/Footer/Index"
import { parseWeatherData } from "./helpers/parseWeatherData"
import CurrentInfoContext from "./contexts/CurrentInfoContext"
// import WeatherContext from "./contexts/WeatherContext"

export interface ILocation {
    coords: { latitude:string, longitude:string },
    title: string,
    id:string
}

const App = () => {

    const [ climbingAreas, setClimbingAreas ]:any = UseLocalStorage('climbing-areas',getDefaultAreas())
    const [ weatherData, setWeatherData ]:any = useState(undefined)
    const [ location, setLocation ] = useState<ILocation>(climbingAreas[0])
    const [ buttonTitle, setButtonTitle ] = useState('Wet Rock')

    const currentInfoContextValues = {
        location,
        setLocation,
        weatherData,
        climbingAreas,
        setClimbingAreas
    }

    const weatherContextValues = {
        location,
        weatherData,
        buttonTitle,
        setButtonTitle,
    }

    useEffect(() => {
        (async function (): Promise<void> {
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
        <main className={`bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between sm:p-0 wide:p-0 wide:justify-center `}>
            <CurrentInfoContext.Provider value={currentInfoContextValues}>

                <CurrentInfoDisplay />

            </CurrentInfoContext.Provider>

            {/* <WeatherContext.Provider value={weatherContextValues}>

                <TableContainer />
                <RainReadout />

            </WeatherContext.Provider>
            
            <Footer/> */}
        </main>
    )
}

export { App }




import { useState,useEffect } from "react"
import { getDefaultAreas } from "./helpers/getDefaultAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
import { TableContainer } from "../TableContainer"
import { RainReadout } from "../RainReadout"
import Footer from "./components/Footer/Index"
import { parseWeatherData } from "./helpers/parseWeatherData"
import { IWeatherData } from "./types/app"
import { Form } from "../CurrentInfoDisplay/components/Form"
import { FormContext,LocationContext,TableInfoContext } from "./contexts/FormContext"

const App = () => {

    const [ climbingAreas, setClimbingAreas ] = UseLocalStorage('climbing-areas',getDefaultAreas())
    const [ weatherData, setWeatherData ] = useState<IWeatherData | undefined>(undefined)
    const [ location, setLocation ] = useState(climbingAreas[0])
    const [ buttonTitle, setButtonTitle ] = useState('Wet Rock')
    const [ toggleForm, setToggleForm ] = useState<boolean>(false)

    const locationContextValues = {
        location,
        setLocation,
        weatherData
    }

    const fromContextValues = {
        setToggleForm,
        climbingAreas,
        setClimbingAreas
    }

    const tableInfoContextValues = {
        buttonTitle,
        setButtonTitle
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
        <main 
            className="
                bg-[url('./assets/images/redRock.jpg')]
                bg-cover 
                bg-center 
                h-screen 
                w-screen 
                flex 
                flex-col 
                justify-between 
                pt-5
                sm:p-0 
                wide:p-0 
                wide:justify-center
            "
        >
            <LocationContext.Provider
                value={locationContextValues}
            >
                <FormContext.Provider 
                    value={fromContextValues}
                >
                    {!toggleForm ?
                        <CurrentInfoDisplay/> 
                        :
                        <Form/>
                    }   
                </FormContext.Provider>

            <TableInfoContext.Provider
                value={tableInfoContextValues}
            >
                <TableContainer />
                <RainReadout />
            </TableInfoContext.Provider>

            </LocationContext.Provider>
            
            <Footer/>
        </main>
    )
}

export { App }




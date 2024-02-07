import { useState,useEffect } from "react"
import { ReactComponent as GitHubImg } from '../../assets/svg/github.svg'
import { getDefaultAreas } from "./helpers/getDefaultAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import { TableContainer } from "../TableContainer"
import { RainReadout } from "../RainReadout"
import { parseWeatherData } from "./helpers/parseWeatherData"
import { IWeatherData, TRainData, test } from "./types/app"
import { Form } from "../Form"
import { FormContext,LocationContext,TableInfoContext } from "./contexts/FormContext"
import { WeatherOptionsButton } from "../WeatherOptionsButton"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import { MapView } from "../MapView"

const App = () => {

    const [ climbingAreas, setClimbingAreas ] = UseLocalStorage('climbing-areas',getDefaultAreas())
    const [ weatherData, setWeatherData ] = useState<test | undefined>(undefined)
    const [ location, setLocation ] = useState(climbingAreas[0])
    const [ rainData,setRainData ] = useState<TRainData>({buttonTitle:"Wet Rock",dailyData:[]})
    const [ toggleForm, setToggleForm ] = useState<boolean>(false)
    const [ earthView, setEarthView ] = useState<boolean>(false)

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
        rainData,
        setRainData,
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
        <div className="h-screen w-screen">
            <main className="bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-[95%] w-screen gap-3 flex flex-col justify-between py-5 sm:p-0 wide:p-0 wide:justify-center">
                <LocationContext.Provider
                    value={locationContextValues}
                >
                    <FormContext.Provider 
                        value={fromContextValues}
                    >
                        {!toggleForm ?
                            <section className='flex gap-10 sm:gap-2 wide:gap-1'>
                                <CurrentAreaContainer
                                    setEarthView={setEarthView}
                                />
                                <MapView
                                    earthView={earthView}
                                    setEarthView={setEarthView}
                                />
                            </section> 
                            :
                            <Form/>
                        }   
                    </FormContext.Provider>

                    <TableInfoContext.Provider
                        value={tableInfoContextValues}
                    >
                        <WeatherOptionsButton/>
                        <div className="flex flex-col gap-3 h-full">
                            <TableContainer />
                            <RainReadout />
                        </div>

                    </TableInfoContext.Provider>

                </LocationContext.Provider>
            </main>
            <footer 
                className='flex items-center justify-between h-[5%] bg-gray-300/75 wide:h-6 wide:hidden'
            >
                <a 
                    className='flex justify-center text-2xl font-medium m-auto items-center gap-2 sm:text-sm sm:font-medium wide:text-sm'
                    href='https://github.com/mdtagg/Rock_Climbing_Weather_App'
                    target='_blank'
                >
                    Developed by Michael Tagg
                    <GitHubImg
                        className='h-5 w-5 wide:h-3 wide:w-3'
                    />
                </a>
                <a
                    className='text-black text-right text-[8px] italic leading-3 flex flex-col items-end'
                    href='https://unsplash.com/@aaronburden'
                    target="_blank"
                >
                    Background Photo By: 
                    <br/>
                    Aaron Burden
                </a>
            </footer>
    </div>
    )
}

export { App }




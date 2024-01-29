import { useState,useEffect } from "react"
import { getDefaultAreas } from "./helpers/getDefaultAreas"
import WeatherDataService from "../../services/WeatherDataService"
import UseLocalStorage from "./hooks/UseLocalStorage"
import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
import { TableContainer } from "../TableContainer"
import { RainReadout } from "../RainReadout"
import Footer from "./components/Footer/Index"
import { parseWeatherData } from "./helpers/parseWeatherData"
import CurrentInfoContext from "./contexts/CurrentInfoContext"
import WeatherContext from "./contexts/WeatherContext"
import { TClimbingAreas } from "./hooks/UseLocalStorage"


export interface IWeatherData {
    currentWeather: {
        currentDate:string,
        currentTemp:number,
        weatherCode:number
    }
    dailyWeather: {
        days: string[],
        pastSevenRain: number[],
        pastThreeRain: number[]
    }
    forecast: {
        apparent_temperature_max: number[],
        precipitation_hours: number[],
        precipitation_probability_max: number[],
        precipitation_sum: number[],
        snowfall_sum:number[],
        sunrise: string[],
        sunset: string[],
        time: string[],
        weathercode: number[],
        windspeed_10m_max: number[]
    }
    hourlyWeather: {
        apparent_temperature_max: number[],
        precipitation_hours: number[],
        precipitation_probability_max: number[],
        precipitation_sum: number[],
        snowfall_sum:number[],
        time: string[],
        weathercode: number[],
        windspeed_10m_max: number[]
    }
}

export type TClimbingArea = {
    title: string,
    coords: { latitude: string, longitude: string },
    id: string
}

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>

export interface CurrentInfoContextType {
    location:TClimbingArea
    setLocation: ReactSetter<TClimbingArea>;
    weatherData: IWeatherData | undefined
    climbingAreas:TClimbingAreas
    setClimbingAreas: ReactSetter<TClimbingAreas>
}

export interface WeatherContextType {
    location: TClimbingArea
    weatherData: IWeatherData | undefined
    buttonTitle: string
    setButtonTitle: ReactSetter<string>
}

const App = () => {

    const [ climbingAreas, setClimbingAreas ] = UseLocalStorage('climbing-areas',getDefaultAreas())
    const [ weatherData, setWeatherData ] = useState<IWeatherData | undefined>(undefined)
    const [ location, setLocation ] = useState(climbingAreas[0])
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
        <main className="bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between sm:p-0 wide:p-0 wide:justify-center">
            <CurrentInfoContext.Provider value={currentInfoContextValues}>

                <CurrentInfoDisplay />

            </CurrentInfoContext.Provider>

            <WeatherContext.Provider value={weatherContextValues}>

                <TableContainer />
                <RainReadout />

            </WeatherContext.Provider>
            
            <Footer/>
        </main>
    )
}

export { App }




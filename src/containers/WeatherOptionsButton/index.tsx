
import { useState,useEffect,useContext } from "react"
import { parseDailyRain } from "./helpers/parseDailyRain"
import { parseForecast } from "./helpers/parseForecast"
import { parseHourly } from "./helpers/parseHourly"
import { getPageData } from "../../components/NavArrows/utils/getPageData"
import { NavArrows } from "../../components/NavArrows"
import { THourly } from "./helpers/parseHourly"
import { LocationContext,TableInfoContext } from "../App/contexts/FormContext"

const WeatherOptionsButton = () => {

    const { buttonTitle,setButtonTitle,setDailyData } = useContext(TableInfoContext)!
    const { weatherData } = useContext(LocationContext)!
    const [ buttonPosition, setButtonPosition ] = useState('')
    const [ hourlyData, setHourlyData ] = useState<THourly[][]>([])
    const [ currentPageIndex, setCurrentPageIndex ] = useState(0)

    function handleButtonChange(position:string,title:string) {
        setButtonPosition(position)
        setButtonTitle(title)
    }

    useEffect(() => {
        if(!weatherData) return
        const { dailyWeather, forecast, hourlyWeather } = weatherData
        switch(buttonTitle) {
            case 'Wet Rock':
                const parsedRainData = parseDailyRain(dailyWeather)
                setDailyData(parsedRainData)
                break;
            case 'Forecast':
                const forecastData = parseForecast(forecast)
                setDailyData(forecastData)
                break;
            case 'Hourly':
                const hourlyData = parseHourly(hourlyWeather)
                setHourlyData(hourlyData)
                getPageData(currentPageIndex,hourlyData,setDailyData,7)
                break;
        }
        
    },[weatherData,buttonTitle,currentPageIndex])

    return (
        <div className='flex gap-1 ml-11 sm:m-0'>
            <div className=' bg-black rounded-xl w-48 h-6 flex relative border border-white '>
                <div 
                    className={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}
                >
                    {`${buttonTitle}`}
                </div>
                <button 
                    className='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' 
                    onClick={() => handleButtonChange('','Wet Rock')}
                >
                    Wet Rock
                </button>
                <button 
                    className='w-1/3 text-xs text-white relative z-10 font-semibold' 
                    onClick={() => handleButtonChange('translate-x-[100%]','Forecast')}
                >
                    Forecast
                </button>
                <button 
                    className='w-1/3 text-xs text-white relative font-semibold' 
                    onClick={() => handleButtonChange('translate-x-[200%]','Hourly')}
                >
                    Hourly
                </button>
            </div>
            {buttonTitle === 'Hourly' &&
            <div 
                className='bg-slate-200/75 border border-black rounded-full flex justify-center items-center animate-fadeIn'
            >
                <NavArrows
                    dataFocus={hourlyData}
                    currentPageIndex={currentPageIndex}
                    setCurrentPageIndex={setCurrentPageIndex}
                    pageLength={7}
                />
            </div>}
        </div>
    )
}

export { WeatherOptionsButton }

import { useState,useEffect,useContext } from "react"
import { parseDailyRain } from "./helpers/parseDailyRain"
import { parseForecast } from "./helpers/parseForecast"
import { parseHourly } from "./helpers/parseHourly"
import { getPageData } from "../../components/NavArrows/utils/getPageData"
import { NavArrows } from "../../components/NavArrows"
import { THourly } from "./helpers/parseHourly"
import { LocationContext,TableInfoContext } from "../App/contexts/FormContext"

const WeatherOptionsButton = () => {

    const { rainData,setRainData } = useContext(TableInfoContext)!
    const { weatherData } = useContext(LocationContext)!
    const [ buttonPosition, setButtonPosition ] = useState('')

    function handleButtonChange(position:string,buttonTitle:string) {

        setButtonPosition(position)
        const { wetRockVals,forecastVals,hourlyVals  } = weatherData!.rainReadoutVals
        
        switch(buttonTitle) {
            case 'Wet Rock':
                setRainData({buttonTitle:'Wet Rock',dailyData:wetRockVals})
                break;
            case 'Forecast':
                setRainData({buttonTitle:"Forecast",dailyData:forecastVals})
                break;
            case 'Hourly':
                // const hourly = weatherData?.hourlyWeather.slice(1,8)
                setRainData({buttonTitle:"Hourly",dailyData:hourlyVals})
                break;
        }
    }

    useEffect(() => {
        if(!weatherData) return
        const { wetRockVals } = weatherData!.rainReadoutVals
        setRainData({buttonTitle:"Wet Rock",dailyData:wetRockVals})
    },[weatherData])

    return (
        <div className='flex gap-1 ml-11 sm:m-0'>
            <div className=' bg-black rounded-xl w-48 h-6 flex relative border border-white '>
                <div 
                    className={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}
                >
                    {rainData.buttonTitle}
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
            {rainData.buttonTitle === 'Hourly' &&
            <div 
                className='bg-slate-200/75 border border-black rounded-full flex justify-center items-center animate-fadeIn'
            >
                <NavArrows
                    fullData={weatherData?.rainReadoutVals.hourlyVals}
                    setData={setRainData}
                    data={rainData}
                    pages={7}
                />
            </div>}
        </div>
    )
}

export { WeatherOptionsButton }
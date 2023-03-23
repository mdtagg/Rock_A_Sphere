import { useState,useEffect } from "react"
import { parseDailyRain } from "./utils/parseDailyRain";
import { RainSquare } from "../RainSquare";
import { v4 as uuidv4 } from 'uuid';
import { parseForecast } from "./utils/parseForecast";

const RainReadout = (props) => {

    const [dailyData,setDailyData] = useState([])
    // console.log({dailyData})
    const [forecast,setForecast] = useState([])
    const [buttonTitle,setButtonTitle] = useState('Rain')
    const [buttonPosition,setButtonPosition] = useState('')

    function handleRain() {
        setButtonPosition('')
        setButtonTitle('Rain')
    }

    function handleForecast() {
        setButtonPosition('translate-x-[100%]')
        setButtonTitle('Forecast')
    }

    function handleHourly() {
        setButtonPosition('translate-x-[200%]')
        setButtonTitle('Hourly')
    }
     
    useEffect(() => {
        if(!props.weatherData) return
        if(buttonTitle === 'Rain') {
            const parsedRainData = parseDailyRain(props.weatherData.dailyWeather)
            setDailyData(parsedRainData)
        }else {
            const forecastData = parseForecast(props.weatherData.dailyWeather.forecast)
            setDailyData(forecastData)
        }
        // setForecast(props.weatherData.dailyWeather.forecast)
    },[props.weatherData,buttonTitle])

    return (
        <section class='flex flex-col gap-2 pl-10 sm:p-0'>
            <div class='bg-gray-200/25 rounded-xl w-40 h-6 flex relative border border-white '>
                <div class={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}>{`${buttonTitle}`}</div>
                <button class='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' onClick={handleRain}>Rain</button>
                <button class='w-1/3 text-xs text-white relative z-10 font-semibold' onClick={handleForecast}>Forecast</button>
                <button class='w-1/3 text-xs text-white relative font-semibold' onClick={handleHourly}>Hourly</button>
            </div>
            <div class='flex justify-between text-black w-full pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0'>
            {dailyData.map((item,index) => {
                if(index === 6 && buttonTitle === 'Rain') {
                    item[0] = 'Today'
                }else if(index === 0 && buttonTitle !== 'Rain') {
                    item[0] = 'Today'
                }

                return (
                    <RainSquare
                        item={item}
                        key={uuidv4()}
                        buttonTitle={buttonTitle}
                    />
                    )
                })
            } 
                </div>
        </section>
    )
    
}

export { RainReadout }

import { useState,useEffect } from "react"
import { parseDailyRain } from "./utils/parseDailyRain";
import { RainSquare } from "../RainSquare";
import { v4 as uuidv4 } from 'uuid';
import { parseForecast } from "./utils/parseForecast";
import { parseHourly } from "./utils/parseHourly";
import { NavArrows } from "../../components/NavArrows";
import { getPageData } from "../../components/NavArrows/utils/getPageData";

const RainReadout = (props) => {

    const [dailyData,setDailyData] = useState([])
    const [buttonPosition,setButtonPosition] = useState('')
    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    const [forecast,setForecast] = useState([])
    const [hourlyData,setHourlyData] = useState([])

    function handleRain() {
        setButtonPosition('')
        props.setButtonTitle('Rain')
    }

    function handleForecast() {
        setButtonPosition('translate-x-[100%]')
        props.setButtonTitle('Forecast')
    }

    function handleHourly() {
        setButtonPosition('translate-x-[200%]')
        props.setButtonTitle('Hourly')
    }
     
    useEffect(() => {
        if(!props.weatherData) return
        if(props.buttonTitle === 'Rain') {
            const parsedRainData = parseDailyRain(props.weatherData.dailyWeather)
            setDailyData(parsedRainData)
        }else if(props.buttonTitle === 'Forecast') {
            const forecastData = parseForecast(props.weatherData.dailyWeather.forecast)
            setDailyData(forecastData)
        }else if(props.buttonTitle === 'Hourly') {
            const hourlyData = parseHourly(props.weatherData.hourlyWeather)
            setHourlyData(hourlyData)
            getPageData(currentPageIndex,hourlyData,setDailyData,7)
            // getPageData(currentPageIndex,hourlyData,setDailyData,7)
        }
    },[props.weatherData,props.buttonTitle,currentPageIndex])

    // useEffect(() => {
    //     // if(!props.weatherData) return
    //     getPageData(currentPageIndex,hourlyData,setDailyData,7)
    // },[currentPageIndex,props.buttonTitle])

    return (
        <section class='flex flex-col gap-2 pl-10 sm:p-0 wide:gap-1'>
            <div class='flex gap-1'>
                <div class='bg-black rounded-xl w-48 h-6 flex relative border border-white '>
                    <div class={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}>{`${props.buttonTitle}`}</div>
                    <button class='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' onClick={handleRain}>Wet Rock</button>
                    <button class='w-1/3 text-xs text-white relative z-10 font-semibold' onClick={handleForecast}>Forecast</button>
                    <button class='w-1/3 text-xs text-white relative font-semibold' onClick={handleHourly}>Hourly</button>
                </div>
                {props.buttonTitle === 'Hourly' &&
                <div class='bg-gray-200/50 rounded-full flex justify-center items-center'>
                    <NavArrows
                        dataFocus={hourlyData}
                        currentPageIndex={currentPageIndex}
                        setCurrentPageIndex={setCurrentPageIndex}
                        pageLength={7}
                    />
                </div>}
            </div>
            <div class='flex justify-between text-black w-full pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0'>
            {dailyData.map((item,index) => {
                if(index === 6 && props.buttonTitle === 'Rain') {
                    item[0] = 'Today'
                }else if(index === 0 && props.buttonTitle === 'Forecast') {
                    item[0] = 'Today'
                }

                return (
                    <RainSquare
                        item={item}
                        key={uuidv4()}
                        buttonTitle={props.buttonTitle}
                    />
                    )
                })
            } 
                </div>
        </section>
    )
    
}

export { RainReadout }

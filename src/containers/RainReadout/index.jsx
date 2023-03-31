import { useState,useEffect,useContext } from "react"
import { parseDailyRain } from "./utils/parseDailyRain";
import { RainSquare } from "../RainSquare";
import { v4 as uuidv4 } from 'uuid';
import { parseForecast } from "./utils/parseForecast";
import { parseHourly } from "./utils/parseHourly";
import { NavArrows } from "../../components/NavArrows";
import { getPageData } from "../../components/NavArrows/utils/getPageData";
import { AppContext } from "../App";

const RainReadout = (props) => {

    const { weatherData } = useContext(AppContext)
    const [dailyData,setDailyData] = useState([])
    const [buttonPosition,setButtonPosition] = useState('')
    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    const [hourlyData,setHourlyData] = useState([])

    function handleRain() {
        setButtonPosition('')
        props.setButtonTitle('Wet Rock')
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
        if(!weatherData) return
        if(props.buttonTitle === 'Wet Rock') {
            const parsedRainData = parseDailyRain(weatherData.dailyWeather)
            setDailyData(parsedRainData)
        }else if(props.buttonTitle === 'Forecast') {
            const forecastData = parseForecast(weatherData.forecast)
            setDailyData(forecastData)
        }else if(props.buttonTitle === 'Hourly') {
            const hourlyData = parseHourly(weatherData.hourlyWeather)
            setHourlyData(hourlyData)
            getPageData(currentPageIndex,hourlyData,setDailyData,7)
        }
    },[weatherData,props.buttonTitle,currentPageIndex])

    return (
        <section class='flex flex-col gap-2 pl-10 sm:p-0 wide:gap-0 wide:p-0'>
            <div class='flex gap-1'>
                <div class='bg-black rounded-xl w-48 h-6 flex relative border border-white '>
                    <div class={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}>{`${props.buttonTitle}`}</div>
                    <button class='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' onClick={handleRain}>Wet Rock</button>
                    <button class='w-1/3 text-xs text-white relative z-10 font-semibold' onClick={handleForecast}>Forecast</button>
                    <button class='w-1/3 text-xs text-white relative font-semibold' onClick={handleHourly}>Hourly</button>
                </div>
                {props.buttonTitle === 'Hourly' &&
                <div class='bg-slate-200/75 border border-black rounded-full flex justify-center items-center animate-fadeIn'>
                    <NavArrows
                        dataFocus={hourlyData}
                        currentPageIndex={currentPageIndex}
                        setCurrentPageIndex={setCurrentPageIndex}
                        pageLength={7}
                    />
                </div>}
            </div>
            <div class='flex justify-between text-black w-full pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0 wide:p-0'>
            {dailyData.map((item,index) => {
                if(index === 6 && props.buttonTitle === 'Wet Rock') {
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

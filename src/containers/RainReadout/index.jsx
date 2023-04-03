import { useState,useEffect,useContext } from "react"
import { parseDailyRain } from "./utils/parseDailyRain";
import { RainSquare } from "../RainSquare";
import { v4 as uuidv4 } from 'uuid';
import { parseForecast } from "./utils/parseForecast";
import { parseHourly } from "./utils/parseHourly";
import { NavArrows } from "../../components/NavArrows";
import { getPageData } from "../../components/NavArrows/utils/getPageData";
import WeatherContext from "../App/contexts/WeatherContext";

const RainReadout = () => {

    const { setButtonTitle, buttonTitle, weatherData } = useContext(WeatherContext)
    const [ dailyData, setDailyData ] = useState([])
    const [ buttonPosition, setButtonPosition ] = useState('')
    const [ currentPageIndex, setCurrentPageIndex ] = useState(0)
    const [ hourlyData, setHourlyData ] = useState([])

    function handleButtonChange(position,title) {
        setButtonPosition(position)
        setButtonTitle(title)
    }
     
    useEffect(() => {
        if(!weatherData) return
        const { dailyWeather,forecast,hourlyWeather } = weatherData
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
        <section class='flex flex-col gap-2 pl-10 sm:p-0 wide:gap-0 wide:p-0'>
            <div class='flex gap-1'>
                <div class='bg-black rounded-xl w-48 h-6 flex relative border border-white '>
                    <div 
                        class={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}
                    >
                        {`${buttonTitle}`}
                    </div>
                    <button 
                        class='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' 
                        onClick={() => handleButtonChange('','Wet Rock')}
                    >
                            Wet Rock
                    </button>
                    <button 
                        class='w-1/3 text-xs text-white relative z-10 font-semibold' 
                        onClick={() => handleButtonChange('translate-x-[100%]','Forecast')}
                    >
                        Forecast
                    </button>
                    <button 
                        class='w-1/3 text-xs text-white relative font-semibold' 
                        onClick={() => handleButtonChange('translate-x-[200%]','Hourly')}
                    >
                        Hourly
                    </button>
                </div>
                {buttonTitle === 'Hourly' &&
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
                
                if(
                    (index === 6 && buttonTitle === 'Wet Rock') ||
                    (index === 0 && buttonTitle === 'Forecast')
                    ) {
                    item[0] = 'Today'
                }
                // else if(index === 0 && buttonTitle === 'Forecast') {
                //     item[0] = 'Today'
                // }

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

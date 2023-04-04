
// import { CurrentInfo } from "../CurrentInfo.jsx/index.jsx"
import CurrentInfoContext from "../App/contexts/CurrentInfoContext"
import GetWeatherIcon from "../CurrentAreaContainer/utils/getWeatherIcon"
import { useContext } from "react"

const CurrentWeather = () => {

    const { weatherData } = useContext(CurrentInfoContext)
    let WeatherIcon
    let currentDateData
    let currentTempData
    if(weatherData) {
        const { 
            weatherCode,
            currentDate,
            currentTemp 
        } = weatherData.currentWeather
        WeatherIcon = GetWeatherIcon(weatherCode)
        currentDateData = currentDate
        currentTempData = currentTemp
    }

    return (
        <>
            {weatherData &&
            <div class='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0'>
                <p
                    class='flex justify-center items-center sm:text-xs wide:text-sm'
                >
                    {currentDateData}
                </p>
                <div class='flex justify-center items-center gap-3  sm:gap-2' >
                    <p
                        class='text-4xl items-center gap-5 sm:text-2xl wide:gap-3 wide:text-xl '                
                    >
                        {`${currentTempData}\u00b0F`}
                    </p>
                    <WeatherIcon
                        class='h-fit w-8 sm:h-5 wide:h-5 wide:w-5 '
                    />
                </div>
                {/* <CurrentInfo /> */}
            </div>
            }
        </>
    )
}

export { CurrentWeather }
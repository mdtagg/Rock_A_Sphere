
// import CurrentInfoContext from "../../App/contexts/CurrentInfoContext"
import { LocationContext } from "../../App/contexts/FormContext"
import { GetWeatherIcon } from "../utils/getWeatherIcon"
import { useContext } from "react"

const CurrentWeather = () => {

    const { weatherData } = useContext(LocationContext)!
    let WeatherIcon: React.FC<React.SVGProps<SVGElement>> | undefined

    if(weatherData) {
        WeatherIcon = GetWeatherIcon(weatherData.currentWeather.weatherCode)
    }

    return (
        <>
            {weatherData && WeatherIcon &&
            <div className='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0'>
                <p
                    className='flex justify-center items-center sm:text-xs wide:text-sm'
                >
                    {weatherData.currentWeather.currentDate}
                </p>
                <div className='flex justify-center items-center gap-3  sm:gap-2' >
                    <p
                        className='text-4xl items-center gap-5 sm:text-2xl wide:gap-3 wide:text-xl '                
                    >
                        {`${weatherData.currentWeather.currentTemp}\u00b0F`}
                    </p>
                    <WeatherIcon
                        className='h-fit w-8 sm:h-5 wide:h-5 wide:w-5 '
                    />
                </div>
            </div>
            }
        </>
    )
}

export { CurrentWeather }
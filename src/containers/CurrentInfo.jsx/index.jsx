import { P as CurrentTemp } from "../../components/P"
import GetWeatherIcon from "../AreaTitle/utils/getWeatherIcon"

const CurrentInfo = (props) => {
    const WeatherIcon = GetWeatherIcon(props.weatherData.currentWeather.weatherCode)
   
    return (
        <div class='h-fit flex justify-center items-center gap-3 sm:justify-around' >
            <CurrentTemp
                class='text-4xl w-full font-normal items-center gap-5 sm:text-2xl wide:gap-3 wide:text-xl '
                value={`${props.weatherData.currentWeather.currentTemp}\u00b0F`}
                
            />
            <WeatherIcon
                class='h-fit w-8 wide:w-5 '
            />
        </div>
    )
}

export { CurrentInfo }
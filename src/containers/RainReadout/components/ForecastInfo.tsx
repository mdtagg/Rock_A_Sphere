
import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"
import { TForecast } from "../../App/types/app"

const ForecastInfo = (props:{forecastInfo:TForecast}) => {

    const { apparent_temperature_max,precipitation_sum,snowfall_sum,sunrise,sunset,weathercode } = props.forecastInfo 
    const WeatherIcon = GetWeatherIcon(weathercode)

    return (
        <div className='flex flex-col'>
            <WeatherIcon
                className='m-auto h-5 w-5 sm:h-4 sm:w-4'
            />
            <p className='m-0 p-0 text-base sm:text-xs wide:text-xs w-full'>
                Feels Like: <b>{apparent_temperature_max}&deg;</b>
                <br/>
                Rain Amt: <b>{precipitation_sum}"</b>
                <br/>
                Snow Amt: <b>{snowfall_sum}</b><i>"</i>
                <br/>
                Sunrise:  <b>{sunrise}</b>
                <br/>
                Sunset:  <b>{sunset}</b>
            </p>
        </div>
    )
}

export { ForecastInfo }
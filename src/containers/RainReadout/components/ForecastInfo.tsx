import { ReactNode } from "react"
import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"
import { TForecast, TRainReadout } from "../../App/types/app"

interface TForecastInfo {
    forecastInfo: TRainReadout
}

const ForecastInfo = (props:TForecast) => {

    // const { apparent_temperature_max,precipitation_sum,snowfall_sum,sunrise,sunset,weathercode } = props.forecastInfo[1]
    const { apparent_temperature_max,precipitation_sum,snowfall_sum,sunrise,sunset,weathercode } = props.forecastInfo.vals

    const WeatherIcon = GetWeatherIcon(weathercode)

    return (
        <div className='flex flex-col'>
            <WeatherIcon
                className='m-auto h-5 w-5 '
            />
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Feels Like: <b>{apparent_temperature_max}&deg;</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Rain Amt: <b>{precipitation_sum}"</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Snow Amt: <b>{snowfall_sum}</b><i>"</i> </p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunrise:  <b>{sunrise}</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunset:  <b>{sunset}</b></p>
        </div>
    )
}

export { ForecastInfo }
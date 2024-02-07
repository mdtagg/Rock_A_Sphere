/// <reference types="../../../../svg.d.ts" />
import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"
import { IHourly, TRainReadout } from "../../App/types/app"

interface THourlyInfo {
    hourlyInfo: TRainReadout
}

const HourlyInfo = (props:IHourly) => {

    const { weathercode,precipitation,snowfall,apparent_temperature,windspeed_10m } = props.hourlyInfo[1]
    const WeatherIcon = GetWeatherIcon(weathercode)

    return (
        <div className='flex flex-col'>
            <WeatherIcon
                className='m-auto h-5 w-5 '
            />
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Feels Like: <b>{apparent_temperature}&deg;</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Rain Amt: <b>{precipitation}"</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Snow Amt: <b>{snowfall}</b><i>"</i></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Wind: <b>{windspeed_10m} mph</b></p>
        </div>
    )
}

export { HourlyInfo }
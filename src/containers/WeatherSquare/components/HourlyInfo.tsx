/// <reference types="../../../../svg.d.ts" />
import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"
import { TRainReadout } from "../../App/types/app"
import { ReactNode } from "react"

interface THourlyInfo {
    hourlyInfo: TRainReadout
}

const HourlyInfo = (props:THourlyInfo) => {
    const { weathercode,precipitation,snowfall,apparent_temperature,windspeed_10m } = props.hourlyInfo[1]
    // const weatherCode = hourlyInfo[8] as unknown as number
    const WeatherIcon = GetWeatherIcon(weathercode)
    // const temp = hourlyInfo[2] as ReactNode
    // const rain = hourlyInfo[4] as ReactNode
    // const snow = hourlyInfo[7] as ReactNode
    // const wind = hourlyInfo[9] as ReactNode

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
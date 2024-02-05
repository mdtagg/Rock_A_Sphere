import { ReactNode } from "react"
import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"
import { TRainReadout } from "../../App/types/app"

interface TForecastInfo {
    forecastInfo: TRainReadout
}

const ForecastInfo = (props:TForecastInfo) => {

    const { forecastInfo } = props
    const weatherCode = props.forecastInfo[1] as unknown as number
    const WeatherIcon = GetWeatherIcon(weatherCode)
    const temp = forecastInfo[2] as ReactNode
    const rain = forecastInfo[5] as ReactNode
    const snow = forecastInfo[9] as ReactNode
    const sunrise = forecastInfo[3] as ReactNode
    const sunset = forecastInfo[4] as ReactNode

    return (
        <div className='flex flex-col'>
            <WeatherIcon
                className='m-auto h-5 w-5 '
            />
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Feels Like: <b>{temp}&deg;</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Rain Amt: <b>{rain}<i>"</i></b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Snow Amt: <b>{snow}</b><i>"</i> </p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunrise:  <b>{sunrise}</b></p>
            <p className='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunset:  <b>{sunset}</b></p>
        </div>
    )
}

export { ForecastInfo }
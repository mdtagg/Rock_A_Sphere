import { GetWeatherIcon } from "../../CurrentAreaContainer/utils/getWeatherIcon"

const ForecastInfo = (props) => {

    const { forecastInfo } = props
    const WeatherIcon = GetWeatherIcon(forecastInfo[1])

    return (
        <div class='flex flex-col'>
            <WeatherIcon
                class='m-auto h-5 w-5 '
            />
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Feels Like: <b>{forecastInfo[2]}&deg;</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Rain Amt: <b>{forecastInfo[5]}<i>"</i></b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Snow Amt: <b>{forecastInfo[9]}</b><i>"</i> </p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunrise:  <b>{forecastInfo[3]}</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs w-full'>Sunset:  <b>{forecastInfo[4]}</b></p>
        </div>
    )
}

export { ForecastInfo }
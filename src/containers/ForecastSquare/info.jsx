import GetWeatherIcon from "../AreaTitle/utils/getWeatherIcon"

const ForecastSquare = (props) => {

    const { forecastInfo } = props
    const WeatherIcon = GetWeatherIcon(forecastInfo[1])

    return (
        <div class='flex flex-col'>
            <WeatherIcon
                class='m-auto h-5 w-5 '
            />
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Feels Like: <b>{forecastInfo[2]}&deg;</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Precip: <b>{forecastInfo[7]}%</b></p>
            {/* <p class='m-0 p-0 text-xs'>Precip Amt: <b>{forecastInfo[5]}</b></p> */}
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Sunrise:  <b>{forecastInfo[3]}</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Sunset:  <b>{forecastInfo[4]}</b></p>
        </div>
    )
}

export { ForecastSquare }
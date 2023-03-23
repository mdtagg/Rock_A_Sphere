import GetWeatherIcon from "../AreaTitle/utils/getWeatherIcon"

const ForecastSquare = (props) => {

    const { forecastInfo } = props
    console.log({forecastInfo})
    const WeatherIcon = GetWeatherIcon(forecastInfo[1])

    return (
        <div class='flex flex-col'>
            <WeatherIcon
                class='m-auto h-5 w-5 sm:h-2 sm:w-3 wide:w-3 wide:h-3'
            />
            <p class='m-0 p-0 text-xs'>Feels Like: {forecastInfo[2]}&deg;</p>
            <p class='m-0 p-0 text-xs'>Rain Chance: {forecastInfo[7]}%</p>
            <p class='m-0 p-0 text-xs'></p>
        </div>
    )
}

export { ForecastSquare }
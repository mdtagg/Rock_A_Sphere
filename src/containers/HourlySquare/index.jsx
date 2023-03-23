import GetWeatherIcon from "../AreaTitle/utils/getWeatherIcon"

const HourlySquare = (props) => {

    const { hourlyInfo } = props
    console.log({hourlyInfo})
    const WeatherIcon = GetWeatherIcon(hourlyInfo[8])

    return (
        <div class='flex flex-col'>
            <WeatherIcon
                class='m-auto h-5 w-5 '
            />
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Feels Like: <b>{hourlyInfo[2]}&deg;</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Precip: <b>{hourlyInfo[3]}%</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Wind: <b>{hourlyInfo[9]} mph</b></p>
        </div>
    )
}

export { HourlySquare }
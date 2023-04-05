import GetWeatherIcon from "../../CurrentAreaContainer/utils/getWeatherIcon"

const HourlyInfo = (props) => {

    const { hourlyInfo } = props
    const WeatherIcon = GetWeatherIcon(hourlyInfo[8])

    return (
        <div class='flex flex-col'>
            <WeatherIcon
                class='m-auto h-5 w-5 '
            />
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Feels Like: <b>{hourlyInfo[2]}&deg;</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Rain Amt: <b>{hourlyInfo[4]}"</b></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Snow Amt: <b>{hourlyInfo[7]}</b><i>"</i></p>
            <p class='m-0 p-0 text-lg sm:text-xs wide:text-xs'>Wind: <b>{hourlyInfo[9]} mph</b></p>
        </div>
    )
}

export { HourlyInfo }
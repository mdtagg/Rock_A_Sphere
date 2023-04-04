import GetWeatherIcon from "../AreaTitle/utils/getWeatherIcon"

const CurrentInfo = (props) => {

    const { weatherData } = props
    const { weatherCode } = weatherData.currentWeather
    const { currentTemp } = weatherData.currentWeather
    const WeatherIcon = GetWeatherIcon(weatherCode)
   
    return (
        <div class='flex justify-center items-center gap-3  sm:gap-2' >
            <p
                class='text-4xl items-center gap-5 sm:text-2xl wide:gap-3 wide:text-xl '                
            >
                {`${currentTemp}\u00b0F`}
            </p>
            <WeatherIcon
                class='h-fit w-8 sm:h-5 wide:h-5 wide:w-5 '
            />
        </div>
    )
}

export { CurrentInfo }
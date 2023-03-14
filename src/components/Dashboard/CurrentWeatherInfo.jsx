

const CurrentWeather = (props) => {
    return (
        <div class=' flex flex-col text-black items-center gap-1'>
                <p class='flex justify-center'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentDate}
                </p>
                <p class='flex justify-center text-4xl w-full wide:text-base wide:font-bold items-center gap-5 wide:gap-3'>
                    {props.weatherData &&
                    props.weatherData.currentWeather.currentTemp} &deg;F
                    <img 
                        class='h-7 w-7 wide:h-3 wide:w-3'
                        src={props.weatherIcon}
                    >
                    </img>
                </p>
            </div>
    )
}

export default CurrentWeather
import { P as CurrentTemp } from "../../components/P"
import { Image as WeatherIcon} from "../../components/Image"

const CurrentInfo = (props) => {
    return (
        <div class='flex justify-center items-center gap-5 wide:gap-3'>
            <CurrentTemp
                class='text-4xl w-full items-center gap-5 wide:gap-3 wide:text-base wide:font-bold'
                value={`${props.weatherData.currentWeather.currentTemp}\u00b0F`}
                
            />
            <WeatherIcon
                class='h-7 w-7 wide:h-3 wide:w-3'
                src={props.weatherIcon}
            />
        </div>
    )
}

export { CurrentInfo }
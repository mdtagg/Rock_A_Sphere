
import { CurrentInfo } from "../CurrentInfo.jsx/index.jsx"
import CurrentInfoContext from "../App/contexts/CurrentInfoContext"
import { useContext } from "react"

const CurrentWeather = (props) => {

    const { weatherData } = useContext(CurrentInfoContext)

    return (
        <>
            {weatherData &&
            <div class='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0'>
                <p
                    class='flex justify-center items-center sm:text-xs wide:text-sm'
                >
                    {weatherData.currentWeather.currentDate}
                </p>
                <CurrentInfo
                    weatherData={weatherData}
                    weatherIcon={props.weatherIcon}
                />
            </div>
            }
        </>
    )
}

export { CurrentWeather }
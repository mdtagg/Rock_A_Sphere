
import { CurrentInfo } from "../CurrentInfo.jsx/index.jsx"
import CurrentInfoContext from "../App/contexts/CurrentInfoContext"
import { useContext } from "react"

const CurrentWeather = () => {

    const { weatherData } = useContext(CurrentInfoContext)
    const { currentDate } = weatherData.currentWeather

    return (
        <>
            {weatherData &&
            <div class='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0'>
                <p
                    class='flex justify-center items-center sm:text-xs wide:text-sm'
                >
                    {currentDate}
                </p>
                <CurrentInfo
                    weatherData={weatherData}
                />
            </div>
            }
        </>
    )
}

export { CurrentWeather }
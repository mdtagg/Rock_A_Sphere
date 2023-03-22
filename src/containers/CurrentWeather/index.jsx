

import { P as CurrentDate} from "../../components/P"
import { CurrentInfo } from "../CurrentInfo.jsx/index.jsx"

const CurrentWeather = (props) => {

    return (
        <>
            {props.weatherData &&
            <div class='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0'>
                <CurrentDate
                    class='flex justify-center items-center sm:text-xs wide:text-sm'
                    value={props.weatherData.currentWeather.currentDate}
                />
                <CurrentInfo
                    weatherData={props.weatherData}
                    weatherIcon={props.weatherIcon}
                />
            </div>
            }
        </>
    )
}

export { CurrentWeather }
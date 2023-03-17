

import { P as CurrentDate} from "../../components/P"
import { CurrentInfo } from "../CurrentInfo.jsx/index.jsx"

const CurrentWeather = (props) => {

    return (
        <div class=' flex flex-col h-fit text-black items-center'>
            {props.weatherData &&
            <>
                <CurrentDate
                    class='flex justify-center items-center sm:text-xs'
                    value={props.weatherData.currentWeather.currentDate}
                />
                <CurrentInfo
                    weatherData={props.weatherData}
                    weatherIcon={props.weatherIcon}
                />
            </>
            }
        </div>
    )
}

export { CurrentWeather }
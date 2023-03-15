

import { P as CurrentDate} from "../../components/P"
import { CurrentInfo } from "../CurrentInfo.jsx"

const CurrentWeather = (props) => {

    return (
        <div class=' flex flex-col text-black items-center gap-1'>
            {props.weatherData &&
            <>
                <CurrentDate
                    class='flex justify-center'
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
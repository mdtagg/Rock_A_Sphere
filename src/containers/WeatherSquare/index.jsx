
import { RainInfo } from '../RainInfo';
import { ForecastInfo } from './components/ForecastInfo';
import { HourlyInfo } from './components/HourlyInfo';

const WeatherSquare = (props) => {

    const { item,buttonTitle } = props
    const color = 
    buttonTitle === 'Wet Rock' ? item[2] :
    item[item.length - 1]

    return (
        <div 
            class={`flex flex-col justify-center items-center border-2 border-black p-6 ${color} gap-3 sm:gap-1 sm:p-2 sm:items-center wide:gap-0 wide:p-2 animate-fadeIn`}
        >
            <p
                class='text-3xl gap-3 font-bold sm:text-xl wide:text-sm wide:font-bold '
            >
                {item[0]}
            </p>
            
            {buttonTitle === 'Wet Rock' &&
                <RainInfo
                    rainInfo={item}
                />}
            {buttonTitle === 'Forecast' &&
                <ForecastInfo
                    forecastInfo={item}
                />}
            {buttonTitle === 'Hourly' &&
                <HourlyInfo
                    hourlyInfo={item}
                />
            }
        </div>
        )
}

export { WeatherSquare }
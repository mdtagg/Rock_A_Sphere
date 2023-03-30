
import { P as Day } from '../../components/P'
import { RainInfo } from '../RainInfo';
import { ForecastSquare } from '../ForecastSquare/info';
import { HourlySquare } from '../HourlySquare';

const RainSquare = (props) => {

    const { item } = props
    console.log({item})
    const color = 
    props.buttonTitle === 'Wet Rock' ? item[2] :
    item[item.length-1]

    return (
        <div 
            class={`flex flex-col justify-center items-center border-2 border-black p-6 ${color} gap-3 sm:gap-1 sm:p-2 sm:items-center wide:gap-0 wide:p-2 animate-fadeIn`}
        >
            <Day
                class='text-3xl gap-3 font-bold sm:text-xl wide:text-sm wide:font-bold '
                value={item[0]}
            />
            {props.buttonTitle === 'Wet Rock' &&
                <RainInfo
                    rainInfo={item}
                />}
            {props.buttonTitle === 'Forecast' &&
                <ForecastSquare
                    forecastInfo={item}
                />}
            {props.buttonTitle === 'Hourly' &&
                <HourlySquare
                    hourlyInfo={item}
                />
            }
        </div>
        )
}

export { RainSquare }
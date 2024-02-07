import { useContext } from "react"
import { TableInfoContext } from "../App/contexts/FormContext";
import { HourlyInfo } from "./components/HourlyInfo";
import { ForecastInfo } from "./components/ForecastInfo";
import { ReactComponent as RainImg } from '../../assets/svg/rain.svg'

const RainReadout = () => {

    const { rainData } = useContext(TableInfoContext)!
    const { buttonTitle,dailyData } = rainData

    console.log({dailyData})

    return (
        
        <section 
            className='grid grid-cols-7 pr-11 h-full gap-10 text-black ml-11 sm:grid-cols-3 sm:grid-flow-row sm:p-0 sm:m-0 sm:gap-0 wide:gap-0 wide:p-0'
        >
        {dailyData.map((data,idx) => {

            const day = data[0] as unknown as string
            const color = buttonTitle === 'Wet Rock' ? data[2] : data[1].color

            return (
                <div 
                    className={`flex flex-col justify-center items-center border-2 border-black p-6 ${color} gap-3 sm:gap-1 sm:p-2 sm:items-center wide:gap-0 wide:p-2 animate-fadeIn`}
                >
                    <p
                        className='text-3xl gap-3 font-bold sm:text-xl wide:text-sm wide:font-bold '
                    >
                        {day}
                    </p>
                    
                    {buttonTitle === 'Wet Rock' &&
                        <div className='flex gap-2 items-center'>
                            <RainImg
                                className='h-5 w-5 wide:h-3 wide:w-3 sm:h-4 sm:w-4'
                            />
                            <p
                                className='text-xl font-bold sm:text-base wide:text-xs'
                            >
                                {dailyData[idx][1]}
                            </p>
                            <p
                                className='text-xl font-bold sm:text-base wide:text-xs italic'
                            >
                                In
                            </p>
                        </div>}
                        {buttonTitle === 'Forecast' &&
                            <ForecastInfo
                                forecastInfo={data}
                            />}
                        {buttonTitle === 'Hourly' &&
                            <HourlyInfo
                                hourlyInfo={data}
                            />
                        }
                </div>
                )
            })
        } 
        </section>
    )
}

export { RainReadout }

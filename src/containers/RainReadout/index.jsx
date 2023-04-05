import { useState,useContext } from "react"
import { WeatherSquare } from "../WeatherSquare";
import { v4 as uuidv4 } from 'uuid';
import WeatherContext from "../App/contexts/WeatherContext";
import { WeatherOptionsButton } from "../WeatherOptionsButton";

const RainReadout = () => {

    const { buttonTitle } = useContext(WeatherContext)
    const [ dailyData, setDailyData ] = useState([])

    function findToday(data,index,buttonTitle) {
        if(
            (index === 6 && buttonTitle === 'Wet Rock') ||
            (index === 0 && buttonTitle === 'Forecast')
            ) {
                data[0] = 'Today'
        }
    }

    return (
        <section 
            class='flex flex-col gap-2 pl-10 sm:p-0 wide:gap-0 wide:p-0'
        >
            <WeatherOptionsButton
                setDailyData={setDailyData}
            />
            <div 
                class='flex justify-between text-black w-full pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0 wide:p-0'
            >
                {
                dailyData.map((data,index) => {
                    
                    findToday(data,index,buttonTitle)

                    return (
                        <WeatherSquare
                            data={data}
                            key={uuidv4()}
                            buttonTitle={buttonTitle}
                        />
                        )
                    })
                } 
            </div>
        </section>
    )
    
}

export { RainReadout }

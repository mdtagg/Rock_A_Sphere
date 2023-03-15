import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { parseDailyRain } from "./utils/parseDailyRain";
import { RainSquare } from "../RainSquare";

const InfoDisplay = (props) => {

    const [dailyData,setDailyData] = useState([])
     
    useEffect(() => {
        if(!props.weatherData) return
        const parsedRainData = parseDailyRain(props.weatherData.dailyWeather)
        setDailyData(parsedRainData)
    },[props.weatherData])

    return (
        <section class='flex justify-between text-black w-full  pl-10 pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0'>
        {dailyData.map(item => {
            return (
                <RainSquare
                    item={item}
                />
                // <div 
                // key={uuidv4()} 
                // class={`flex flex-col justify-center items-center border-2 border-black p-6 ${item[2]} gap-3 sm:p-2 sm:items-center wide:gap-0 wide:p-2`}>
                //     <p class='text-3xl gap-3 wide:text-sm wide:font-bold'>
                //         {item[0]}
                //     </p>
                //     <div class='flex gap-3 items-center wide:gap-2'>
                //         <img class='h-5 w-5 wide:h-3 wide:w-3' src='/src/assets/svg/rain.svg'></img>
                //         <p class='text-xl font-bold wide:text-xs'>
                //             {item[1]} <i>in</i>
                //         </p>
                //     </div>
                // </div>
                )
            })
        } 
        </section>
    )
    
}

export default InfoDisplay

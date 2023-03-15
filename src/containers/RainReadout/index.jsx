import { useState,useEffect } from "react"
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
                )
            })
        } 
        </section>
    )
    
}

export default InfoDisplay

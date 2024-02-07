
import { parseDate } from "../utils"
import { numArrayObj } from "./parseWeatherData"
import { IHourly } from "../types/app"

function getColor(precip:number) {
    return precip === 0 ? 'bg-green-200/70' :
    precip > 0 && precip <= 1 ? 'bg-yellow-200/70' :
    'bg-red-400/70'
}

function parseForecast(data:numArrayObj) {
    
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}
    const forecastData = {} as IHourly

    for(let key in data) {
        forecastData[key] = data[key].slice(7)
        
        if(key === "time" || key === "sunrise" || key === "sunset") {
            const options = key === "time" ? dayOptions : hourOptions
            const forecastKey = forecastData[key] as number[]
            forecastData[key] = parseDate(forecastKey,options)
        }
    }
    
    const parsedData = []
    for(let i = 0;i <= 6;i++) {
        const { time,weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,snowfall_sum } = forecastData
        const day = []

        day[0] = i == 0 ? "Today": time[i]
        day[1] = {
            weathercode:weathercode[i],
            apparent_temperature_max:apparent_temperature_max[i],
            sunrise:sunrise[i],
            sunset:sunset[i],
            precipitation_sum:precipitation_sum[i],
            precipitation_hours:precipitation_hours[i],
            precipitation_probability_max:precipitation_probability_max[i],
            windspeed_10m_max:windspeed_10m_max[i],
            snowfall_sum:snowfall_sum[i],
            color:getColor(precipitation_sum[i])
        }
        parsedData[i] = day
    }
    return parsedData
}   

export { parseForecast }

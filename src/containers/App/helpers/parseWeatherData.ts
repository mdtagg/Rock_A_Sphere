import { parseDate } from "../utils"
import { getTableVals } from "./getTableVals"
import { getRainReadoutVals } from "./getRainReadoutVals"
import { WeatherData } from "../types/app"



function parseDates(data:WeatherData) {

    const { current_weather,daily,hourly } = data
    const currentOptions:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}

    current_weather.time = Intl.DateTimeFormat(undefined,currentOptions).format(current_weather.time as number * 1000)
    daily.time = parseDate(daily.time as unknown as number[],dayOptions)
    daily.sunrise = parseDate(daily.sunrise as unknown as number[],hourOptions)
    daily.sunset = parseDate(daily.sunset as unknown as number[],hourOptions)
    hourly.time = parseDate(hourly.time as unknown as number[],hourOptions)
}

const parseWeatherData = (data:WeatherData) => {

    parseDates(data)
    const { daily , hourly } = data

    const currentWeather = data.current_weather
    const tableVals = getTableVals(data.daily.precipitation_sum as number[])
    const rainReadoutVals = getRainReadoutVals(daily,hourly)
    
    return {currentWeather,tableVals,rainReadoutVals}
}

export { parseWeatherData }
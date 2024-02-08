import { parseDate } from "../utils"
import { getTableVals } from "./getTableVals"
import { getRainReadoutVals } from "./getRainReadoutVals"

export type numObj = {
    [key:string] : number
}

export type numOrStrObj = {
    [key:string] : number | string
}

export type strOrNumArray = {
    [key:string] : number[] | string[]
}

export type strObj = {
    [key:string] : string
}

export type numArrayObj = {
    [key:string] : number[]
}

interface WeatherData {
    current_weather:numOrStrObj,
    current_weather_units:strObj,
    daily:strOrNumArray,
    daily_units:strObj,
    elevation:number,
    generationtime_ms:number,
    hourly:strOrNumArray,
    hourly_units:strObj,
    latitude:number,
    longitude:number,
    timezone:string,
    timezone_abbreviation:string,
    utc_offset_seconds:number

}

function parseDates(data:WeatherData) {

    const { current_weather,daily,hourly } = data
    const currentOptions:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}

    current_weather.time = Intl.DateTimeFormat(undefined,currentOptions).format(current_weather.time as number * 1000)
    daily.time = parseDate(daily.time as number[],dayOptions)
    daily.sunrise = parseDate(daily.sunrise as number[],hourOptions)
    daily.sunset = parseDate(daily.sunset as number[],hourOptions)
    hourly.time = parseDate(hourly.time as number[],hourOptions)
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
import { parseCurrentWeather } from "./parseCurrentWeather"
import { parseDailyWeather } from "./parseDailyWeather"
import { parseHourlyWeather } from "./parseHourlyWeather"
import { parseForecast } from "./parseForecast"
import { parseDate } from "../utils"
import { getTableVals } from "./getTableVals"
import { getRainReadoutVals } from "./getRainReadoutVals"

export type numObj = {
    [key:string] : number
}

export type strObj = {
    [key:string] : string
}

export type numArrayObj = {
    [key:string] : number[]
}

interface WeatherData {
    current_weather:numObj,
    current_weather_units:strObj,
    daily:numArrayObj,
    daily_units:strObj,
    elevation:number,
    generationtime_ms:number,
    hourly:numArrayObj,
    hourly_units:strObj,
    latitude:number,
    longitude:number,
    timezone:string,
    timezone_abbreviation:string,
    utc_offset_seconds:number

}

function parseDates(data) {
    const { current_weather,daily,hourly } = data
    const currentOptions:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}

    current_weather.time = Intl.DateTimeFormat(undefined,currentOptions).format(current_weather.time * 1000)
    daily.time = parseDate(daily.time,dayOptions)
    daily.sunrise = parseDate(daily.sunrise,hourOptions)
    daily.sunset = parseDate(daily.sunset,hourOptions)
    hourly.time = parseDate(hourly.time,hourOptions)
}

const parseWeatherData = (data:WeatherData) => {

    parseDates(data)
    const { current_weather, daily , hourly } = data
    const currentWeather = parseCurrentWeather(current_weather)
    const tableVals = getTableVals(data.daily.precipitation_sum)
    const rainReadoutVals = getRainReadoutVals(daily,hourly)
    const dailyWeather = parseDailyWeather(daily)
    const hourlyWeather = parseHourlyWeather(hourly)
    const forecast = parseForecast(daily)
    
    return {currentWeather,dailyWeather,hourlyWeather,forecast,tableVals}
}

export { parseWeatherData }

/*
should be current daily and hourly weather 
*/
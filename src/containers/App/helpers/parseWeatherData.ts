import { parseCurrentWeather } from "./parseCurrentWeather"
import { parseDailyWeather } from "./parseDailyWeather"
import { parseHourlyWeather } from "./parseHourlyWeather"
import { parseForecast } from "./parseForecast"

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

const parseWeatherData = (data:WeatherData) => {
  
    const { current_weather, daily , hourly } = data
    const currentWeather = parseCurrentWeather(current_weather)
    const dailyWeather = parseDailyWeather(daily)
    const hourlyWeather = parseHourlyWeather(hourly)
    const forecast = parseForecast(daily)
    
    return {currentWeather,dailyWeather,hourlyWeather,forecast}
}

export { parseWeatherData }
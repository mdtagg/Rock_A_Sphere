import { parseCurrentWeather } from "./parseCurrentWeather"
import { parseDailyWeather } from "./parseDailyWeather"
import { parseHourlyWeather } from "./parseHourlyWeather"
import { parseForecast } from "./parseForecast"

const parseWeatherData = (data:any) => {

    const currentWeather = parseCurrentWeather(data)
    const dailyWeather = parseDailyWeather(data.daily)
    const hourlyWeather = parseHourlyWeather(data.hourly)
    const forecast = parseForecast(data.daily)
    
    return {currentWeather,dailyWeather,hourlyWeather,forecast}
}

export { parseWeatherData }
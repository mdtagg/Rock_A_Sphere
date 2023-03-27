import { parseCurrentWeather } from "./parseCurrentWeather"
import { parseDailyWeather } from "./parseDailyWeather"
import { parseHourlyWeather } from "./parseHourlyWeather"

const parseWeatherData = (data) => {
    console.log({data})
    const currentWeather = parseCurrentWeather(data)
    const dailyWeather = parseDailyWeather(data.daily)
    const hourlyWeather = parseHourlyWeather(data.hourly)
    
    return {currentWeather,dailyWeather,hourlyWeather}
}

export { parseWeatherData }
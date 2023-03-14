import { parseCurrentWeather } from "./parseCurrentWeather"
import { parseDailyWeather } from "./parseDailyWeather"

const parseWeatherData = (data) => {
    const currentWeather = parseCurrentWeather(data)
    const dailyWeather = parseDailyWeather(data.daily)
    return {currentWeather,dailyWeather}
}

export { parseWeatherData }
import { parseForecast } from "./parseForecast"

const parseDailyWeather = (data) => {
    const dayOptions = { weekday:'short',day:'numeric' }
    const days = data.time.map(date => {
        return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
    }).slice(1,8)
    const rainTotal = data.precipitation_sum.slice(1,8)
    const pastSevenRain = data.precipitation_sum.slice(1,8)
    const pastThreeRain = data.precipitation_sum.slice(5,8)

    const forecast = parseForecast(data)

    return {days,rainTotal,pastSevenRain,pastThreeRain,forecast}
}

export { parseDailyWeather }
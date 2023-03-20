

const parseDailyWeather = (data) => {
    const dayOptions = { weekday:'short',day:'numeric' }
    const days = data.time.map(date => {
        return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
    }).slice(1,8)
    const rainTotal = data.precipitation_sum.slice(0,7)
    const pastSevenRain = data.precipitation_sum.slice(0,7)
    const pastThreeRain = data.precipitation_sum.slice(4,7)

    return {days,rainTotal,pastSevenRain,pastThreeRain}
}

export { parseDailyWeather }
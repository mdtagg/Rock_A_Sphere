
const parseDailyWeather = (data:any) => {
    // const dayOptions: Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const days = data.time.map((date:number) => {
        return Intl.DateTimeFormat(undefined,{ weekday:'short',day:'numeric' })
        .format(date * 1000)})
        .slice(1,8)
        
    const pastSevenRain = data.precipitation_sum.slice(1,8)
    const pastThreeRain = data.precipitation_sum.slice(5,8)

    return {days,pastSevenRain,pastThreeRain}
}

export { parseDailyWeather }
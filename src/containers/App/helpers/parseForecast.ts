

function parseForecast(data:any) {
    
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}
    const forecastData:any = {}

    for(let key in data) {
        forecastData[key] = data[key].slice(7)
    }
    forecastData["time"] = forecastData["time"].map((date:any) => {
        return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
    })

    forecastData["sunrise"] = forecastData["sunrise"].map((date:any) => {
        return Intl.DateTimeFormat(undefined,hourOptions).format(date * 1000)
    })

    forecastData["sunset"] = forecastData["sunset"].map((date:any) => {
        return Intl.DateTimeFormat(undefined,hourOptions).format(date * 1000)
    })
    
    return forecastData
}   

export { parseForecast }

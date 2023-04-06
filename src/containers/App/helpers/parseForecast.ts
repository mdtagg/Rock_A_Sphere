

function parseForecast(data:any) {
    const dayOptions:Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const hourOptions:Intl.DateTimeFormatOptions = {hour: "numeric"}
    const forecastData:any = {}
    for(let key in data) {
        forecastData[key] = data[key].slice(7)
    }
    for(let key in forecastData) {
        if(key === 'time') {
            forecastData[key] = forecastData[key].map((date:any) => {
                return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
            })
        }else if(key === 'sunrise' || key === 'sunset') {
            forecastData[key] = forecastData[key].map((date:any) => {
                return Intl.DateTimeFormat(undefined,hourOptions).format(date * 1000)
            })
        }
    }
    return forecastData
}   

export { parseForecast }

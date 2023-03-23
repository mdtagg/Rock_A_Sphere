

function parseHourlyWeather(data) {
    const hourOptions = {hour: "numeric"}
    const hourlyData = {}
    for(let key in data) {
        hourlyData[key] = data[key].splice(168,24)
    }
    for(let key in hourlyData) {
        if(key === 'time') {
        hourlyData[key] = hourlyData[key].map(date => {
            return Intl.DateTimeFormat(undefined,hourOptions).format(date * 1000)
            })
        }
    }   
    return hourlyData
}

export { parseHourlyWeather }
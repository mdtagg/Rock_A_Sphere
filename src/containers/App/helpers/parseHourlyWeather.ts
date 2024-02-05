

function parseHourlyWeather(data:any) {
    console.log({data})
    const hourOptions:Intl.DateTimeFormatOptions = { hour: "numeric" }
    const hourlyData:any = {}
    for(let key in data) {
        hourlyData[key] = data[key].slice(168)
        if(key === 'time') {
            hourlyData[key] = hourlyData[key].map((date:any) => {
                return Intl.DateTimeFormat(undefined,hourOptions).format(date * 1000)
            })
        }
    }
    console.log({hourlyData})
    return hourlyData
}

export { parseHourlyWeather }
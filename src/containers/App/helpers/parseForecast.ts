
function getColor(precip:number) {
    return precip === 0 ? 'bg-green-200/70' :
    precip > 0 && precip <= 1 ? 'bg-yellow-200/70' :
    'bg-red-400/70'
}

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

    const parsedForecast = []
    for(let i = 0;i <= 6;i++) {
        const { time,weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,snowfall_sum } = forecastData
        const day = []
        day[0] = time[i]
        day[1] = {
            weathercode:weathercode[i],
            apparent_temperature_max:apparent_temperature_max[i],
            sunrise:sunrise[i],
            sunset:sunset[i],
            precipitation_sum:precipitation_sum[i],
            precipitation_hours:precipitation_hours[i],
            precipitation_probability_max:precipitation_probability_max[i],
            windspeed_10m_max:windspeed_10m_max[i],
            snowfall_sum:snowfall_sum[i],
            color:getColor(precipitation_sum)
        }
        parsedForecast[i] = day
    }

    const parsedData = []

    let index = 0
    while(index <= 6) {
        let dataSection = []
        for(let key in forecastData) {
            dataSection.push(forecastData[key][index])
        }
        parsedData.push(dataSection)
        index += 1
    }
    parsedData.map(data => {
        if(typeof data[5] === 'number') {
            data[5] === 0 ? data.push('bg-green-200/70') :
            data[5] > 0 && data[5] <= 1 ? data.push('bg-yellow-200/70') :
            data.push('bg-red-400/70')
            return data
        }
    })
    return parsedForecast
}   

export { parseForecast }

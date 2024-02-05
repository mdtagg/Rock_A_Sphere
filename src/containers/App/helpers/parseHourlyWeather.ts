
function getColor(precip:number) {
    return precip === 0 ? 'bg-green-200/70' :
    precip > 0 && precip <= 1 ? 'bg-yellow-200/70' :
    'bg-red-400/70'
}

function parseHourlyWeather(data:any) {
    
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
    
    const parsedData = []
    for(let i = 0;i <= 167;i++) {
        const { time,weathercode,precipitation,snowfall,apparent_temperature,windspeed_10m } = hourlyData
        const day = []

        day[0] = time[i]
        day[1] = {
            weathercode:weathercode[i],
            precipitation:precipitation[i],
            snow_fall:snowfall[i],
            apparent_temperature:apparent_temperature[i],
            windspeed_10m:windspeed_10m[i],
            color:getColor(precipitation[i])
        }
        parsedData[i] = day
    }
    
    const currentHour = new Intl.DateTimeFormat(undefined,{hour:'numeric'}).format(new Date())
    while(currentHour !== parsedData[0][0]) parsedData.shift();
   
    return parsedData
}

export { parseHourlyWeather }
import { numArrayObj } from "../../containers/App/helpers/parseWeatherData"

function getColor(precip:number) {
    return precip === 0 ? 'bg-green-200/70' :
    precip > 0 && precip <= 1 ? 'bg-yellow-200/70' :
    'bg-red-400/70'
}

function parseHourlyWeather(data:numArrayObj) {
    
    const parsedData = []
    for(let i = 0;i <= 167;i++) {
        const { time,weathercode,precipitation,snowfall,apparent_temperature,windspeed_10m } = data
        const day = []
        const precip = precipitation[i] as number

        day[0] = time[i]
        day[1] = {
            weathercode:weathercode[i],
            precipitation:precipitation[i],
            snow_fall:snowfall[i],
            apparent_temperature:apparent_temperature[i],
            windspeed_10m:windspeed_10m[i],
            color:getColor(precip)
        }
        parsedData[i] = day
    }
    
    const currentHour = new Intl.DateTimeFormat(undefined,{hour:'numeric'}).format(new Date())
    // @ts-ignore
    while(currentHour !== parsedData[0][0]) parsedData.shift();
   
    return parsedData
}

export { parseHourlyWeather }
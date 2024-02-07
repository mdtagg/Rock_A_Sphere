
import { numArrayObj } from "./parseWeatherData"

function getRainTextColor(amtRain:number,upperLimit:number) {
    return (
        amtRain == 0 ? 'text-green-500' :
        amtRain < upperLimit ? 'text-yellow-500' : 
        'text-red-600'
    )
}

function getRainBgColor(data:number) {
    return data == 0 ? 'bg-green-200/70' : 
    data > 0 && data <= 0.5 ? 'bg-yellow-200/70' : 
    'bg-red-400/70'
}

const parseDailyWeather = (data:numArrayObj) => {
 
    //grabbing the date time and parsing it into weekday,am or pm 
    const days = data.time.slice(1,8)
    const pastSevenRain = data.precipitation_sum.slice(1,8)
    const pastThreeRain = data.precipitation_sum.slice(5,8)

    //getting the total amt of rain for past seven and past three
    const [pastSevenTotal,pastThreeTotal] = [pastSevenRain,pastThreeRain].map(value => {
        const total = value.reduce((total:number,amt:number) => total + amt)
        return parseFloat(total.toFixed(2))
    })

    const rainReadoutVals:[string,number,string,number][] = []

    //gettig the colors for the past seven and past three, changing the current date to today
    //getting the values for the rain readout component
    days.forEach((day:string,index:number) => {
        const color = getRainBgColor(pastSevenRain[index])
        const isToday = index == 6 ? "Today" : day
        rainReadoutVals[index] = [isToday,pastSevenRain[index],color,pastSevenTotal]
    })

    return {
        pastSevenTotal,
        pastSevenColor:getRainTextColor(pastSevenTotal,2),
        pastThreeTotal,
        pastThreeColor:getRainTextColor(pastThreeTotal,1),
        rainReadoutVals
    }
}

export { parseDailyWeather }
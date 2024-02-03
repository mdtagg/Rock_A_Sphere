
interface TDailyWeather {
    days: string[];
    pastSevenRain: number[];
    pastThreeRain: number[];
}

function parseRainData(weatherData:TDailyWeather) {
   
    //returns an object with the past 7 day and past 3 day rain totals
    //as well as their associated colors (red,yellow,green)
    const { pastSevenRain, pastThreeRain } = weatherData

    const [pastSevenTotal,pastThreeTotal] = [pastSevenRain,pastThreeRain].map(value => {
        const total = value.reduce((total,amt) => total + amt)
        return parseFloat(total.toFixed(2))
    })
    
    return {
        pastSevenTotal,
        pastSevenColor:getColor(pastSevenTotal,2),
        pastThreeTotal,
        pastThreeColor:getColor(pastThreeTotal,1)
    }
}

function getColor(amtRain:number,upperLimit:number) {

    return (
        amtRain == 0 ? 'text-green-500' :
        amtRain < upperLimit ? 'text-yellow-300' : 
        'text-red-600'
    )
}

export { parseRainData }
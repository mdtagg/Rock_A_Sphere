
interface TDailyWeather {
    days: string[];
    pastSevenRain: number[];
    pastThreeRain: number[];
}

function parseRainData(weatherData:TDailyWeather) {
    const { pastSevenRain, pastThreeRain } = weatherData
    const rainData = [ pastSevenRain, pastThreeRain ]
    const parsedData = rainData.map(data => {
        return data.reduce((total,amt) => {
            return total + amt
        })
    })
    console.log(parsedData)
    return {
        pastSevenTotal:parsedData[0],
        pastSevenColor:getColor(parsedData[0],2,0),
        pastThreeTotal:parsedData[1],
        pastThreeColor:getColor(parsedData[1],1,0)
    }
}

function getColor(dataFocus:number,upperLimit:number,lowerLimit:number) {

    return (
    dataFocus >= upperLimit ? 'text-red-600' :
    dataFocus < upperLimit && dataFocus > lowerLimit ? 'text-orange-400':
    'text-green-500'
    )
}

export { parseRainData }

import { getColor } from "./getColor"

function parseRainData(weatherData) {
    const {pastSevenRain,pastThreeRain} = weatherData
    const rainData = [pastSevenRain,pastThreeRain]
    const parsedData = rainData.map(data => {
        return data.reduce((total,amt) => {
            return total + amt
        }).toFixed(2)
    })

    return {
        pastSevenTotal:parsedData[0],
        pastSevenColor:getColor(parsedData[0],2,0),
        pastThreeTotal:parsedData[1],
        pastThreeColor:getColor(parsedData[1],1,0)
    }
}

export { parseRainData }
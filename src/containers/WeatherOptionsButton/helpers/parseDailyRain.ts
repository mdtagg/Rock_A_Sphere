
export interface DailyWeatherType {
    days: string[];
    pastSevenRain: number[];
    pastThreeRain: number[];
    [key:string]:any[]
}

function parseDailyRain(dailyData:DailyWeatherType) {

    const { days,pastSevenRain } = dailyData
    let parsedData:any[] = []
    
    days.forEach((day,index) => {
        let dataSection = []
        dataSection.push(day)
        dataSection.push(pastSevenRain[index])
        parsedData.push(dataSection)
    })

    parsedData.map(data => {
        data[1] === 0 ? data.push('bg-green-200/70') :
        data[1] > 0 && data[1] <= 0.5 ? data.push('bg-yellow-200/70') :
        data.push('bg-red-400/70')
        return data
    })
    return parsedData
}

export { parseDailyRain }
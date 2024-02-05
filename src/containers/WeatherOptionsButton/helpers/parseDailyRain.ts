
export interface DailyWeatherType {
    days: string[];
    pastSevenRain: number[];
    pastThreeRain: number[];
    [key:string]: (string | number) []
}

function parseDailyRain(dailyData:DailyWeatherType) {
    const { days, pastSevenRain } = dailyData
    let parsedData:any[] = []

    function getColor(index:number) {
        const rainAmt = pastSevenRain[index]
        return rainAmt == 0 ? 'bg-green-200/70' : 
        rainAmt > 0 && rainAmt <= 0.5 ? 'bg-yellow-200/70' : 
        'bg-red-400/70'
    }
   
    days.forEach((day,index) => {
        const color = getColor(index)
        parsedData[index] = [day,pastSevenRain[index],color]
    })
    return parsedData
}

export { parseDailyRain }
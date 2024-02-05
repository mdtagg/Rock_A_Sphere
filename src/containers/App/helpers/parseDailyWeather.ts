
function getColor(amtRain:number,upperLimit:number) {
    return (
        amtRain == 0 ? 'text-green-500' :
        amtRain < upperLimit ? 'text-yellow-500' : 
        'text-red-600'
    )
}

const parseDailyWeather = (data:any) => {
    // const dayOptions: Intl.DateTimeFormatOptions = { weekday:'short',day:'numeric' }
    const days = data.time.map((date:number) => {
        return Intl.DateTimeFormat(undefined,{ weekday:'short',day:'numeric' })
        .format(date * 1000)})
        .slice(1,8)

    const pastSevenRain = data.precipitation_sum.slice(1,8)
    const pastThreeRain = data.precipitation_sum.slice(5,8)

    const [pastSevenTotal,pastThreeTotal] = [pastSevenRain,pastThreeRain].map(value => {
        const total = value.reduce((total:number,amt:number) => total + amt)
        return parseFloat(total.toFixed(2))
    })
    const rainTotals = {
        pastSevenTotal,
        pastSevenColor:getColor(pastSevenTotal,2),
        pastThreeTotal,
        pastThreeColor:getColor(pastThreeTotal,1)
    }

    let pastSevenVals:any[] = []

    function getColorDaily(index:number) {
        const rainAmt = pastSevenRain[index]
        return rainAmt == 0 ? 'bg-green-200/70' : 
        rainAmt > 0 && rainAmt <= 0.5 ? 'bg-yellow-200/70' : 
        'bg-red-400/70'
    }
   
    days.forEach((day:string,index:number) => {
        const color = getColorDaily(index)
        pastSevenVals[index] = [day,pastSevenRain[index],color]
    })

    return {days,pastSevenRain,pastThreeRain,rainTotals,pastSevenVals}
}

export { parseDailyWeather }

/*
{
    rainTotals
    pastSevenRainInfo ([day,amt,color])

}
*/
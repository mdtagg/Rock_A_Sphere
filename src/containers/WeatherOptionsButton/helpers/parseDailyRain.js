

function parseDailyRain(dailyData) {
    const { days,pastSevenRain } = dailyData
        let parsedData = []
        
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
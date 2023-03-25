

function parseHourly(data) {
    const parsedData = []
    let index = 0
    while(index <= 167) {
        let dataSection = []
        for(let key in data) {
            dataSection.push(data[key][index])
        }
        parsedData.push(dataSection)
        index += 1
    }
    parsedData.map(data => {
        data[4] === 0 ? data.push('bg-green-200/70') :
        data[4] > 0 && data[4] <= 0.5 ? data.push('bg-yellow-200/70') :
        data.push('bg-red-400/70')
        return data
    })
    const currentDate = new Date()
    const currentHour = new Intl.DateTimeFormat(undefined,{hour:'numeric'}).format(currentDate).split(' ')
    
    if(currentHour[1] === 'PM') {
        parsedData.splice(0,12)
    }
    parsedData.splice(0,currentHour[0])
    return parsedData
}

export { parseHourly }
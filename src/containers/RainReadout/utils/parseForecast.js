function parseForecast(data) {
    console.log({data})
    const parsedData = []
    let index = 0
    while(index <= 6) {
        let dataSection = []
        for(let key in data) {
            dataSection.push(data[key][index])
        }
        parsedData.push(dataSection)
        index += 1
    }

    parsedData.map(data => {
        data[7] === 0 ? data.push('bg-green-200/70') :
        data[7] > 0 && data[1] <= 30 ? data.push('bg-yellow-200/70') :
        data.push('bg-red-400/70')
        return data
    })
    console.log({parsedData})
    return parsedData
}

export { parseForecast }
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
        data[5] === 0 ? data.push('bg-green-200/70') :
        data[5] > 0 && data[5] <= 1 ? data.push('bg-yellow-200/70') :
        data.push('bg-red-400/70')
        return data
    })
    return parsedData
}

export { parseForecast }
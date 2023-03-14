
function parseRainData(rainData) {
    const parsedData = rainData.map(data => {
        return data.reduce((total,amt) => {
            return total + amt
        }).toFixed(2)
    })
    return {
        pastSevenTotal:parsedData[0],
        pastThreeTotal:parsedData[1]
    }
}

export { parseRainData }
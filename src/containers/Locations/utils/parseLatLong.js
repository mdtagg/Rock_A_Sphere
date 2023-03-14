
//removes parenthesis if present and changes lat long to float
const parseLatLong = (latLong) => {
    latLong = latLong.split(',')
    if(latLong[0][0] === '(' || latLong[1][latLong.length - 1] === ')') {
        const latitude = parseFloat(latLong[0].slice(1))
        const longitude = parseFloat(latLong[1].slice(0,latLong[1].length - 1))
        return {latitude,longitude}
    }
    const latitude = parseFloat(latLong[0])
    const longitude = parseFloat(latLong[1])

    return {latitude,longitude}
}

export { parseLatLong }
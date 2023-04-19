
import { LatLong } from "./handleSubmit"

//removes parenthesis if present and changes lat long to float

const parseLatLong = (latLong:string):LatLong => {
    const latLongArray = latLong.split(',')
    if(latLongArray[0][0] === '(' || latLongArray[1][latLongArray.length - 1] === ')') {
        const latitude = latLongArray[0].slice(1)
        const longitude = latLongArray[1].slice(0,latLongArray[1].length - 1)
        return {latitude,longitude}
    }
    const latitude = latLongArray[0]
    const longitude = latLongArray[1]

    return {latitude,longitude}
}

export { parseLatLong }
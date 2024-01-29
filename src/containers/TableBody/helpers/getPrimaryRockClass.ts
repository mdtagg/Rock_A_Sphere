
import { TRockClasses } from "./getPrimaryRockCounts"

function getPrimaryRockClass(rockClasses:TRockClasses,rockClassesArray:string[]) {
    const classCounts = rockClassesArray.map(item => {
        return rockClasses[item]
    })
    const highestClass = Math.max(...classCounts)
    let primaryRockType = ""
    for(let rockType in rockClasses) {
        if(rockClasses[rockType] === highestClass) {
            primaryRockType = rockType
        }
    }
    return primaryRockType
}

export { getPrimaryRockClass }
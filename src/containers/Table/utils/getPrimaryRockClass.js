
function getPrimaryRockClass(rockClasses,rockClassesArray) {
    console.log({rockClasses,rockClassesArray})
    const classCounts = rockClassesArray.map(item => {
        return rockClasses[item]
    })
    const highestClass = Math.max(...classCounts)
    let primaryRockType = undefined
    for(let rockType in rockClasses) {
        if(rockClasses[rockType] === highestClass) {
            primaryRockType = rockType
        }
    }
    return primaryRockType
}

export { getPrimaryRockClass }
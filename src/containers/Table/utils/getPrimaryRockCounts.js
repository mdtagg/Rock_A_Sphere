

function getPrimaryRockCounts(rockTypeData) {
    const rockData = {
        rockClasses: {},
        rockClassesArray: []
    }
    
    rockTypeData.forEach(item => {
        const rockClass = item.class
        if(rockData.rockClassesArray.includes(rockClass)) {
            rockData.rockClasses[rockClass] += 1
        }else {
            rockData.rockClasses[rockClass] = 1
            rockData.rockClassesArray.push(rockClass)
        }
    })
    const { rockClasses,rockClassesArray } = rockData
    return {rockClasses,rockClassesArray}
}

export { getPrimaryRockCounts }
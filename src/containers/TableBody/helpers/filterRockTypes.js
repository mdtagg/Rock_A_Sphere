

function filterRockTypes(lithoCodes,rockTypes) {
    let rockTypeData = []
    for(let i = 0;i < lithoCodes.length;i++) {
        for(let j = 0;j < rockTypes.length;j++) {
            let currentRockType = rockTypes[j]
            if(lithoCodes[i] === currentRockType.lith_id) {
                rockTypeData.push(currentRockType)
                break
            }
        }
    }
    return rockTypeData
}

export { filterRockTypes }
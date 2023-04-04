

function parseRockLithos(rockTypes,rockClasses) {
    let kindsOfRock = []
    const rockDataArray = []
    rockTypes.forEach(type => {
        if(
            !rockDataArray.includes(type.name) && 
            !rockClasses.includes(type.name)
        ) {
            rockDataArray.push(type.name)
            kindsOfRock.push({
                name:type.name,
                color:type.color
            })
        }
    })
    return kindsOfRock
}

export { parseRockLithos }


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
    if(kindsOfRock.length > 5) {
        kindsOfRock = kindsOfRock.slice(0,5)
    }
    return kindsOfRock
}

export { parseRockLithos }
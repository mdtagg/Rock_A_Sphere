
import { TRockType } from ".."

interface TKindsOfRock {
    name:string 
    color:string
}

function parseRockLithos(rockTypes:TRockType,rockClasses:string[]) {
    let kindsOfRock:TKindsOfRock[] = []
    const rockDataArray:string[] = []
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
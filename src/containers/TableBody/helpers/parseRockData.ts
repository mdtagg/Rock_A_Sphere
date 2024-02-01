import { RockServiceType } from "../../../services/RockDataService"
import { KindOfRockType } from ".."

export const parseRockData = (currentLocationData:RockServiceType[],rockTypes:Map<any,any> | undefined) => {
    //This function takes litho codes from the current location and returns
    //the primary rock class as well as the different kinds of rocks
    let currentLocationRockTypes:any[] = []
    //the primary classes are added to the set to prevent them showing up 
    //in the types of rock
    let uniqueRockTypes = new Set().add("sedimentary").add("igneous").add("metamorphic")
    let primaryRockType = ""
    let totals = new Map()
    let kindsOfRock:KindOfRockType[] = []
    let max = 0

    currentLocationData.forEach(location => currentLocationRockTypes.push(...location.liths))
    currentLocationRockTypes = currentLocationRockTypes.map(val => rockTypes?.get(val))
    
    currentLocationRockTypes.forEach(val => {
        totals.set(val.class,(totals.get(val.class) || 0) + 1)
        const count = totals.get(val.class)
        if(count > max) {
            primaryRockType = val.class 
            max = count
        }

        if(!uniqueRockTypes.has(val.name)) {
            kindsOfRock.push({name:val.name,color:val.color});
            uniqueRockTypes.add(val.name)
        }
    })

    return { primaryRockType, kindsOfRock }
}
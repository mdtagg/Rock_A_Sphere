import { RockServiceType } from "../../../services/RockDataService"
import { KindOfRockType } from "../../TableBody"

export const parseRockData = (currentLocationData:RockServiceType[],rockTypes:Map<any,any> | undefined) => {
    //This function takes litho codes from the current location and returns
    //the primary rock class as well as the different kinds of rocks
    let currentLocationRockTypes:any[] = []
    let uniqueRockTypes = new Set().add("sedimentary").add("igneous").add("metamorphic")
    let primaryRockType = [{
        name:"",
        color:""
    }]
    let totals = new Map()
    let kindsOfRock:KindOfRockType[] = []
    let max = 0

    currentLocationData.forEach(location => currentLocationRockTypes.push(...location.liths))
    currentLocationRockTypes = currentLocationRockTypes.map(val => rockTypes?.get(val))
    
    currentLocationRockTypes.forEach(val => {

        totals.set(val.class,(totals.get(val.class) || 0) + 1)
        const count = totals.get(val.class)
        if(count > max) {
            primaryRockType[0].name = val.class 
            max = count
        }

        if(!uniqueRockTypes.has(val.name)) {
            kindsOfRock.push({name:val.name,color:val.color});
            uniqueRockTypes.add(val.name)
        }
    })
    primaryRockType[0].color = getColor(primaryRockType[0].name)

    return { primaryRockType, kindsOfRock }
}

function getColor(data:string):string {
    return data === 'sedimentary' ? '#FF8C00' :
    data === 'metamorphic' ? '#AC902A' :
    '#FF0000'
}
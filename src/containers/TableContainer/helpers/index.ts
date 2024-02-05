import { RockServiceType } from "../../../services/RockDataService"
import { KindOfRockType } from "../../App/types/app"

interface TDailyWeather {
    days: string[];
    pastSevenRain: number[];
    pastThreeRain: number[];
}

export const parseRainData = (weatherData:TDailyWeather) => {
   
    //returns an object with the past 7 day and past 3 day rain totals
    //as well as their associated colors (red,yellow,green)
    const { pastSevenRain, pastThreeRain } = weatherData

    function getColor(amtRain:number,upperLimit:number) {
        return (
            amtRain == 0 ? 'text-green-500' :
            amtRain < upperLimit ? 'text-yellow-500' : 
            'text-red-600'
        )
    }

    const [pastSevenTotal,pastThreeTotal] = [pastSevenRain,pastThreeRain].map(value => {
        const total = value.reduce((total,amt) => total + amt)
        return parseFloat(total.toFixed(2))
    })
    
    return {
        pastSevenTotal,
        pastSevenColor:getColor(pastSevenTotal,2),
        pastThreeTotal,
        pastThreeColor:getColor(pastThreeTotal,1)
    }
}

export const parseRockData = (currentLocationData:RockServiceType[],rockTypes:Map<any,any> | undefined) => {
    //This function takes litho codes from the current location and returns
    //the primary rock class as well as the different kinds of rocks

    function getColor(data:string):string {
        return data === 'sedimentary' ? '#FF8C00' :
        data === 'metamorphic' ? '#AC902A' :
        '#FF0000'
    }

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
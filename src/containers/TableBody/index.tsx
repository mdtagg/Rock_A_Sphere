
import RockDataService from "../../services/RockDataService";
// import { getLithoCodes } from "./helpers/getLithoCodes";
import { filterRockTypes } from "./helpers/filterRockTypes";
import { getPrimaryRockCounts } from "./helpers/getPrimaryRockCounts"
import { getPrimaryRockClass } from "./helpers/getPrimaryRockClass";
import { parseRockLithos } from "./helpers/parseRockLithos";
import { useState,useEffect,useContext } from 'react';
import { parseRainData } from './helpers/parseRainData';
import WeatherContext from '../App/contexts/WeatherContext';
import TableContext from "./contexts/TableContext";
import { PastSevenRain } from "./components/PastSevenRain";
import { PastThreeRain } from "./components/PastThreeRain";
import { PrimaryRockType } from "./components/PrimaryRockType";
import { KindsOfRock } from "./components/KindsOfRock";
import { DaysToClimb } from "./components/DaysToClimb";

interface TableContextType {
    
}

interface TotalRainType {
    pastSevenTotal:string
    pastSevenColor:string
    pastThreeTotal:string
    pastThreeColor:string
}

type KindOfRockType = {
    name:string
    color:string
}

export interface RockDataType {
    primaryRockClass:string
    kindsOfRock: KindOfRockType[]
}

interface TRockType {
    class:string 
    color:string 
    fill:number 
    group:string 
    lith_id:string 
    name:string 
    t_units:string 
    type:string 
}

const TableBody = () => {

    const { weatherData, location } = useContext(WeatherContext)!
    const [ totalRain, setTotalRain ] = useState<TotalRainType | undefined>(undefined)
    const [ rockTypes ,setRockTypes ] = useState<TRockType | undefined>(undefined)
    // console.log(rockTypes)
    const [ rockData, setRockData ] = useState<RockDataType | undefined>(undefined)
    // console.log(rockData)

    const tableContextValues = 
    {
        totalRain,
        rockData
    }

    useEffect(() => {
        if(!weatherData) return
        const parsedRainData = parseRainData(weatherData.dailyWeather)
        setTotalRain(parsedRainData)
    },[weatherData])

    useEffect(() => {
        (async function() {
            const rockTypes = await RockDataService.getRockTypes()
            setRockTypes(rockTypes.success.data)
        })()
    },[])

    useEffect(() => {
        if(!rockTypes) return
        (async function() {
            const rockData = await RockDataService.getRockData(
                location.coords.latitude,
                location.coords.longitude
            )
            // console.log({rockData})
            const lithoCodes = rockData.map(entry => {
                const [ liths ] = entry.liths 
                return liths
            })
            console.log({lithoCodes,rockTypes})
            const allRockTypes = filterRockTypes(lithoCodes,rockTypes)
            const primaryRockCounts = getPrimaryRockCounts(allRockTypes)
            const primaryRockClass = getPrimaryRockClass(primaryRockCounts.rockClasses,primaryRockCounts.rockClassesArray)
            const kindsOfRock = parseRockLithos(allRockTypes,primaryRockCounts.rockClassesArray)

            setRockData({ primaryRockClass, kindsOfRock })
        })()
    },[location,rockTypes])
    
    return (
        <>
        {rockData &&
        <tbody>
            {weatherData &&
            <TableContext.Provider value={tableContextValues}>
                <tr className='flex items-center border-t-2 border-black h-full sm:h-[100px] wide:h-[100px] wide:text-sm'>
                    {/* <PastSevenRain />
                    <PastThreeRain />
                    <PrimaryRockType />
                    <KindsOfRock />
                    <DaysToClimb /> */}
                </tr>
            </TableContext.Provider>
            }
        </tbody>}
        </>
    )
}

export { TableBody }
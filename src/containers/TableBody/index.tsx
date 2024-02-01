
import RockDataService from "../../services/RockDataService";
import { useState,useEffect,useContext } from 'react';
import { parseRainData } from './helpers/parseRainData';
import TableContext from "./contexts/TableContext";
import { PastSevenRain } from "./components/PastSevenRain";
import { PastThreeRain } from "./components/PastThreeRain";
import { PrimaryRockType } from "./components/PrimaryRockType";
import { KindsOfRock } from "./components/KindsOfRock";
import { DaysToClimb } from "./components/DaysToClimb";
import { LocationContext } from "../App/contexts/FormContext";
import { parseRockData } from "./helpers/parseRockData";

export interface TableContextType {
    totalRain: TotalRainType | undefined;
    rockData: RockDataType | undefined;
}

interface TotalRainType {
    pastSevenTotal:number
    pastSevenColor:string
    pastThreeTotal:number
    pastThreeColor:string
}

export type KindOfRockType = {
    name:string
    color:string
}

export interface RockDataType {
    primaryRockType:string
    kindsOfRock: KindOfRockType[]
}

export type TRockType = {
    class:string 
    color:string 
    fill:number 
    group:string 
    lith_id:number
    name:string 
    t_units:number
    type:string 
}

const TableBody = () => {

    const { weatherData, location } = useContext(LocationContext)!
    const [ totalRain, setTotalRain ] = useState<TotalRainType | undefined>(undefined)
    const [ rockTypes ,setRockTypes ] = useState<Map<any,any> | undefined>(undefined)
    const [ rockData, setRockData ] = useState<RockDataType | undefined>(undefined)

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
            const rockTypeMap = new Map()
            rockTypes.success.data.forEach((val:TRockType) => rockTypeMap.set(val.lith_id,val))
            setRockTypes(rockTypeMap)
        })()
    },[])

    useEffect(() => {
        if(!rockTypes) return
        (async function() {
            const currentLocationData = await RockDataService.getRockData(
                location.coords.latitude,
                location.coords.longitude
            )
            const rockData = parseRockData(currentLocationData,rockTypes)
            setRockData(rockData)
        })()
    },[location,rockTypes])
    
    return (
        <>
        {rockData &&
        <tbody>
            {totalRain &&
            <TableContext.Provider value={tableContextValues}>
                <tr className='flex items-center border-t-2 border-black h-full sm:h-[100px] wide:h-[100px] wide:text-sm'>
                    <PastSevenRain />
                    <PastThreeRain />
                    <PrimaryRockType />
                    <KindsOfRock />
                    <DaysToClimb />
                </tr>
            </TableContext.Provider>
            }
        </tbody>}
        </>
    )
}

export { TableBody }
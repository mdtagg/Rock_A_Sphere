import { useState,useEffect } from "react"
import RockDataService from "../../services/RockDataService";
import { getLithoCodes } from "./utils/getLithoCodes";
import { filterRockTypes } from "./utils/filterRockTypes";
import { getPrimaryRockCounts } from "./utils/getPrimaryRockCounts"
import { getPrimaryRockClass } from "./utils/getPrimaryRockClass";
import { parseRockLithos } from "./utils/parseRockLithos";
import { TableHead } from "./TableHead";
import { TableBody } from "../TableBody";

const Table = (props) => {

    const [rockTypes,setRockTypes] = useState([])
    const [rockData,setRockData] = useState(
        {
        primaryRockClass:'sedimentary',
        kindsOfRock: 
        [
            {
                name:'sandstone',
                color:'#FFD500'
            }
        ]
    })

    useEffect(() => {
        (async function() {
            const rockTypes = await RockDataService.getRockTypes()
            setRockTypes(rockTypes.success.data)
        })()
    },[])
    

    useEffect(() => {
        if(!rockTypes.length) return
        (async function() {
            const rockData = await RockDataService.getRockData(
                props.location.coords.latitude,
                props.location.coords.longitude
            )
            const lithoCodes = getLithoCodes(rockData)
            const allRockTypes = filterRockTypes(lithoCodes,rockTypes)
            const primaryRockCounts = getPrimaryRockCounts(allRockTypes)
            const primaryRockClass = getPrimaryRockClass(primaryRockCounts.rockClasses,primaryRockCounts.rockClassesArray)
            const kindsOfRock = parseRockLithos(allRockTypes,primaryRockCounts.rockClassesArray)
            setRockData({primaryRockClass,kindsOfRock})
        })()
    },[props.location])
    
    return (
        <table class='flex flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0'>
            <TableHead/>
            <TableBody
                rockData={rockData}
                totalRain={props.totalRain}
                weatherData={props.weatherData}

            />
        </table>
    )
}

export default Table
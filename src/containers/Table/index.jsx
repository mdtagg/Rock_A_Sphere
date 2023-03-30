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
    const [rockData,setRockData] = useState({
        primaryRockClass: 'sedimentary',
        kindsOfRock: {
            name: 'sandstone',
            color: '#FFD500'
        }
    })
    console.log({rockData,rockTypes})
    console.log(props.buttonTitle)

    const hide = 
    props.buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'

    useEffect(() => {
        (async function() {
            const rockTypes = await RockDataService.getRockTypes()
            setRockTypes(rockTypes.success.data)
        })()
    },[])

    useEffect(() => {
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
    },[props.location,rockTypes])
    
    return (
        <table class={`${hide} flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <TableHead/>
            <TableBody
                location={props.location}
                rockData={rockData}
                weatherData={props.weatherData}
            />
        </table>
    )
}

export default Table

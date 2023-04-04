import { useState,useEffect,useContext } from "react"
// import RockDataService from "../../services/RockDataService";
// import { getLithoCodes } from "../TableBody/helpers/getLithoCodes";
// import { filterRockTypes } from "../TableBody/helpers/filterRockTypes";
// import { getPrimaryRockCounts } from "../TableBody/helpers/getPrimaryRockCounts"
// import { getPrimaryRockClass } from "../TableBody/helpers/getPrimaryRockClass";
// import { parseRockLithos } from "../TableBody/helpers/parseRockLithos";
import { TableHead } from "../../components/TableHead";
import { TableBody } from "../TableBody";
import WeatherContext from "../App/contexts/WeatherContext";

const Table = () => {

    // const [rockTypes,setRockTypes] = useState([])
    // const [rockData,setRockData] = useState()
    const { buttonTitle } = useContext(WeatherContext)

    const hide = 
    buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'

    // useEffect(() => {
    //     (async function() {
    //         const rockTypes = await RockDataService.getRockTypes()
    //         setRockTypes(rockTypes.success.data)
    //     })()
    // },[])

    // useEffect(() => {
    //     if(!rockTypes.length) return
    //     (async function() {
    //         const rockData = await RockDataService.getRockData(
    //             location.coords.latitude,
    //             location.coords.longitude
    //         )
    //         const lithoCodes = getLithoCodes(rockData)
    //         const allRockTypes = filterRockTypes(lithoCodes,rockTypes)
    //         const primaryRockCounts = getPrimaryRockCounts(allRockTypes)
    //         const primaryRockClass = getPrimaryRockClass(primaryRockCounts.rockClasses,primaryRockCounts.rockClassesArray)
    //         const kindsOfRock = parseRockLithos(allRockTypes,primaryRockCounts.rockClassesArray)

    //         setRockData({primaryRockClass,kindsOfRock})
    //     })()
    // },[location,rockTypes])
    
    return (
        <table class={`${hide} flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <TableHead/>
            <TableBody
                // rockData={rockData}
            />
        </table>
    )
}

export default Table

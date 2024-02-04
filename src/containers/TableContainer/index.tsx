import RockDataService from "../../services/RockDataService";
import { TotalRainType,RockDataType,TRockType } from "../App/types/app";
import { parseRainData, parseRockData } from "./helpers"
import { useState,useEffect,useContext } from "react"
import { Header } from "./components/Header";
import { LocationContext } from "../App/contexts/FormContext";
import { TableInfoContext } from "../App/contexts/FormContext";
import { RockList } from "./components/RockList";
import { ListWindow } from "./components/ListWindow";
import { DaysToClimb } from "./components/DaysToClimb";

const TableContainer = () => {

    const { buttonTitle } = useContext(TableInfoContext)!
    const { weatherData, location } = useContext(LocationContext)!
    const [ totalRain, setTotalRain ] = useState<TotalRainType | undefined>(undefined)
    const [ rockTypes ,setRockTypes ] = useState<Map<any,any> | undefined>(undefined)
    const [ rockData, setRockData ] = useState<RockDataType | undefined>(undefined)

    const tableDataStyle = "flex flex-col border-r-2 border-b-2 border-black items-center justify-end w-1/5 p-1 h-full sm:p-0"
    const tableRainTextStyle = `text-xl flex items-center h-full font-bold`
    const tableAnchorStyle = "text-black absolute text-[.2rem] font-extrabold"

    const hide = 
    buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'

    const headerTitles = [
        "Past 7 Total Rain/Snow",
        "Past 3 Total Rain/Snow",
        "Primary Rock Type",
        "Other Rock Types",
        "Days of Fragile Rock Left"
    ]

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
        <table className={`${hide} flex-col w-2/5 bg-slate-200/50 border-t-2 border-l-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <thead>
                <tr className='flex wide:text-xs sm:text-xs'>
                    {headerTitles.map((title) => Header(title))}
                </tr>
            </thead>
            {rockData && totalRain &&
            <tbody>
                <tr className='flex items-center h-32 sm:h-[100px] wide:h-[100px] wide:text-sm'>
                    <td className={tableDataStyle}>
                        <p
                            className={`${tableRainTextStyle} ${totalRain?.pastSevenColor}`}
                        >
                            {totalRain?.pastSevenTotal}"
                        </p>
                        <a
                            className={tableAnchorStyle}
                            href="https://open-meteo.com/"
                        >
                            "Weather data from Open-Medio"
                        </a>
                    </td>
                    <td className={tableDataStyle}>
                        <p
                            className={`${tableRainTextStyle} ${totalRain?.pastSevenColor}`}
                        >
                            {totalRain?.pastThreeTotal}"
                        </p>
                    </td>
                    <td className={tableDataStyle}>
                        <RockList
                            list={rockData!.primaryRockType}
                        />
                        <a
                            className={tableAnchorStyle}
                            href={`https://macrostrat.org/map/loc/${location.coords.longitude}/${location.coords.latitude}#z=14`}
                        >
                            "Geological data from MacroStrat"
                        </a>
                    </td>
                    <td className={tableDataStyle}>
                        <ListWindow
                            reRenderData={rockData}
                            data={rockData.kindsOfRock}
                            pages={3}
                            MappingComponent={RockList}
                        />
                    </td>
                    <td className={tableDataStyle}>
                        <DaysToClimb
                            rockData={rockData}
                            totalRain={totalRain}
                        />
                    </td>
                </tr>
            </tbody>}
        </table>
    )
}

export { TableContainer }
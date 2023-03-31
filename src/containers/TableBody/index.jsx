import DaysToClimb from '../Table/DaysToClimb';
import { PrimaryRockType } from './PrimaryRockType';
import { KindsOfRock } from './KindsOfRock';
import { useState,useEffect } from 'react';
import { NavArrows } from '../../components/NavArrows';
import { parseRainData } from './utils/parseRainData';


const TableBody = (props) => {

    const {latitude,longitude} = props.location.coords
    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    const [totalRain,setTotalRain] = useState({})

    useEffect(() => {
        if(!props.weatherData) return
        const parsedRainData = parseRainData(props.weatherData.dailyWeather)
        setTotalRain(parsedRainData)
    },[props.weatherData])
    
    return (
        <>
        {props.rockData &&
        <tbody>
            {props.weatherData &&
            <tr class='flex items-center border-t-2 border-black h-full sm:h-[100px] wide:h-[100px] wide:text-sm'>
                <td class={`flex flex-col justify-end items-center  border-r-2 border-black w-1/5 h-full gap-1`}>
                    <p class={`text-xl flex items-center h-full font-bold ${totalRain.pastSevenColor}`}>
                        {totalRain.pastSevenTotal} <i>"</i>
                    </p>
                    <a 
                        class='text-black absolute text-[.2rem] font-extrabold' 
                        href='https://open-meteo.com/' 
                        target='_blank'
                    >
                        Weather data from Open-Medio
                    </a>
                </td>
                <td class={`flex items-center justify-center text-xl ${totalRain.pastThreeColor} font-bold border-r-2 border-black w-1/5 h-full gap-1`}> 
                    {totalRain.pastThreeTotal} <i>"</i>
                </td> 
                <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-end w-1/5 p-1 h-full sm:p-0 '>
                    <div class='h-full w-full flex justify-center items-center'>
                        <PrimaryRockType
                            rockData={props.rockData}
                        />
                    </div>
                    <a 
                        class='text-black text-[.3rem] absolute font-extrabold' 
                        href={`https://macrostrat.org/map/loc/${longitude}/${latitude}#z=14`} 
                        target='_blank'>Geological data from MacroStrat
                    </a>
                </td>
                <td class='flex flex-col gap-1 w-1/5 border-r-2 border-black h-full'>
                    <KindsOfRock
                        rockData={props.rockData}
                        currentPageIndex={currentPageIndex}
                    />
                    {props.rockData.kindsOfRock.length > 3 &&
                        <NavArrows
                            currentPageIndex={currentPageIndex}
                            dataFocus={props.rockData.kindsOfRock}
                            setCurrentPageIndex={setCurrentPageIndex}
                            pageLength={3}
                        />
                    }
                </td>
                <td class='w-1/5'>
                    <DaysToClimb 
                        totalRain={totalRain}
                        rockData={props.rockData}
                    />
                </td>
            </tr>}
        </tbody>}
        </>
    )
}

export { TableBody }
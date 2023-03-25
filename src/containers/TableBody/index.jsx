import DaysToClimb from '../Table/DaysToClimb';
import { PrimaryRockType } from './PrimaryRockType';
import { KindsOfRock } from './KindsOfRock';
import { useState,useEffect } from 'react';
import { NavArrows } from '../../components/NavArrows';
import { parseRainData } from './utils/parseRainData';


const TableBody = (props) => {

    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    const [totalRain,setTotalRain] = useState({})

    useEffect(() => {
        if(!props.weatherData) return
        // const { pastSevenRain,pastThreeRain } = props.weatherData.dailyWeather
        const parsedRainData = parseRainData(props.weatherData.dailyWeather)
        setTotalRain(parsedRainData)
    },[props.weatherData])
    
    return (
        <tbody>
            {props.weatherData &&
            <tr class='flex items-center border-t-2 border-black h-full sm:h-[100px] wide:h-[100px] wide:text-sm'>
                <td class={`flex justify-center items-center text-xl font-bold ${totalRain.pastSevenColor} border-r-2 border-black w-1/5 h-full gap-1`}>
                    {totalRain.pastSevenTotal} <i>"</i>
                </td>
                <td class={`flex items-center justify-center text-xl ${totalRain.pastThreeColor} font-bold border-r-2 border-black w-1/5 h-full gap-1`}> 
                    {totalRain.pastThreeTotal} <i>"</i>
                </td> 
                <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-center w-1/5 p-1 h-full sm:p-0 '>
                    <PrimaryRockType
                        rockData={props.rockData}
                    />
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
                        totalRain={props.totalRain}
                        rockData={props.rockData}
                        weatherData={props.weatherData}

                    />
                </td>
            </tr>
}
        </tbody>
    )
}

export { TableBody }
import DaysToClimb from '../Table/DaysToClimb';
import { PrimaryRockType } from './PrimaryRockType';
import { KindsOfRock } from './KindsOfRock';
import { useState } from 'react';
import { NavArrows } from '../../components/NavArrows';

const TableBody = (props) => {

    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    const { pastSevenTotal,pastThreeTotal } = props.totalRain

    const pastSevenColor = 
        pastSevenTotal >= 2 ? 'text-red-600' :
        pastSevenTotal < 2 && pastSevenTotal > 0 ? 'text-orange-500':
        'text-green-400'

    const pastThreeColor = 
        pastThreeTotal >= 1 ? 'text-red-600' :
        pastThreeTotal < 1 && pastThreeTotal > 0 ? 'text-orange-500' :
        'text-green-400'
    
    return (
        <tbody>
            <tr class='flex items-center border-t-2 border-black h-full sm:h-[100px] wide:h-[100px] wide:text-sm'>
                <td class={`flex justify-center items-center text-xl font-bold ${pastSevenColor} border-r-2 border-black w-1/5 h-full gap-1`}>
                    {props.totalRain.pastSevenTotal} <i>in</i>
                </td>
                <td class={`flex items-center justify-center text-xl ${pastThreeColor} font-bold border-r-2 border-black w-1/5 h-full gap-1`}>
                    {props.totalRain.pastThreeTotal} <i>in</i>
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
        </tbody>
    )
}

export { TableBody }
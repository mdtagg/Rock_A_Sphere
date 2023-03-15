import DaysToClimb from '../Table/DaysToClimb';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryRockType } from './PrimaryRockType';
import { KindsOfRock } from './KindsOfRock';

const TableBody = (props) => {

    return (
        <tbody>
            <tr class='flex items-center border-t-2 border-black h-full wide:text-sm'>
                
                <td class='flex justify-center items-center text-xl font-bold text-blue-600 border-r-2 border-black w-1/5 h-full gap-1'>
                    {props.totalRain.pastSevenTotal} <i>in</i>
                </td>
                <td class='flex items-center justify-center text-xl text-blue-600 font-bold border-r-2 border-black w-1/5 h-full gap-1'>
                    {props.totalRain.pastThreeTotal} <i>in</i>
                </td>
                <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-center w-1/5 p-1 h-full sm:p-0 '>
                    <PrimaryRockType
                        rockData={props.rockData}
                    />
                </td>
                <td class='w-1/5 border-r-2 border-black h-full'>
                    <KindsOfRock
                        rockData={props.rockData}
                    />
                    {/* <div class='flex flex-col gap-1 p-1 items-center justify-center h-full sm:p-0 wide:text-xs'>
                    {props.rockData.kindsOfRock.map(item => {
                        return (
                            <div 
                                class="text-center rounded font-bold w-full border-2 text-clip overflow-hidden border-black sm:text-xs " 
                                style={{backgroundColor: `${item.color}`, color: item.color === '#000000' ? 'white' : 'black'}}
                                key={uuidv4()}
                            >
                                {item.name}
                            </div>
                        )
                    })}
                    </div> */}
                </td>
                <td class='w-1/5'>
                    <DaysToClimb 
                        totalRain={props.totalRain}
                        rockData={props.rockData}
                    />
                </td>
            </tr>
        </tbody>
    )
}

export { TableBody }
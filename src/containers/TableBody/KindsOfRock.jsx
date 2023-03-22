import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
import { getPageData } from '../../components/NavArrows/utils/getPageData';

const KindsOfRock = (props) => {

    const [rockDisplay,setRockDisplay] = useState([])
    console.log(props.currentPageIndex,rockDisplay)

    useEffect(() => {
        const { kindsOfRock } = props.rockData
        const { currentPageIndex } = props
        if(kindsOfRock.length > 3) {
            getPageData(currentPageIndex,kindsOfRock,setRockDisplay,3)
        }else {
            setRockDisplay(kindsOfRock)
        }
        
    },[props.rockData,props.currentPageIndex])
    return (
        <div class='flex flex-col gap-1 p-1 items-center justify-center h-full sm:p-0 wide:text-xs'>
            {rockDisplay.map(item => {
                
                return (
                    <button 
                        class="text-center rounded font-bold w-full border-2 text-clip overflow-hidden border-black sm:text-xs " 
                        style=
                        {{
                            backgroundColor: `${item.color}`, 
                            color: item.color === '#000000' ? 'white' : 'black'
                        }}
                        key={uuidv4()}
                    >
                        <a href={`https://en.wikipedia.org/wiki/${item.name}`} target='_blank'>{item.name}</a>
                    </button>
                )
            })}
        </div>
    )
}

export { KindsOfRock }

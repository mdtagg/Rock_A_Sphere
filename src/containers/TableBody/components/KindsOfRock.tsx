import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect,useContext } from 'react';
import { getPageData } from '../../../components/NavArrows/utils/getPageData';
import TableContext from '../contexts/TableContext';
import { NavArrows } from '../../../components/NavArrows';
import { KindOfRockType } from '..';

const KindsOfRock = () => {

    const [ rockDisplay, setRockDisplay ] = useState<Array<KindOfRockType>>([])
    const { rockData } = useContext(TableContext)!
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    useEffect(() => {
        const { kindsOfRock } = rockData!
        if(kindsOfRock.length > 3) {
            getPageData(currentPageIndex,kindsOfRock,setRockDisplay,3)
        }else {
            setRockDisplay(kindsOfRock)
        }
        
    },[rockData,currentPageIndex])
    return (
            <>
            <div className='flex flex-col w-full gap-1 p-1 items-center justify-center h-full sm:p-0 wide:text-xs'>
                {rockDisplay.map(item => {
                return (
                    <button 
                        className="text-center rounded font-bold w-full border-2 text-clip overflow-hidden border-black sm:text-xs " 
                        style=
                        {{
                            backgroundColor: `${item.color}`, 
                            color: item.color === '#000000' ? 'white' : 'black'
                        }}
                        key={uuidv4()}
                    >
                        <a 
                            href={`https://en.wikipedia.org/wiki/${item.name}`} 
                            target='_blank'
                        >
                            {item.name}
                        </a>
                    </button>
                )
                })}
            </div>
            {rockData!.kindsOfRock.length > 3 &&
                <NavArrows
                    currentPageIndex={currentPageIndex}
                    dataFocus={rockData!.kindsOfRock}
                    setCurrentPageIndex={setCurrentPageIndex}
                    pageLength={3}
                />
            }
              </>
    )
}

export { KindsOfRock }
